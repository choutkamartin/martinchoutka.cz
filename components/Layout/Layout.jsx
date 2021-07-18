import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <Banner />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
