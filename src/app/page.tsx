import "server-only";
// import { headers } from "next/headers";
import { Button } from "~/components/ui/button";
import foto1 from "~/img/hero-bg.jpg";
import AboutPage from "./about/page";
import PortfolioPage from "./portfolio/page";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { Link as ScrollLink } from 'react-scroll';
import HeroSection from "./_components/HeroSection";
import Link from "next/link";

export default function Home() {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  return (
    <div className="">
      <main className="flex flex-col items-center justify-center text-white sm:bg-black">
        {/* <motion.section
          id="hero"
          className="flex min-h-screen w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <div className="flex flex-col items-center justify-center p-4 text-center sm:w-1/2">
            <motion.div
              className="w-full backdrop-brightness-75 xl:w-8/12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-3xl font-bold">
                Hayot Istamov - discover new horizons with me
              </h1>
              <h2 className="text-xl">
                We are making the new industry in training
              </h2>
              <ScrollLink to="portfolio" smooth duration={500}>
                <Button
                  className="mt-3 hidden bg-gradient-to-r from-slate-900 to-slate-800 text-lg text-white sm:inline-flex"
                  variant="ghost"
                >{`My youtube channel ->`}</Button>
              </ScrollLink>
              <ScrollLink to="portfolio" smooth duration={500}>
                <Button
                  className="mt-3 inline-flex bg-gradient-to-r from-slate-900 to-slate-800 text-lg text-white sm:hidden"
                  variant="secondary"
                >{`My youtube channel`}</Button>
              </ScrollLink>
            </motion.div>
          </div>
          <div className="hidden w-1/2 items-center justify-center p-4 sm:flex">
            <Image
              src={foto1.src}
              alt="Hero Image"
              className="h-3/4 w-3/4 items-center justify-center rounded-xl object-cover"
              width={800}
              height={500}
            />
          </div>
        </motion.section> */}
        <HeroSection />
        <AboutPage />
        <PortfolioPage />
        <section className="w-full h-44 bg-black">
          <div className="hidden md:flex pt-10 justify-center items-center text-center text-xl">
            <Link href="/contact" className="text-white hover:text-stone-500">
             Checkout my contacts and social media profiles</Link>
          </div>
          <div className="md:hidden flex pt-10 justify-center items-center text-center text-xl">
            <Link href="/contact" className="text-white hover:text-stone-500">
             Checkout my contacts</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
