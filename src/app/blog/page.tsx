import Link from "next/link";
import { Button } from "~/components/ui/button";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import foto1 from "~/img/hero-bg.jpg";

export default async function AboutPage() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="flex justify-center bg-black bg-cover bg-center bg-no-repeat text-white min-h-screen">
      <div className="flex justify-center items-center w-full">
        
        {/* Responsive YouTube video */}
        <div className="relative w-full max-w-4xl px-4 pb-56 md:pb-64 lg:pb-72 pt-4 md:pt-6 lg:pt-8">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/pjRpR9gYN4g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
