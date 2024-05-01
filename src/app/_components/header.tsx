"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

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
    const fetchSession = async () => {
      const res = await fetch('/api/auth/session');
      const data = await res.json() as { user?: User };
      if (data.user) {
        setSession({ user: data.user });
      } else {
        setSession(null);
      }
    }
    void fetchSession(); // Handle the promise properly
  }, []);

  return session;
};

const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.transform = "translateX(250px)";
      document.body.style.transition = "transform 300ms ease-in-out";
    } else {
      document.body.style.overflow = "";
      document.body.style.transform = "";
      document.body.style.transition = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.transform = "";
      document.body.style.transition = "";
    };
  }, [isPanelOpen]);

  return (
    <div>
      <nav className="absolute z-10 w-full text-white backdrop-brightness-75">
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
                <span className="sr-only">Open main menu</span>
                {isPanelOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex justify-start items-center ml-12 col-span-3 text-xs xl:text-sm">
              <Link href="/blog" className="hidden lg:block px-3 py-2 rounded-md">Blog</Link>
              <Link href="/about" className="hidden lg:block px-3 py-2 rounded-md">About me</Link>
              <Link href="/portfolio" className="hidden lg:block px-3 py-2 rounded-md">Portfolio</Link>
              <Link href="/contact" className="hidden lg:block px-3 py-2 rounded-md">Contact</Link>
            </div>
            <div className="grow flex justify-center lg:block col-span-2">
              <Link href="/" className="text-xl font-mono">HAYOT ISTAMOV</Link>
            </div>
            <div className="flex justify-end items-center space-x-4 mr-8 col-span-2">
              {session && <span className="mr-2"><Image src={session.user?.image ?? 'default.jpg'} width={24} height={24} alt="Profile" /></span>}
              <Link href={session ? "/api/auth/signout" : "/api/auth/signin"} className="hidden sm:block rounded-full bg-white/10 px-3 py-1 font-semibold no-underline transition hover:bg-white/20">
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Transition show={isPanelOpen} enter="transition ease-out duration-1200 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in duration-1200 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="fixed inset-y-0 left-0" aria-labelledby="slide-over-title">
              <div className="-ml-64 space-y-1 h-screen flex flex-col overflow-y-auto bg-[#070b2f] text-white">
                <Link href="/" className="self-center px-8 py-5 text-base">Main</Link>
                <Link href="/about" className="self-center px-8 py-5 text-base">About</Link>
                <Link href="/portfolio" className="self-center px-8 py-5 text-base">Portfolio</Link>
                <Link href="/contact" className="self-center px-8 py-5 text-base">Contact</Link>
                <Link href={session ? "/api/auth/signout" : "/api/auth/signin"} className="self-center px-8 py-5 text-base">{session ? "Sign out" : "Sign in"}</Link>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Header;
