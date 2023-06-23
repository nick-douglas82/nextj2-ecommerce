import { createContext, useContext, useReducer, useEffect } from 'react';
import { User } from "@supabase/supabase-js";
import { supabase } from '@/lib/supabaseClient';

type UnauthenticatedUser = {
    auth: false;
};

type AuthenticatedUser = {
    auth: true;
    user: User;
};

export type AuthUser = UnauthenticatedUser | AuthenticatedUser;
export type UserAction = | { type: 'SET_USER', user: AuthUser } | { type: 'CLEAR_USER' }
type UserState = AuthUser;
type UserDispatch = (action: UserAction) => void;

const UserStateContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

const authReducer = (_state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'SET_USER': {
            return action.user;
        }
        case 'CLEAR_USER': {
            return { auth: false };
        }
        default:
            throw new Error(`Unhandled action type`);
    }
};

const UserProvider: React.FC<{ children: React.ReactNode, initialState: UserState }> = ({ children, initialState }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        (async () => {
            supabase.auth.onAuthStateChange((event, session) => {
                switch (event) {
                    case 'SIGNED_IN': {
                        dispatch({
                            type: 'SET_USER', user: session
                                ? { auth: true, user: session.user }
                                : { auth: false }
                        });

                        return;
                    }
                    case 'SIGNED_OUT': {
                        dispatch({ type: 'CLEAR_USER' });
                        return;
                    }
                }
            })
        })();
    }, [])

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

const useUserState = () => {
    const state = useContext(UserStateContext);

    if (typeof state === 'undefined') {
        throw new Error('useUserState must be used within a UserStateContext');
    }

    return state;
};

const useUserDispatch = () => {
    const dispatch = useContext(UserDispatchContext);

    if (typeof dispatch === 'undefined') {
        throw new Error('useUserDispatch must be used within a UserDispatchContext');
    }

    return dispatch;
};

export { UserProvider, useUserState, useUserDispatch };