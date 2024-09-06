// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '~/components/ui/button';
import foto1 from '~/img/hero-bg.jpg';

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat md:bg-none flex flex-col items-center justify-center p-4 text-center sm:w-1/2">
        <motion.div
          className="w-full backdrop-brightness-50 p-1 xl:w-8/12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl font-bold">
            Hayot Istamov - discover new horizons with me
          </h1>
          <h2 className="text-xl">We are making the new industry in training</h2>
          <Button
            className="mt-3 hidden bg-gradient-to-r from-slate-900 to-slate-800 text-lg text-white sm:inline-flex"
            variant="ghost"
          ><a href="https://youtube.com/@hayot_istamov?feature=shared" target='_blank'>{`My youtube chanel ->`}</a></Button>
          <Button
            className="mt-3 inline-flex bg-gradient-to-r from-slate-900 to-slate-800 text-lg text-white sm:hidden"
            variant="secondary"
          >{`My youtube chanel`}</Button>
        </motion.div>
      </div>
      <div className="hidden w-1/2 items-center justify-center p-4 md:flex">
        <Image
          src={foto1.src}
          alt="Hero Image"
          className="h-3/4 w-3/4 items-center justify-center rounded-xl object-cover"
          width={800}
          height={500}
        />
      </div>
    </motion.section>
  );
}
