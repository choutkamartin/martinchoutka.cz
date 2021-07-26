import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function Banner() {
  const { t } = useTranslation("banner");
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner == true && (
        <div className="bg-blue-700">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-blue-800">
                  <SpeakerphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 text-sm sm:text-base font-medium text-white truncate">
                  <span className="md:hidden">
                    {t("under-development-short")}
                  </span>
                  <span className="hidden md:inline">
                    {t("under-development")}
                  </span>
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  onClick={() => setShowBanner(false)}
                >
                  <span className="sr-only">Zrušit</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
