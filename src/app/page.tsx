import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventCard } from "@/components/events/event-card";
import { MOCK_EVENTS, getVenue, getEventArtists } from "@/lib/mock-data";

const featured = MOCK_EVENTS.find((e) => e.featured)!;
const featuredVenue = getVenue(featured.venueId);
const featuredArtists = getEventArtists(featured);
const upcoming = MOCK_EVENTS.filter((e) => !e.featured).slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            注目イベント
          </p>

          <div className="mt-4 grid items-stretch gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
            {/* Left: フライヤー */}
            <Link
              href={`/events/${featured.id}`}
              className="group relative block overflow-hidden rounded-lg border border-border shadow-sm"
            >
              {featured.imageUrl ? (
                <Image
                  src={featured.imageUrl}
                  alt={`${featured.title} フライヤー`}
                  width={600}
                  height={800}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              ) : (
                <div
                  className={`relative aspect-[3/4] w-full bg-gradient-to-br ${featured.gradient}`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="flex gap-2">
                      {featured.genres.map((g) => (
                        <span
                          key={g}
                          className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 text-5xl font-bold tracking-tight text-white/25 sm:text-6xl">
                      {featured.title}
                    </p>
                    <p className="mt-3 text-xs tracking-widest text-white/20 uppercase">
                      {featured.date} ({featured.day})
                    </p>
                    <p className="mt-1 text-[11px] text-white/15">
                      {featuredVenue?.name}
                    </p>
                  </div>
                </div>
              )}
            </Link>

            {/* Right: イベント情報 */}
            <div className="flex flex-col justify-center py-2">
              <div className="flex flex-wrap gap-2">
                {featured.genres.map((g) => (
                  <Badge
                    key={g}
                    variant="outline"
                    className="text-xs text-muted-foreground"
                  >
                    {g}
                  </Badge>
                ))}
              </div>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {featured.title}
              </h1>

              <p className="mt-2 text-sm text-muted-foreground">
                主催：
                <span className="font-medium text-foreground">
                  {featured.organizerName}
                </span>
              </p>

              <div className="mt-6 flex flex-col gap-2.5 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                  {featured.date} ({featured.day})
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  {featured.startTime} — {featured.endTime}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  {featuredVenue?.name} · {featuredVenue?.area}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  ラインナップ
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredArtists.map((artist) => (
                    <Link
                      key={artist.id}
                      href={`/artists/${artist.id}`}
                      className="group/artist flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-1.5 text-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[9px] font-bold text-muted-foreground">
                        {artist.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="font-medium text-foreground group-hover/artist:text-primary transition-colors">
                        {artist.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="px-6 font-semibold">
                  <Link href={`/events/${featured.id}`}>
                    詳細を見る
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-6">
                  ゲストリストに登録
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 近日開催 ===== */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              近日開催
            </h2>
            <Link
              href="/events"
              className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              すべて見る <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
