import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  PlusCircleIcon,
  TranslateIcon,
  XIcon,
  GlobeIcon,
  CodeIcon,
  CogIcon,
  IdentificationIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/client";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "next-i18next";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { t } = useTranslation("header");

  const solutions = [
    {
      name: t("projects-translations"),
      description: t("projects-translations-description"),
      href: "/projects/translations",
      icon: TranslateIcon,
    },
    {
      name: t("projects-websites"),
      description: t("projects-websites-description"),
      href: "/projects/websites",
      icon: GlobeIcon,
    },
    {
      name: t("projects-open-source"),
      description: t("projects-open-source-description"),
      href: "/projects/open-source",
      icon: CodeIcon,
    },
    {
      name: t("projects-work"),
      description: t("projects-work-description"),
      href: "/projects/work",
      icon: IdentificationIcon,
    },
    {
      name: t("projects-engineering"),
      description: t("projects-engineering-description"),
      href: "/projects/engineering",
      icon: CogIcon,
    },
  ];

  const blog = [
    {
      name: t("new-article"),
      description: t("new-article-description"),
      href: "/blog/new",
      icon: PlusCircleIcon,
    },
  ];

  const callsToAction = [];
  const resources = [
    {
      name: t("about-web"),
      description: t("about-web-description"),
      href: "/about-web",
      icon: QuestionMarkCircleIcon,
    },
  ];

  const [session, loading] = useSession();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/articles/recent")
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          // setIsLoaded(true);
          // setError(error);
        }
      );
  }, []);
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start lg:space-x-10 dark:border-white">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <a className="font-black text-xl md:text-2xl">
                    Martin Choutka
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 lg:hidden">
                <Popover.Button className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Otevřít menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden lg:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-gray-900 dark:text-gray-200"
                            : "text-gray-500 dark:text-gray-200",
                          "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-blue-500 dark:ring-offset-gray-900"
                        )}
                      >
                        <span>{t("projects")}</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <Link href={item.href} key={item.name}>
                                  <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900 dark:text-gray-200">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 dark:bg-gray-800 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-200"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Link href="/about-me">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200">
                    {t("about-me")}
                  </a>
                </Link>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-gray-900 dark:text-gray-200"
                            : "text-gray-500 dark:text-gray-200",
                          "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-blue-500 dark:ring-offset-gray-900"
                        )}
                      >
                        <span>{t("blog")}</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                              {blog.map((item) => (
                                <Link href={item.href} key={item.name}>
                                  <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900 dark:text-gray-200">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Link href="/blog">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200">
                    {t("blog")}
                  </a>
                </Link>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open
                            ? "text-gray-900 dark:text-gray-200"
                            : "text-gray-500 dark:text-gray-200",
                          "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-8 focus:ring-blue-500 dark:ring-offset-gray-900"
                        )}
                      >
                        <span>{t("more")}</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-blue-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900 dark:text-gray-200">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 dark:bg-gray-800 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-gray-500 dark:text-gray-200 uppercase">
                                  {t("recent-articles")}
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {items.map((post) => (
                                    <li
                                      key={post._id}
                                      className="text-base truncate"
                                    >
                                      <a
                                        href={`/blog/${post.slug}`}
                                        className="font-medium text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-200"
                                      >
                                        {post.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <Link href="/blog">
                                  <a className="font-medium text-blue-600 hover:text-blue-500">
                                    {" "}
                                    {t("see-all")}{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
                {!session && (
                  <Link href="/auth/login">
                    <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200 mr-6">
                      {t("login")}
                    </a>
                  </Link>
                )}
                {session && (
                  <button
                    onClick={() => signOut({ redirect: false })}
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200 cursor-pointer mr-6"
                  >
                    {t("logout")}
                  </button>
                )}
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-10"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      {/* <Image
                                                className="h-8 w-auto"
                                                src=""
                                                width=""
                                                height=""
                                                alt="Logo"
                                            /> */}
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Zavřít menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {t("about-me")}
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {t("blog")}
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 text-center text-base font-medium text-gray-500">
                    <Link href="/auth/login">
                      <a className="text-blue-600 hover:text-blue-500 mr-3">
                        {t("login")}
                      </a>
                    </Link>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
