"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const NAV_LINKS = [
  { href: "/events", label: "イベント" },
  { href: "/artists", label: "アーティスト" },
  { href: "/venues", label: "会場" },
] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-lg font-bold tracking-tight text-foreground">
            freq
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="ジャンル、アーティストを検索..."
              className="h-9 w-52 rounded-full border-border bg-secondary pl-8 text-sm placeholder:text-muted-foreground transition-all focus-visible:w-64 focus-visible:bg-white"
            />
          </div>

          {/* Area */}
          <Button
            variant="ghost"
            size="sm"
            className="h-9 gap-1.5 px-3 text-sm text-muted-foreground hover:text-foreground"
          >
            <MapPin className="h-3.5 w-3.5" />
            東京
          </Button>

          <Separator orientation="vertical" className="mx-1 h-5" />

          {/* Auth */}
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-3 text-sm text-muted-foreground hover:text-foreground"
          >
            ログイン
          </Button>
          <Button size="sm" className="h-9 px-4 text-sm font-semibold">
            新規登録
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white p-0">
            <SheetHeader className="border-b border-border px-5 py-4">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-base font-bold">freq</SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </SheetHeader>

            <div className="flex flex-col gap-5 p-5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="ジャンル、アーティストを検索..."
                  className="rounded-full border-border bg-secondary pl-9 text-sm"
                />
              </div>

              <Button
                variant="outline"
                className="justify-start gap-2 border-border text-sm"
              >
                <MapPin className="h-3.5 w-3.5" />
                東京
              </Button>

              <Separator />

              <nav className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <Separator />

              <div className="flex flex-col gap-2">
                <Button variant="outline" className="w-full text-sm">
                  ログイン
                </Button>
                <Button className="w-full text-sm font-semibold">
                  新規登録
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
