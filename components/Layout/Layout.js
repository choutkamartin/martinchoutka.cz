import Head from "next/head";
import Header from "./Header"
import Footer from "./Footer"

export const Layout = ({ children }) => {
    return (
        <div className="app">
            <Head>
                <title>Martin Choutka - Programování</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="author" content="Martin Choutka" />
                <meta
                    name="description"
                    content="Blog a portfolio, na kterém jsou publikována zajímavá témata o programování."
                />
                <meta property="og:title" content="Martin Choutka" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.martinchoutka.cz/" />
                <meta
                    property="og:image"
                    content="https://www.martinchoutka.cz/avatar.jpg"
                />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    );
};