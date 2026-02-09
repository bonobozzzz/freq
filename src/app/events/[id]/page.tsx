import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MOCK_EVENTS,
  getEvent,
  getVenue,
  getEventArtists,
} from "@/lib/mock-data";

export function generateStaticParams() {
  return MOCK_EVENTS.map((e) => ({ id: e.id }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) notFound();

  const venue = getVenue(event.venueId);
  const artists = getEventArtists(event);

  return (
    <>
      {/* ===== ヒーロー（グラデーション維持） ===== */}
      <section className="relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${event.gradient}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:pb-16 sm:pt-28 lg:px-6">
          <div className="flex flex-wrap gap-2">
            {event.genres.map((g) => (
              <Badge
                key={g}
                variant="outline"
                className="border-white/25 bg-black/30 text-xs text-white/80 backdrop-blur-sm"
              >
                {g}
              </Badge>
            ))}
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {event.title}
          </h1>

          <p className="mt-3 text-sm text-white/60 sm:text-base">
            主催：
            <span className="font-medium text-white/80">
              {event.organizerName}
            </span>
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {event.date} ({event.day})
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {event.startTime} — {event.endTime}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {venue?.name}、{venue?.area}
            </span>
            {venue?.capacity && (
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                キャパ {venue.capacity}名
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ===== コンテンツ ===== */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                概要
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                {event.description}
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                ラインナップ
              </h2>
              <ul className="mt-4 space-y-2">
                {artists.map((artist) => (
                  <li key={artist.id}>
                    <Link
                      href={`/artists/${artist.id}`}
                      className="group flex items-center gap-4 rounded-lg border border-transparent p-3 transition-colors hover:border-border hover:bg-secondary"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-muted-foreground">
                        {artist.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {artist.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {artist.genres.join(", ")}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">
                ゲストリスト
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {event.title} のゲストリストに登録しよう
              </p>
              <Button className="mt-4 w-full font-semibold">
                ゲストリストに登録
              </Button>
            </div>

            {venue && (
              <Link href={`/venues/${venue.id}`}>
                <div className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-colors hover:border-primary/40">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    会場
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {venue.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {venue.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {venue.area}、{venue.prefecture}
                  </p>
                </div>
              </Link>
            )}

            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                シェア
              </p>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm" className="text-sm">
                  リンクをコピー
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
