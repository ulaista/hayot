import Link from "next/link";
import { Button } from "~/components/ui/button"
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Header from "./_components/header";
import foto1 from "~/img/hero-bg.jpg"



export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center">
    <main className="flex min-h-screen flex-col items-center justify-center sm:bg-black text-white">
    <section id="hero" className="flex min-h-screen w-full">
        <div className="flex flex-col justify-center items-center sm:w-1/2 p-4 text-center">
          <div className="w-full xl:w-8/12 backdrop-brightness-75">
            <h1 className="text-3xl font-bold">Hayot Istamov - discover new horizons with me</h1>
            <h2 className="text-xl">We are making the new industry in training</h2>
            {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className=" mt-8 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 flex justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-4.579-2.633A1 1 0 008 9.401v5.197a1 1 0 001.173.932l4.579-2.633a1 1 0 000-1.729z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="ml-4">My youtube chanel</p>
            </a> */}
            <Button className="hidden sm:inline-flex mt-3 text-lg bg-gradient-to-r from-sky-700 text-white to-pink-800" variant="ghost">{`My youtube chanel ->`}</Button>
            <Button className="inline-flex sm:hidden mt-3 text-lg bg-gradient-to-r from-pink-700 text-white to-pink-600" variant="secondary">{`My youtube chanel`}</Button>
          </div>
        </div>
      <div className="hidden sm:flex items-center justify-center w-1/2 p-4">
        <img src={foto1.src} className="items-center justify-center h-3/4 object-cover w-3/4 rounded-xl"/>
      </div>
    </section>
    </main>

    {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/about"
          >
            <h3 className="text-2xl font-bold">About</h3>
          </Link>
          <Button>Click me</Button>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div>

        <CrudShowcase />
      </div>
    </main> */}
    </div>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
