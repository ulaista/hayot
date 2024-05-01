"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import dynamic from 'next/dynamic';


interface User {
  name: string;
  image: string;
  email: string;
}

interface Session {
  user?: User;
}



const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function fetchSession() {
      const res = await fetch('/api/auth/session');
      const data = await res.json() as { user?: User };
      if (data && data.user) {
        setSession({ user: data.user });
      } else {
        setSession(null);
      }
    }
    fetchSession();
  }, []);

  return session;
};



// Предполагаем, что эти иконки 
const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [dropdownsOpen, setDropdownsOpen] = useState({
    forcustomer: false,
    novelties: false,
  });
  const session = useSession();

  // Эффект для добавления стилей к body, чтобы страница сдвигалась вправо, когда меню открыто
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden"; // Отключаем прокрутку для body
      document.body.style.transform = "translateX(250px)";
      document.body.style.transition = "transform 300ms ease-in-out";
    } else {
      document.body.style.overflow = ""; // Включаем прокрутку обратно
      document.body.style.transform = "";
      document.body.style.transition = "transform 300ms ease-in-out";
    }

    // Очистка эффекта
    return () => {
      document.body.style.overflow = ""; // Убедитесь, что прокрутка включена при размонтировании
      document.body.style.transform = "";
      document.body.style.transition = "";
    };
  }, [isPanelOpen]);

  const handleMouseEnter = (menu: string) => {
    setDropdownsOpen({ ...dropdownsOpen, [menu]: true });
  };

  const handleMouseLeave = (menu: string) => {
    setDropdownsOpen({ ...dropdownsOpen, [menu]: false });
  };

  
  

  return (
    <div>
      <nav className="absolute z-10 w-full text-[#ffffff] backdrop-brightness-75">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-800 flex justify-center lg:grid grid-cols-7 items-center py-3 gap-1">
            <div className="flex-none items-center lg:hidden">
              <button
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Открыть основное меню</span>
                {/* Изменение иконки бургера на X при открытии меню */}
                {isPanelOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Левая часть для меню */}
            <div
              className="flex justify-start items-center ml-12 col-span-3 text-xs xl:text-sm"
            >
               {/* Ссылки меню для десктоп версии */}
              <Link
                href="/blog"
                className="hidden lg:block  px-3 py-2 rounded-md"
              >
                Blog
              </Link>
            
                <Link
                    href="/about"
                    className="hidden lg:block px-3 py-2 rounded-md" 
                >
                    About me
                </Link>
              <Link
                href="/portfolio"
                className="hidden lg:block  px-3 py-2 rounded-md"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="hidden lg:block  px-3 py-2 rounded-md"
              >
                Contact
              </Link>
            </div>
            {/* Центральный блок для логотипа */}
             <div className="grow flex justify-center lg:block col-span-2">
               <Link
               href="/"
              >       
              <h1 className="text-xl font-mono ">HAYOT ISTAMOV</h1>
              </Link>
            </div>
            {/* Правая часть для элементов управления пользователя */}
             <div className="flex justify-end items-center space-x-4 mr-8 col-span-2">
             {session && <span className="mr-2"><img src={session?.user?.image || 'default.jpg'} className="w-6 h-6" alt="Profile" /></span>}
                <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="hidden sm:block rounded-full bg-white/10 px-3 py-1 font-semibold no-underline transition hover:bg-white/20"
                >
                {session ? "Sign out" : "Sign in"}
                </Link>
            </div>
          </div>         
        </div>
      </nav>
      {/* Мобильное меню */}
      <Transition
        show={isPanelOpen}
        enter="transition ease-out duration-1200 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-1200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className=""
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="fixed inset-y-0 left-0 "
              aria-labelledby="slide-over-title"
            >
              <div className="-ml-64 space-y-1 h-screen flex flex-col overflow-y-auto bg-[#070b2f] text-white">
                {/* Ссылки для мобильного меню */}
                <Link
                href="/"
                className="self-center px-8 py-5 text-base "
                >
                  Main
                </Link>
                <Link
                  href="/about"
                  className="self-center px-8 py-5 text-base "
                >
                  About
                </Link>
                <Link
                href="/portfolio"
                className="self-center px-8 py-5 text-base "
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="self-center px-8 py-5 text-base "
                >
                  Contact
                </Link>
                <Link
                  href={session ? "/api/auth/signout" : "/api/auth/signin"}
                  className="self-center px-8 py-5 text-base "
                >
                  {session ? "Sign out" : "Sign in"}
                </Link>            
                
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Header;