import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Martin Choutka - O mně</title>
      </Head>
      <main
        className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28 bg-contain bg-no-repeat"
        style={{ backgroundImage: 'url("/about-me.svg")' }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Martin Choutka</h1>
        <h2 className="text-xl font-extrabold text-gray-500 mb-24">
          Programátor / student
        </h2>
        <div className="w-6/12">
          <h3 className="border-b-4 inline-block text-2xl border-indigo-700 font-extrabold mb-4 pb-2">
            Studium
          </h3>
          <p className="text-medium font-base text-gray-500 mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            velit minus. Neque excepturi, maiores aspernatur fugit voluptatibus
            sunt? Voluptate ducimus, reiciendis voluptatum accusantium vitae
            nesciunt nisi deserunt possimus tempora repellendus.
          </p>
          <Image src="/icons/czu.svg" width="250" height="100" alt="Logo ČZU" />
        </div>
      </main>
    </>
  );
}
