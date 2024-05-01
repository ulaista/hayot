import Link from "next/link";
import { Button } from "~/components/ui/button"
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"
import { works } from './works';


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