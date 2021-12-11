import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-6 border-t-2 border-gray-100">
          <div className="flex justify-center mb-6">
            <Link href="/">
              <a className="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 mr-6">
                {t("home")}
              </a>
            </Link>
            <Link href="/about-me">
              <a className="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 mr-6">
                {t("about-me")}
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 mr-6">
                {t("blog")}
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 mr-6">
                {t("contact")}
              </a>
            </Link>
          </div>
          <div className="flex justify-center mb-4">
            <a
              href="https://www.facebook.com/choutka.martin/"
              className="mr-4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/facebook-brands.svg"
                width="25"
                height="25"
                alt="Logo Facebook"
              />
            </a>
            <a
              href="https://github.com/choutkamartin"
              className="mr-4"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/github-brands.svg"
                width="25"
                height="25"
                alt="Logo GitHub"
              />
            </a>
            <a
              href="mailto:email@martinchoutka.cz"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/at-solid.svg"
                width="25"
                height="25"
                alt="Obrázek znaku zavináče"
              />
            </a>
          </div>
          <div className="flex justify-center text-gray-500 dark:text-gray-200 text-base">
            <p>
              ©{" "}
              <Link href="/">
                <a>Martin Choutka</a>
              </Link>{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
