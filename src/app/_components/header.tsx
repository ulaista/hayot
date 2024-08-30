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
      const res = await fetch("/api/auth/session");
      const data = (await res.json()) as { user?: User };
      if (data.user) {
        setSession({ user: data.user });
      } else {
        setSession(null);
      }
    };
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
          <div className="flex grid-cols-7 items-center justify-center gap-1 border-b border-gray-800 py-3 lg:grid">
            <div className="flex-none items-center lg:hidden">
              <button
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 hover:text-gray-500 focus:text-gray-500 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
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
            <div className="col-span-3 ml-12 flex items-center justify-start text-xs xl:text-sm">
              <Link
                href="/blog"
                className="hidden rounded-md px-3 py-2 lg:block"
              >
                Blog
              </Link>
              <Link
                href="#about"
                className="hidden rounded-md px-3 py-2 lg:block"
              >
                About me
              </Link>
              <Link
                href="#portfolio"
                className="hidden rounded-md px-3 py-2 lg:block"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="hidden rounded-md px-3 py-2 lg:block"
              >
                Contact
              </Link>
            </div>
            <div className="col-span-2 flex grow justify-center lg:block">
              <Link href="/" className="font-mono text-xl">
                HAYOT ISTAMOV
              </Link>
            </div>
            <div className="col-span-2 mr-8 flex items-center justify-end space-x-4">
              {session && (
                <span className="mr-2">
                  <Image
                    src={session.user?.image ?? "default.jpg"}
                    width={24}
                    height={24}
                    alt="Profile"
                  />
                </span>
              )}
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="hidden rounded-full bg-white/10 px-3 py-1 font-semibold no-underline transition hover:bg-white/20 sm:block"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Transition
        show={isPanelOpen}
        enter="transition ease-out duration-1200 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-1200 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="fixed inset-y-0 left-0"
              aria-labelledby="slide-over-title"
            >
              <div className="-ml-64 flex h-screen flex-col space-y-1 overflow-y-auto bg-[#070b2f] text-white">
                <Link href="/" className="self-center px-8 py-5 text-base">
                  Main
                </Link>
                <Link href="/about" className="self-center px-8 py-5 text-base">
                  About
                </Link>
                <Link
                  href="/portfolio"
                  className="self-center px-8 py-5 text-base"
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="self-center px-8 py-5 text-base"
                >
                  Contact
                </Link>
                <Link
                  href={session ? "/api/auth/signout" : "/api/auth/signin"}
                  className="self-center px-8 py-5 text-base"
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
