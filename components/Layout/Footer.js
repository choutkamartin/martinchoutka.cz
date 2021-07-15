import Link from "next/link"
import Image from "next/image"

export default function Example() {
    return (
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 border-t-2 border-gray-100 py-6">
            <div className="flex justify-center mb-6">
                <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 mr-6">Domů</a>
                </Link>
                <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 mr-6">O mně</a>
                </Link>
                <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 mr-6">Projekty</a>
                </Link>
                <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 mr-6">Blog</a>
                </Link>
                <Link href="/">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900 mr-6">Kontakt</a>
                </Link>
            </div>
            <div className="flex justify-center mb-4">
                <a href="" className="mr-4">
                    <Image src="/icons/facebook-brands.svg" width="25" height="25" alt="Logo Facebook"/>
                </a>
                <a href="" className="mr-4">
                    <Image src="/icons/github-brands.svg" width="25" height="25" alt="Logo GitHub"/>
                </a>
                <a href="">
                    <Image src="/icons/at-solid.svg" width="25" height="25" alt="Obrázek znaku zavináče"/>
                </a>
            </div>
            <div className="flex justify-center text-gray-500 text-base">
                <p>© Martin Choutka 2021</p>
            </div>
        </footer>
    )
}