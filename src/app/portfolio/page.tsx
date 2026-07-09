import Image from "next/image";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { works } from "./works";

export default function PortfolioPage() {
  return (
    <div
      id="portfolio"
      className="min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat"
    >
      <main className="flex min-h-screen flex-col items-center justify-center text-white">
        <section className="min-h-screen w-full md:flex">
          <div className="mt-36 flex flex-col items-center p-4 md:w-1/2">
            <div className="w-full xl:w-8/12">
              <h1 className="text-3xl antialiased">Portfolio</h1>
              <h2 className="mt-7 text-lg antialiased">
                In my portfolio you will find a variety of projects <br />
                and achievements that reflect my professional growth <br />
                and interests.
                <br />
                <br />
                Discover the world of possibilities that we create together.
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl p-1 md:w-1/2">
            <ScrollArea className="w-[40rem] whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {works.map((artwork, index) => (
                  <figure
                    key={`${artwork.artist}-${index}`}
                    className="shrink-0"
                  >
                    <div className="overflow-hidden rounded-md">
                      <Image
                        src={artwork.art}
                        alt={`Portfolio work ${index + 1}`}
                        className="aspect-[3/4] h-fit w-fit object-cover"
                        width={320}
                        height={400}
                      />
                    </div>
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
