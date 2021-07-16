import Head from "next/head";
import HeroComponent from "../components/HeroComponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Choutka - Úvod</title>
      </Head>
      <HeroComponent />
    </>
  );
}
