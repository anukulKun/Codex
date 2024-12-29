import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-green-950">
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 text-2xl">👨‍💻</span>
            <span className="text-white font-medium">Codex</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/GFG" className="text-white hover:text-gray-300">
              Practice
            </Link>
            <Link href="/callback" className="text-white hover:text-gray-300">
              Request Callback
            </Link>
            <Button
              variant="secondary"
              className="bg-emerald-400 text-black hover:bg-emerald-500"
            >
              Connect wallet
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center pt-32 pb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-wide">
            We only <span className="text-emerald-400">teach</span>
            <br /> what we are really
            <br /> really <span className="italic">good</span> at.
          </h1>
          <p className="text-gray-400 mt-6 max-w-lg mx-auto">
            Get ready to{" "}
            <span className="text-emerald-400">accelerate your career</span>{" "}
            with customized courses and leave your mark in the tech industry.
          </p>

          <Button className="mt-8 bg-emerald-400 text-black hover:bg-emerald-500 text-lg px-8 py-6 h-auto">
            <Link href="/Course">Check Courses - Make an Impact</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center text-white pb-20">
          <div>
            <div className="text-4xl font-bold mb-2">25k+</div>
            <div className="text-gray-400">Students taught</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">20+</div>
            <div className="text-gray-400">Instructors</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">437K+</div>
            <div className="text-gray-400">Youtube Subs.</div>
          </div>
        </div>
      </main>
    </div>
  );
}
