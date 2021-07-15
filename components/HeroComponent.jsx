/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, UserIcon } from '@heroicons/react/outline'
import { useTranslation } from "next-i18next";
import Image from "next/image"

export default function Example() {
    const { t } = useTranslation(["common"]);
    return (
        <main className="my-10 mx-auto max-w-7xl px-4 sm:my-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
            <h1 className="text-5xl font-extrabold mb-4">{t("hero-welcome")}</h1>
            <h2 className="text-3xl font-extrabold text-blue-700 mb-8">Web o programování a jiném</h2>
            <div className="mb-12">
                <span className="mr-4">
                    <Image src="/icons/react-brands.svg" width="50" height="50" alt="Logo knihovny React"/>
                </span>
                <span className="mr-4">
                    <Image src="/icons/html5-brands.svg" width="50" height="50" alt="Logo HTML5"/>
                </span>
                <span className="mr-4">
                    <Image src="/icons/css3-brands.svg" width="50" height="50" alt="Logo CSS3"/>
                </span>
                <span className="mr-4">
                    <Image src="/icons/node-js-brands.svg" width="50" height="50" alt="Logo runtime prostředí Node.js"/>
                </span>
                <span className="mr-4">
                    <Image src="/icons/js-brands.svg" width="50" height="50" alt="Logo programovacího jazyka JavaScript"/>
                </span>
                <span className="mr-4">
                    <Image src="/icons/git-brands.svg" width="50" height="50" alt="Logo verzovacího systému Git"/>
                </span>
            </div>
            <a
                href="#"
                className="whitespace-nowrap inline-flex items-center justify-center px-6 mr-4 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
                O mně
            </a>
            <a
                href="#"
                className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-800 bg-gray-200 hover:bg-gray-300"
            >
                Projekty
            </a>
        </main >
    )
}