import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    // @ts-ignore
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)
