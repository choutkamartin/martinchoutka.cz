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

export default function Blog() {
    return (
        <>
            <Head>
                <title>Martin Choutka - Blog</title>
            </Head>
            <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Blog</h1>
                    <p className="text-xl font-medium text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <section className="grid grid-cols-3 gap-10 mt-4">
                    <article className="shadow-lg rounded-lg overflow-hidden">
                        <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(/background.jpg)` }}></div>
                        <div className="p-6">
                            <div className="mb-14">
                                <p className="font-bold mb-2 text-indigo-700">Programování</p>
                                <h2 className="text-lg font-bold mb-2 text-gray-800">Nauč se programovat</h2>
                                <p className="text-gray-500 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio soluta, quis explicabo corrupti voluptates sunt eum animi doloremque aspernatur itaque inventore! Quis similique architecto itaque molestias unde hic corrupti.</p>
                            </div>
                            <div className="flex items-center">
                                <Image src="/avatar.jpg" height="40" width="40" className="rounded-full" alt="Fotografie autora příspěvku" />
                                <div className="ml-3">
                                    <h3 className="text-md font-semibold">Martin Choutka</h3>
                                    <p className="text-md text-gray-400">2. 4. 2021 • 5 min. čtení</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="shadow-lg rounded-lg overflow-hidden">
                        <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(/car.jpg)` }}></div>
                        <div className="p-6">
                            <div className="mb-14">
                                <p className="font-bold mb-2 text-indigo-700">Programování</p>
                                <h2 className="text-lg font-bold mb-2 text-gray-800">Nauč se programovat</h2>
                                <p className="text-gray-500 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio soluta, quis explicabo corrupti voluptates sunt eum animi doloremque aspernatur itaque inventore! Quis similique architecto itaque molestias unde hic corrupti.</p>
                            </div>
                            <div className="flex items-center">
                                <Image src="/avatar.jpg" height="40" width="40" className="rounded-full" alt="Fotografie autora příspěvku" />
                                <div className="ml-3">
                                    <h3 className="text-md font-semibold">Martin Choutka</h3>
                                    <p className="text-md text-gray-400">2. 4. 2021 • 5 min. čtení</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="shadow-lg rounded-lg overflow-hidden">
                        <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(/nature.jpg)` }}></div>
                        <div className="p-6">
                            <div className="mb-14">
                                <p className="font-bold mb-2 text-indigo-700">Programování</p>
                                <h2 className="text-lg font-bold mb-2 text-gray-800">Nauč se programovat</h2>
                                <p className="text-gray-500 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio soluta, quis explicabo corrupti voluptates sunt eum animi doloremque aspernatur itaque inventore! Quis similique architecto itaque molestias unde hic corrupti.</p>
                            </div>
                            <div className="flex items-center">
                                <Image src="/avatar.jpg" height="40" width="40" className="rounded-full" alt="Fotografie autora příspěvku" />
                                <div className="ml-3">
                                    <h3 className="text-md font-semibold">Martin Choutka</h3>
                                    <p className="text-md text-gray-400">2. 4. 2021 • 5 min. čtení</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}
