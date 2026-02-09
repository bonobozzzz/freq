import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FollowButton } from "@/components/follow-button";
import { Separator } from "@/components/ui/separator";
import { EventCard } from "@/components/events/event-card";
import { SOCIAL_PLATFORMS } from "@/components/icons/social-icons";
import { MOCK_ARTISTS, getArtist, getArtistEvents } from "@/lib/mock-data";

export function generateStaticParams() {
  return MOCK_ARTISTS.map((a) => ({ id: a.id }));
}

export default async function ArtistDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artist = getArtist(id);
  if (!artist) notFound();

  const events = getArtistEvents(artist.id);
  const activeLinks = SOCIAL_PLATFORMS.filter(
    (p) => artist.links?.[p.key]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-muted-foreground">
          {artist.name.slice(0, 2).toUpperCase()}
        </div>

        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {artist.name}
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {artist.genres.map((g) => (
              <Badge key={g} variant="outline" className="text-sm text-muted-foreground">
                {g}
              </Badge>
            ))}
          </div>
        </div>

        <FollowButton type="artist" id={artist.id} />
      </div>

      <div className="mt-8 max-w-2xl">
        <p className="text-base leading-relaxed text-muted-foreground">
          {artist.bio}
        </p>
      </div>

      {activeLinks.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {activeLinks.map((platform) => (
            <Button
              key={platform.key}
              variant="outline"
              size="sm"
              className="gap-2 text-sm"
              asChild
            >
              <a
                href={artist.links![platform.key]!}
                target="_blank"
                rel="noopener noreferrer"
              >
                <platform.icon className="h-4 w-4" />
                {platform.label}
              </a>
            </Button>
          ))}
        </div>
      )}

      <Separator className="my-10" />

      <div>
        <h2 className="text-xl font-bold tracking-tight">出演予定イベント</h2>
        {events.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">
            出演予定のイベントはありません。
          </p>
        )}
      </div>
    </div>
  );
}
