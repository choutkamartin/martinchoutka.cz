import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Maintenance from "../../components/Maintenance";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "banner",
        "open-source",
      ])),
    },
  };
}

export default function OpenSource() {
  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - Open-source</title>
      </Head>
      <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
        <Maintenance />
      </main>
    </>
  );
}
