import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function AboutWeb() {
  const [value, setValue] = useState(1);
  const [result, setResult] = useState(null);

  function checkValue(value) {
    if (value < 30 && value > 0) {
      setValue(value);
    }
  }

  function checkResults() {
    if (value == 7) {
      setResult(true);
    } else {
      setResult(false);
    }
  }

  return (
    <>
      <Head>
        <title>Martin Choutka - O webu</title>
      </Head>
      <main
        className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28 bg-contain bg-no-repeat"
        style={{ backgroundImage: 'url("/about-web.svg")' }}
      >
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Tak schválně...</h1>
          <h2 className="text-xl font-extrabold text-gray-500 mb-24">
            Tipněte si, kolik dní trvalo postavit tento web.
          </h2>
          <form className="mb-6">
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Kolik dní
              </label>
              <div className="inline-flex mt-1 bg-indigo-50 rounded-sm">
                <button
                  className="px-4 py-3 text-md font-medium w-12"
                  onClick={() => checkValue(value + -1)}
                  type="button"
                >
                  -
                </button>
                <input
                  type="number"
                  name="number-of-days"
                  id="number-of-days"
                  value={value}
                  className="text-md font-bold w-50 border-0 bg-indigo-50 sm:text-sm text-center w-auto"
                />
                <button
                  className="px-4 py-3 text-md font-medium rounded-r-md w-12"
                  onClick={() => checkValue(value + 1)}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
            <div className="py-3 text-left">
              <button
                type="button"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => checkResults()}
              >
                Zkusit
              </button>
            </div>
          </form>
          {result ? (
            <div
              className="inline-block px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-sm mb-16"
              role="alert"
            >
              Správně, tvorba webu opravdu trvala 7 dní.
            </div>
          ) : (
            <div
              className="inline-block px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-sm mb-16"
              role="alert"
            >
              Špatně, tvorba webu trvala 7 dní.
            </div>
          )}
        </div>
        <div className="w-8/12">
          <h2 className="text-lg font-bold text-gray-500">
            Ano, netrvá to tak dlouho
          </h2>
          <p className="text-medium font-base text-gray-500 mb-8">
            Protože byl web postavený na šikovném řešení Next.js + Tailwind CSS
            byl návrh webu poměrně rychlý. Pravděpodobně web postavíte mnohem
            rychleji, pokud budete využívat site-builderů, ale pak už nikdy
            nedosáhnete takové volnosti - leda že byste si psali do WordPressu v
            PHP pluginy a šablony.
          </p>
        </div>
      </main>
    </>
  );
}
