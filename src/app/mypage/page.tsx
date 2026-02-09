"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, MapPin, Calendar, Music } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EventCard } from "@/components/events/event-card";
import { FollowButton } from "@/components/follow-button";
import {
  getArtist,
  getVenue,
  getArtistEvents,
  type MockArtist,
  type MockVenue,
  type MockEvent,
} from "@/lib/mock-data";
import { getFollowedIds } from "@/lib/follow-store";

export default function MyPage() {
  const [followedArtists, setFollowedArtists] = useState<MockArtist[]>([]);
  const [followedVenues, setFollowedVenues] = useState<MockVenue[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<MockEvent[]>([]);

  const refresh = () => {
    const artistIds = getFollowedIds("artist");
    const venueIds = getFollowedIds("venue");

    const artists = artistIds
      .map((id) => getArtist(id))
      .filter(Boolean) as MockArtist[];
    const venues = venueIds
      .map((id) => getVenue(id))
      .filter(Boolean) as MockVenue[];

    const events = artists
      .flatMap((a) => getArtistEvents(a.id))
      .filter((e, i, arr) => arr.findIndex((x) => x.id === e.id) === i)
      .sort((a, b) => a.date.localeCompare(b.date));

    setFollowedArtists(artists);
    setFollowedVenues(venues);
    setUpcomingEvents(events);
  };

  useEffect(() => {
    refresh();
    window.addEventListener("freq_follows_changed", refresh);
    return () => window.removeEventListener("freq_follows_changed", refresh);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        マイページ
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        フォロー中のアーティスト・会場と、関連イベントをまとめてチェック
      </p>

      {/* ===== フォロー中のアーティスト ===== */}
      <section className="mt-10">
        <div className="flex items-center gap-2">
          <Music className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold tracking-tight">
            フォロー中のアーティスト
          </h2>
          <span className="text-sm text-muted-foreground">
            {followedArtists.length}件
          </span>
        </div>

        {followedArtists.length > 0 ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {followedArtists.map((artist) => (
              <div
                key={artist.id}
                className="flex items-center justify-between rounded-lg border border-border bg-white p-4 shadow-sm"
              >
                <Link
                  href={`/artists/${artist.id}`}
                  className="flex min-w-0 flex-1 items-center gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-muted-foreground">
                    {artist.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      {artist.name}
                    </p>
                    <div className="mt-0.5 flex flex-wrap gap-1">
                      {artist.genres.slice(0, 2).map((g) => (
                        <Badge
                          key={g}
                          variant="outline"
                          className="text-xs text-muted-foreground"
                        >
                          {g}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
                <FollowButton type="artist" id={artist.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-lg border border-dashed border-border bg-secondary/50 p-8 text-center">
            <Heart className="mx-auto h-8 w-8 text-muted-foreground/40" />
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              まだアーティストをフォローしていません
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 text-sm"
              asChild
            >
              <Link href="/artists">アーティストを探す</Link>
            </Button>
          </div>
        )}
      </section>

      {/* ===== フォロー中アーティストの出演予定 ===== */}
      {upcomingEvents.length > 0 && (
        <>
          <Separator className="my-10" />
          <section>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight">
                出演予定イベント
              </h2>
              <span className="text-sm text-muted-foreground">
                {upcomingEvents.length}件
              </span>
            </div>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </>
      )}

      <Separator className="my-10" />

      {/* ===== フォロー中のベニュー ===== */}
      <section>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold tracking-tight">
            フォロー中の会場
          </h2>
          <span className="text-sm text-muted-foreground">
            {followedVenues.length}件
          </span>
        </div>

        {followedVenues.length > 0 ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {followedVenues.map((venue) => (
              <div
                key={venue.id}
                className="flex items-center justify-between rounded-lg border border-border bg-white p-4 shadow-sm"
              >
                <Link
                  href={`/venues/${venue.id}`}
                  className="flex min-w-0 flex-1 items-center gap-3"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      {venue.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {venue.area}、{venue.prefecture}
                    </p>
                  </div>
                </Link>
                <FollowButton type="venue" id={venue.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-lg border border-dashed border-border bg-secondary/50 p-8 text-center">
            <MapPin className="mx-auto h-8 w-8 text-muted-foreground/40" />
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              まだ会場をフォローしていません
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 text-sm"
              asChild
            >
              <Link href="/venues">会場を探す</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
