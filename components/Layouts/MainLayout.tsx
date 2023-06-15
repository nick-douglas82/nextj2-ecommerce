import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
    children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;