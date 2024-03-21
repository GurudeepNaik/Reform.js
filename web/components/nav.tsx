"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const links = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
  { label: "Sign in", path: "/auth/signin" },
];

export function Nav() {
  const pathName = usePathname();
  return (
    <nav className="sticky top-0 p-4 bg-secondary z-10 ">
      <nav className="flex justify-between items-center ">
        <Link className="flex items-center font-semibold" href="/">
          <Logo />
        </Link>
        <div className="flex justify-end">
          <nav className="hidden md:flex items-center space-x-4 flex-1 px-4">
            {links.map(({ path, label }, i) => {
              return (
                <Link
                  key={i}
                  className={cn(
                    "font-medium opacity-60 hover:opacity-100 transition-all duration-200 px-2 py-1",
                    pathName === path && "text-primary opacity-100"
                  )}
                  href={path}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center space-x-2 px-4">
            <ModeToggle />
          </div>
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded">
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                  <SheetDescription>
                    Create your own froms with multiple functionalities.
                  </SheetDescription>
                </SheetHeader>
                <nav className="w-full pt-4 border-t-2 border-primary mt-6 flex flex-col items-center justify-center gap-y-6">
                  {links.map(({ path, label }, i) => {
                    return (
                      <Link
                        key={i}
                        className={cn(
                          "font-medium opacity-60 hover:opacity-100 transition-all duration-200 px-3 py-3 w-full text-left rounded bg-secondary",
                          pathName === path && "text-primary opacity-100"
                        )}
                        href={path}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </nav>
  );
}
