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
        <div className="w-6/12 mb-24">
          <h3 className="border-b-4 inline-block text-2xl border-indigo-700 font-extrabold mb-4 pb-2">
            Studium
          </h3>
          <p className="text-medium font-base text-gray-500 mb-8">
            Studuji Českou zemědělskou univerzitu v Praze - obor Informatika.
            Škola mi dala znalosti ekonomiky či managementu. Z programování C# a
            SQL. Jako bakalářskou práci jsem si vybral vývoj AI datové
            platformy, kterou je možné vidět zde.
          </p>
          <Image src="/icons/czu.svg" width="250" height="100" alt="Logo ČZU" />
        </div>
        <div className="w-6/12 mb-24">
          <h3 className="border-b-4 inline-block text-2xl border-indigo-700 font-extrabold mb-4 pb-2">
            Práce
          </h3>
          <p className="text-medium font-base text-gray-500 mb-8">
            Pracuji v ČSOB, na pozici web content managera. Spravuji CEB -
            Company Electronic Banking. Jedná se o internetové bankovnictví pro
            firmy a korporace. Mojí náplní je správa portálu, tvorba/úprava
            webového obsahu, publikování kampaní a tvorba nových PDF formulářů
            či úprava již stávajících - v JavaScriptu.
          </p>
          <Image
            src="/icons/csob.svg"
            width="200"
            height="200"
            alt="Logo ČSOB"
          />
        </div>
        <div className="w-6/12">
          <h3 className="border-b-4 inline-block text-2xl border-indigo-700 font-extrabold mb-4 pb-2">
            Technologie
          </h3>
          <p className="text-medium font-base text-gray-500 mb-8">
            Tvorbu webů, aplikací či programů jsem se naučil kompletně sám -
            baví mě to a tak se v tom snažím zdokonalovat. Ovládám plynně
            technologie a jazyky, které jsou vypsány o kousek dole.
          </p>
          <div className="mb-8">
            <span className="mr-4">
              <Image
                src="/icons/html5-brands.svg"
                width="50"
                height="50"
                alt="Logo HTML5"
              />
            </span>
            <span className="mr-4">
              <Image
                src="/icons/css3-brands.svg"
                width="50"
                height="50"
                alt="Logo CSS3"
              />
            </span>
            <span className="mr-4">
              <Image
                src="/icons/node-js-brands.svg"
                width="50"
                height="50"
                alt="Logo runtime prostředí Node.js"
              />
            </span>
            <span className="mr-4">
              <Image
                src="/icons/js-brands.svg"
                width="50"
                height="50"
                alt="Logo programovacího jazyka JavaScript"
              />
            </span>
            <span className="mr-4">
              <Image
                src="/icons/git-brands.svg"
                width="50"
                height="50"
                alt="Logo verzovacího systému Git"
              />
            </span>
          </div>
          <p className="text-medium font-base text-gray-500 mb-8">
            Weby tvořím rád jednoduché, funkční, pro uživatele přívětivé a na
            provoz levné. Nemusím splatlaná řešení stylem WordPress, Elementor a
            desítka pluginů k tomu. V některých případech je to ale volba
            rozumnější, levnější a méně časově náročná, než stavět řešení
            vlastní.
          </p>
          <p className="text-medium font-base text-gray-500 mb-8">
            Dokážů si také bez problémů pohrát s SEO, tvorbou API, návrhem
            architektury, tvorbou databází, designem a grafikou.
          </p>
        </div>
      </main>
    </>
  );
}
