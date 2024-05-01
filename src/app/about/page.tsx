"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button"
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import foto1 from "~/img/1.jpeg"
import foto2 from "~/img/2.jpg"
import Autoplay from "embla-carousel-autoplay"

import { type CarouselApi } from "~/components/ui/carousel"
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"


export default function AboutPage(){
    // const hello = await api.post.hello({ text: "from tRPC" });
    // const session = await getServerAuthSession();
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
  
    useEffect(() => {
      if (!api) {
        return
      }
  
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
  
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])

    return(
      <div className="bg-[url('/cta-bg.jpg')] max-h-screen bg-cover bg-no-repeat bg-center">
        <main className="flex min-h-screen flex-col items-center justify-center text-white backdrop-brightness-[37%] md:backdrop-brightness-[7%]">
        <section id="hero" className="flex min-h-screen w-full">
          <div className="flex flex-col mt-36 items-center md:w-1/2 p-4 brightness-[125%]">
            <div className="w-full xl:w-8/12">
              <h1 className="text-3xl antialiased">About me</h1>
              <h2 className="text-lg antialiased pt-7">My mission is to inspire and educate people,<br/> helping them develop and reach new heights.<br/><br/> I believe in the power of knowledge and education, and <br/>I am ready to share my experience and expertise.</h2>
              <Link href={'/portfolio'}><Button className="mt-7 bg-gradient-to-r antialiased from-slate-900 to-slate-800">My portfolio</Button></Link>
            </div>
          </div>
          <div className="rounded-xl hidden md:flex items-center justify-center w-1/2 p-4 pl-10">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
           setApi={setApi} className="">
            <CarouselContent>
              <CarouselItem><img src={foto1.src} className="rounded-xl h-[36rem] object-cover"/></CarouselItem>
              <CarouselItem><img src={foto2.src} className="rounded-xl h-[36rem] object-cover"/></CarouselItem>
              <CarouselItem><img src={foto1.src} className="rounded-xl h-[36rem] object-cover"/></CarouselItem>
            </CarouselContent>
          </Carousel>
          </div>
        </section>
        </main>
      </div>
    );
}

