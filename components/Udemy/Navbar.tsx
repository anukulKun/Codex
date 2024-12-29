import { Globe, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


function Navbar() {
  return (
    <div>
      <div className="bg-[#5624D0] text-white px-4 py-2 flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="font-medium">Ready to get with the times?</span>
          <span className="mx-2">|</span>
          <span>Get the skills with codex.</span>
        </div>
        <button className="text-white" aria-label="Close banner">
          <X className="h-5 w-5" />
        </button>
      </div>
      <nav className="border-b ">
        <div className="w-full px-4 h-[72px] flex items-center gap-4 justify-between ">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 max-w-[692px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search for anything"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-700 rounded-full focus:border-purple-600"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/plans"
              className="text-sm font-medium hover:text-purple-600"
            >
              Plans & Pricing
            </Link>

            <Link
              href="/teach"
              className="text-sm font-medium hover:text-purple-600"
            >
              Teach on codex
            </Link>
            <button className="hover:text-purple-600">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/Afterlogin">
              <Button variant="outline" className="font-medium">
                Log in
              </Button>
            </Link>
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Sign up
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
