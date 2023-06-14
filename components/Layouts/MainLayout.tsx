import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;