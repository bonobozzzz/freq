"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { type MockEvent, getVenue, getEventArtists } from "@/lib/mock-data";

interface EventCardProps {
  event: MockEvent;
  variant?: "default" | "featured";
}

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const venue = getVenue(event.venueId);
  const artists = getEventArtists(event);

  if (variant === "featured") {
    return (
      <Link href={`/events/${event.id}`}>
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-lg border border-border bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          {event.imageUrl ? (
            <div className="aspect-[21/9] w-full sm:aspect-[3/1]">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div
              className={`aspect-[21/9] w-full bg-gradient-to-br ${event.gradient} sm:aspect-[3/1]`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider">
                注目
              </Badge>
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
              <p className="text-xs font-medium tracking-widest text-white/60 uppercase">
                {event.date} ({event.day}) — {event.startTime}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {event.title}
              </h2>
              <p className="text-sm text-white/70">
                {artists.map((a) => a.name).join(" / ")}
              </p>
              <p className="text-xs text-white/50">
                {venue?.name} · {venue?.area}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/events/${event.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="group relative overflow-hidden rounded-lg border border-border bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        {event.imageUrl ? (
          <div className="aspect-[4/5] w-full">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`aspect-[4/5] w-full bg-gradient-to-br ${event.gradient}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex flex-wrap gap-1.5">
            {event.genres.map((g) => (
              <Badge
                key={g}
                variant="outline"
                className="border-white/20 bg-black/40 text-[10px] text-white/80 backdrop-blur-sm"
              >
                {g}
              </Badge>
            ))}
          </div>
          <div className="space-y-1">
            <p className="text-[11px] font-medium tracking-widest text-white/50 uppercase">
              {event.date} ({event.day})
            </p>
            <h3 className="text-xl font-bold tracking-tight text-white">
              {event.title}
            </h3>
            <p className="text-xs text-white/60 line-clamp-1">
              {artists.map((a) => a.name).join(" / ")}
            </p>
            <p className="text-[11px] text-white/40">
              {venue?.name} · {venue?.area}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
