import { notFound } from "next/navigation";
import { MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EventCard } from "@/components/events/event-card";
import { MOCK_VENUES, getVenue, getVenueEvents } from "@/lib/mock-data";

export function generateStaticParams() {
  return MOCK_VENUES.map((v) => ({ id: v.id }));
}

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const venue = getVenue(id);
  if (!venue) notFound();

  const events = getVenueEvents(venue.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {venue.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {venue.address}
            </span>
            {venue.capacity && (
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                キャパシティ {venue.capacity}名
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {venue.area}、{venue.prefecture}
          </p>
        </div>

        <Button className="w-fit font-semibold">会場をフォロー</Button>
      </div>

      <Separator className="my-10" />

      <div>
        <h2 className="text-xl font-bold tracking-tight">開催予定イベント</h2>
        {events.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">
            この会場での予定イベントはありません。
          </p>
        )}
      </div>
    </div>
  );
}
