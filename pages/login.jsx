import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LockClosedIcon } from '@heroicons/react/solid'
import { signIn } from "next-auth/client";
import { useRouter } from 'next/router'

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common"
            ])),
        },
    };
}

export default function Login() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Martin Choutka - Přihlášení</title>
            </Head>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-2">Přihlaste se do svého účtu</h2>
                        <p className="text-lg text-center font-medium text-gray-400">Můžete se přihlásit přes Facebook či Google. Účet je možné smazat kdykoli.</p>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-3"
                            onClick={() =>
                                signIn("facebook", {
                                    callbackUrl: `http://localhost:3000${router.asPath}`,
                                })
                            }
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Facebook
                        </button>
                        <button
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() =>
                                signIn("google", {
                                    callbackUrl: `http://localhost:3000${router.asPath}`,
                                })
                            }
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
