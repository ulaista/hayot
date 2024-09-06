import Link from "next/link";
import { FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import telegram_group from '~/img/telegram_group.jpeg';
import telegram_contact from '~/img/telegram_contact1.png';
import { FaYoutube } from "react-icons/fa";

export default async function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen bg-black bg-cover bg-center bg-no-repeat text-white">
      
      {/* Left Section with Contacts */}
      <section className="mt-16 w-full md:w-1/2 px-5 flex flex-col items-center md:items-start justify-center">
        <h2 className="text-white text-2xl pt-5 pb-6 text-center md:text-left">My Contacts</h2>
        
        {/* Phone Contact */}
        <div className="flex items-center space-x-2 pb-6 justify-center md:justify-start">
          <FaPhoneAlt className="text-sky-300" />
          <a href={`tel:${"+998 90 123 45 67"}`} className="text-white">
            +998 90 123 45 67
          </a>
        </div>
        
        {/* Telegram Group and Contact */}
        <div className="flex flex-col md:flex-row w-full justify-between text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Link href={'#'} className="text-sky-300 pb-4">Telegram group</Link>
            <Image
              src={telegram_group.src}
              className="rounded-xl object-cover"
              alt="telegram group"
              width={150}
              height={150}
            />
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <Link href={'https://t.me/Istamov_Hayot'} target="_blank" className="text-sky-300 pb-4">Telegram contact</Link>
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
        <div className="animate-pulse transition delay-150 duration-450 ease-in-out p-2 mt-24 flex items-center space-x-2 justify-center md:justify-start border border-white hover:bg-red-600 shadow shadow-red-400 rounded-2xl">
          <FaYoutube />
          <Link href={'/blog'}>My youtube chanel</Link>
        </div>
      </section>

      {/* Right Section with Yandex Map */}
      <section className="mt-16 w-full md:w-1/2 px-5 flex items-center justify-center">
        <div className="w-4/5 h-72 md:h-96 rounded-2xl">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A433569c9cbfcf2020aebde8eee42f95d033082d56addfd44256b9261471a88ec&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            className="rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
}
