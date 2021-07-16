import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common"
      ])),
    },
  };
}

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Martin Choutka - O mně</title>
      </Head>
    </>
  )
}
