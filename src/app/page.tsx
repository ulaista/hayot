import HeroSection from "./_components/HeroSection";
import AboutPage from "./about/page";
import PortfolioPage from "./portfolio/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center text-white sm:bg-black">
        <HeroSection />
        <AboutPage />
        <PortfolioPage />
        <section className="h-44 w-full bg-black">
          <div className="hidden items-center justify-center pt-10 text-center text-xl md:flex">
            <Link href="/contact" className="text-white hover:text-stone-500">
              Checkout my contacts and social media profiles
            </Link>
          </div>
          <div className="flex items-center justify-center pt-10 text-center text-xl md:hidden">
            <Link href="/contact" className="text-white hover:text-stone-500">
              Checkout my contacts
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
