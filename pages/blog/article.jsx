import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image"

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common"
            ])),
        },
    };
}

export default function Article() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Blog</h1>
                    <p className="text-xl font-medium text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </main>
        </>
    )
}
