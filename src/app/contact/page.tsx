import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import telegram_group from "~/img/telegram_group.jpeg";
import telegram_contact from "~/img/telegram_contact1.png";
import { FaYoutube } from "react-icons/fa";

export default async function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-black bg-cover bg-center bg-no-repeat text-white md:flex-row">
      {/* Left Section with Contacts */}
      <section className="mt-16 flex w-full flex-col items-center justify-center px-5 md:w-1/2 md:items-start">
        <h2 className="pb-6 pt-5 text-center text-2xl text-white md:text-left">
          My Contacts
        </h2>

        {/* Phone Contact */}
        <div className="flex items-center justify-center space-x-2 pb-6 md:justify-start">
          <FaPhoneAlt className="text-sky-300" />
          <a href={`tel:${"+998 93 544 85 23"}`} className="text-white">
            +998 93 544 85 23
          </a>
        </div>

        {/* Telegram Group and Contact */}
        <div className="flex w-full flex-col justify-between text-center md:flex-row md:text-left">
          <div className="mb-6 flex flex-col items-center md:mb-0 md:items-start">
            <Link href="#" className="pb-4 text-sky-300">
              Telegram group
            </Link>
            <Image
              src={telegram_group.src}
              className="rounded-xl object-cover"
              alt="telegram group"
              width={150}
              height={150}
            />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Link
              href="https://t.me/Istamov_Hayot"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-4 text-sky-300"
            >
              Telegram contact
            </Link>
            <Image
              src={telegram_contact.src}
              className="rounded-xl object-cover"
              alt="telegram contact"
              width={155}
              height={155}
            />
          </div>
        </div>
        {/* Youtube */}
        <div className="duration-450 mt-24 flex animate-pulse items-center justify-center space-x-2 rounded-2xl border border-white p-2 shadow shadow-red-400 transition delay-150 ease-in-out hover:bg-red-600 md:justify-start">
          <FaYoutube />
          <Link href="/blog">My YouTube channel</Link>
        </div>
      </section>

      {/* Right Section with Yandex Map */}
      <section className="mt-16 flex w-full items-center justify-center px-5 md:w-1/2">
        <div className="h-72 w-4/5 rounded-2xl md:h-96">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A433569c9cbfcf2020aebde8eee42f95d033082d56addfd44256b9261471a88ec&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            className="rounded-2xl"
            title="Hayot Istamov location map"
          />
        </div>
      </section>
    </div>
  );
}
