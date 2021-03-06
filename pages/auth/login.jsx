import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LockClosedIcon } from "@heroicons/react/solid";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "footer",
        "banner",
      ])),
    },
  };
}

export default function Login() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{process.env.WEBSITE_NAME} - Přihlášení</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img
                            className="mx-auto h-12 w-auto"
                            src=""
                            alt="Logo"
                        /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-2">
              Přihlaste se do svého účtu
            </h2>
            <p className="text-lg text-center font-medium text-gray-400">
              Můžete se přihlásit přes Facebook či Google. Účet je možné smazat
              kdykoli.
            </p>
          </div>

          <div>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-3"
              onClick={() =>
                signIn("facebook", {
                  callbackUrl: `${process.env.WEBSITE_URL}${router.asPath}`,
                })
              }
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                  aria-hidden="true"
                />
              </span>
              Facebook
            </button>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() =>
                signIn("google", {
                  callbackUrl: `${process.env.WEBSITE_URL}${router.asPath}`,
                })
              }
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                  aria-hidden="true"
                />
              </span>
              Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
