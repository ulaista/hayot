// import Link from "next/link";
import { Button } from "~/components/ui/button";
// import { CreatePost } from "~/app/_components/create-post";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
// import Header from "./_components/header";
import foto1 from "~/img/hero-bg.jpg";
import AboutPage from "./about/page";
import PortfolioPage from "./portfolio/page";
import Image from 'next/image'
import { motion } from 'framer-motion'


export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <main className="flex  flex-col items-center justify-center text-white sm:bg-black">
        <section id="hero" className="flex min-h-screen w-full">
          <div className="flex flex-col items-center justify-center p-4 text-center sm:w-1/2">
            <div className="w-full backdrop-brightness-75 xl:w-8/12">
              <h1 className="text-3xl font-bold">
                Hayot Istamov - discover new horizons with me
              </h1>
              <h2 className="text-xl">
                We are making the new industry in training
              </h2>
              {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className=" mt-8 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 flex justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-4.579-2.633A1 1 0 008 9.401v5.197a1 1 0 001.173.932l4.579-2.633a1 1 0 000-1.729z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="ml-4">My youtube chanel</p>
            </a> */}
              <Button
                className="mt-3 hidden bg-gradient-to-r from-slate-900 to-slate-800 text-lg text-white sm:inline-flex"
                variant="ghost"
              >{`My youtube chanel ->`}</Button>
              <Button
                className="mt-3 inline-flex bg-gradient-to-r from-slate-900 to-slate-800 text-lg text-white sm:hidden"
                variant="secondary"
              >{`My youtube chanel`}</Button>
            </div>
          </div>
          <div className="hidden w-1/2 items-center justify-center p-4 sm:flex">
            <Image
              src={foto1.src}
              alt="Hero Image"
              // layout="fill"
              className="h-3/4 w-3/4 items-center justify-center rounded-xl object-cover"
              width={800}
              height={500}
            />
          </div>
        </section>
        <AboutPage/>
        <PortfolioPage/>
      </main>
    </div>
  );
}
