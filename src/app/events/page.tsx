"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { EventCard } from "@/components/events/event-card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { MOCK_EVENTS, GENRES, getVenue, getEventArtists } from "@/lib/mock-data";

const featuredEvent = MOCK_EVENTS.find((e) => e.featured);
const sortedByArtists = [...MOCK_EVENTS]
  .filter((e) => !e.featured)
  .sort((a, b) => b.artistIds.length - a.artistIds.length);
const secondPickup = sortedByArtists[0];
const pickupIds = new Set([featuredEvent?.id, secondPickup?.id].filter(Boolean));
const rest = MOCK_EVENTS.filter((e) => !pickupIds.has(e.id));

export default function EventsPage() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filtered = selectedGenre
    ? rest.filter((e) => e.genres.includes(selectedGenre))
    : rest;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <FadeIn>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">イベント</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          東京の近日開催イベント
        </p>
      </FadeIn>

      {/* ===== ピックアップ ===== */}
      <section className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          ピックアップ
        </p>

        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {[featuredEvent, secondPickup].filter(Boolean).map((event) => {
            if (!event) return null;
            const venue = getVenue(event.venueId);
            const artists = getEventArtists(event);
            return (
              <Link key={event.id} href={`/events/${event.id}`}>
                <div className="group relative overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div
                    className={`aspect-[16/9] w-full bg-gradient-to-br ${event.gradient}`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                    <div className="flex items-center gap-2">
                      {event.featured && (
                        <Badge className="bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
                          注目
                        </Badge>
                      )}
                      {event.genres.map((g) => (
                        <Badge
                          key={g}
                          variant="outline"
                          className="border-white/25 bg-black/40 text-[10px] text-white/80 backdrop-blur-sm"
                        >
                          {g}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/50">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />
                          {event.date} ({event.day})
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {event.startTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {venue?.name}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {event.title}
                      </h2>
                      <p className="text-xs text-white/60 line-clamp-1">
                        {artists.map((a) => a.name).join(" / ")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Separator className="my-10" />

      {/* ===== すべてのイベント ===== */}
      <section>
        <h2 className="mb-5 text-xl font-bold tracking-tight text-foreground">
          すべてのイベント
        </h2>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedGenre(null)}
              className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedGenre === null
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              すべて
            </button>
            {GENRES.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenre(selectedGenre === g ? null : g)}
                className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                  selectedGenre === g
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <StaggerItem key={event.id}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filtered.length === 0 && (
          <FadeIn className="py-20 text-center">
            <p className="text-sm text-muted-foreground">
              このジャンルのイベントは見つかりませんでした。
            </p>
          </FadeIn>
        )}
      </section>
    </div>
  );
}
