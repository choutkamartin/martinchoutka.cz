import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LanguageSwitcher() {
  const { t } = useTranslation("header");
  const router = useRouter();
  const path = router.asPath;
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
              {t("language")}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  <Link href={path} locale="cs">
                    <a
                      className={classNames(
                        router.locale == "cs"
                          ? "bg-blue-500 text-gray-100"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Čeština
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href={path} locale="en">
                    <a
                      className={classNames(
                        router.locale == "en"
                          ? "bg-blue-500 text-gray-100"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      English
                    </a>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
