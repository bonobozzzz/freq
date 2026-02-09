import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const FOOTER_NAV = [
  { href: "/events", label: "イベント" },
  { href: "/artists", label: "アーティスト" },
  { href: "/venues", label: "会場" },
] as const;

const FOOTER_LEGAL = [
  { href: "/about", label: "freqについて" },
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシー" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <span className="text-lg font-bold tracking-tight text-foreground">
              freq
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              音楽イベントを発見しよう。
              <br />
              ジャンル、エリア、あなたの好みでキュレーション。
            </p>
          </div>

          {/* Navigate */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              ナビゲーション
            </span>
            <nav className="flex flex-col gap-2">
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              その他
            </span>
            <nav className="flex flex-col gap-2">
              {FOOTER_LEGAL.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} freq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
