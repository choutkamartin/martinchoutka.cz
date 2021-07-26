import Head from "next/head";
import HeroComponent from "../components/HeroComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "banner",
        "websites",
      ])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - Úvod</title>
      </Head>
      <HeroComponent />
    </>
  );
}
