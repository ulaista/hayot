"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import foto1 from "~/img/1.jpeg";
import foto2 from "~/img/2.jpg";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

export default function AboutPage() {
  return (
    <div
      id="about"
      className="max-h-screen bg-[url('/cta-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <main className="flex min-h-screen flex-col items-center justify-center text-white backdrop-brightness-[27%] md:backdrop-brightness-[6%]">
        <section id="about" className="flex min-h-screen w-full">
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
              <Link href={"#portfolio"}>
                <Button className="mt-7 bg-gradient-to-r from-slate-900 to-slate-800 antialiased">
                  My portfolio
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden w-1/2 items-center justify-center rounded-xl p-4 pl-10 md:flex">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src={foto1}
                    className="h-[27rem] rounded-xl object-cover md:h-[36rem]"
                    alt="Hayot Istamov portrait"
                    width={576}
                    height={576}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={foto2}
                    className="h-[27rem] rounded-xl object-cover md:h-[36rem]"
                    alt="Hayot Istamov speaking"
                    width={576}
                    height={576}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={foto1}
                    className="h-[27rem] rounded-xl object-cover md:h-[36rem]"
                    alt="Hayot Istamov portrait"
                    width={576}
                    height={576}
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
