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
    <div className="flex justify-center bg-black bg-cover bg-center bg-no-repeat text-white">
      <div className="mt-96 flex min-h-screen justify-center text-xl">
        <h1 className="">Up coming =)</h1>
      </div>
    </div>
  );
}
