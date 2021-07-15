import Head from "next/head";
import Header from "./Header"
import Footer from "./Footer"

export const Layout = ({ children }) => {
    return (
        <div className="app">
            <Header />
            {children}
            <Footer />
        </div>
    );
};