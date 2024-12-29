"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, ChevronDown, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/gfg/Mode";

export default function NavHeader() {
  return (
    <header className="border-b w-full flex justify-around items-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 text-base font-medium">
                  Courses
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/Courses1">Course 1 </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Courses1">Course 2 </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Courses1">Course 3 </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 text-base font-medium">
                  Tutorials
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  {" "}
                  <Link href="/Tutorial1">Tutorial 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/Tutorial1">Tutorial 2</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/Tutorial1">Tutorial 3</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 text-base font-medium">
                  Jobs
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <span className="ml-2 rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                    Hiring
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  {" "}
                  <Link href="/Job1">Job 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/Job1">Job 2</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/Job1">Job 3</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 text-base font-medium">
                  Practice
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/Practice1">Practice 1 </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Practice1">Practice 2 </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/Practice1">Practice 3 </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 text-base font-medium">
                  Contests
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem> <Link href="/Contest1">Contest 1 </Link></DropdownMenuItem>
                <DropdownMenuItem> <Link href="/Contest1">Contest 2 </Link></DropdownMenuItem>
                <DropdownMenuItem> <Link href="/Contest1">Contest 3 </Link></DropdownMenuItem>
      
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-600">GG</span>
        </Link> */}

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="default">Sign In</Button>
        </div>
      </div>
    </header>
  );
}
