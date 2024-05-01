import Link from "next/link";
import { Button } from "~/components/ui/button"
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import foto1 from "~/img/portfolio-1.jpg"
import foto2 from "~/img/portfolio-2.jpg"
import foto3 from "~/img/portfolio-3.jpg"
import foto4 from "~/img/portfolio-4.jpg"
import foto5 from "~/img/portfolio-5.jpg"
import foto6 from "~/img/portfolio-6.jpg"
import foto7 from "~/img/portfolio-7.jpg"
import foto8 from "~/img/portfolio-8.jpg"
import foto9 from "~/img/portfolio-9.jpg"
import foto10 from "~/img/portfolio-10.jpg"
import foto11 from "~/img/portfolio-11.jpg"
import foto12 from "~/img/portfolio-12.jpg"
import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"


export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: foto1.src,
  },
  {
    artist: "Tom Byrom",
    art: foto2.src,
  },
  {
    artist: "Vladimir Malyavko",
    art: foto3.src,
  },
  {
    artist: "Ornella Binni",
    art: foto4.src,
  },
  {
    artist: "Tom Byrom",
    art: foto5.src,
  },
  {
    artist: "Vladimir Malyavko",
    art: foto6.src,
  },
  {
    artist: "Ornella Binni",
    art: foto7.src,
  },
  {
    artist: "Tom Byrom",
    art: foto8.src,
  },
  {
    artist: "Vladimir Malyavko",
    art: foto9.src,
  },
  {
    artist: "Vladimir Malyavko",
    art: foto10.src,
  },
  {
    artist: "Ornella Binni",
    art: foto11.src,
  },
  {
    artist: "Tom Byrom",
    art: foto12.src,
  },
  
]

export default async function AboutPage(){
    const hello = await api.post.hello({ text: "from tRPC" });
    const session = await getServerAuthSession();
  
    return(
      <div className="bg-black min-h-screen bg-cover bg-no-repeat bg-center">
      <main className="flex min-h-screen flex-col items-center justify-center text-white ">
      <section id="hero" className="md:flex min-h-screen w-full">
        <div className="flex flex-col mt-36 items-center md:w-1/2 p-4">
          <div className="w-full xl:w-8/12">
            <h1 className="text-3xl antialiased">Portfolio</h1>
            <h2 className="text-lg antialiased mt-7">In my portfolio you will find a variety of projects <br/>and achievements that reflect my professional growth <br/>and interests.
            <br/><br/>Discover the world of possibilities that we create together.</h2>
            
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-center md:w-1/2 p-1">
        <ScrollArea className="w-[40rem] whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={artwork.art}
                    alt={`Photo by ${artwork.artist}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        </div>
      </section>
      </main>
    </div>
    );
}