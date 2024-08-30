// components/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from '~/components/ui/button';
import foto1 from '~/img/1.jpeg';
import foto2 from '~/img/2.jpg';

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="flex min-h-screen w-full bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <div className="mt-36 flex flex-col items-center p-4 brightness-[125%] md:w-1/2">
        <div className="w-full xl:w-8/12">
          <h1 className="text-3xl antialiased">About me</h1>
          <h2 className="pt-7 text-lg antialiased">
            My mission is to inspire and educate people,
            <br /> helping them develop and reach new heights.
            <br />
            <br /> I believe in the power of knowledge and education, and{" "}
            <br />I am ready to share my experience and expertise.
          </h2>
          <Button className="mt-7 bg-gradient-to-r from-slate-900 to-slate-800 antialiased">
            My portfolio
          </Button>
        </div>
      </div>
      <div className="hidden w-1/2 items-center justify-center rounded-xl p-4 pl-10 md:flex">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={foto1.src}
            className="h-[36rem] rounded-xl object-cover"
            alt="About Image 1"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
