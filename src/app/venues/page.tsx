import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import { MOCK_VENUES, getVenueEvents } from "@/lib/mock-data";

export default function VenuesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">会場</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        東京のクラブ・ライブハウス
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_VENUES.map((venue) => {
          const events = getVenueEvents(venue.id);
          return (
            <Link key={venue.id} href={`/venues/${venue.id}`}>
              <div className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {venue.name}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {venue.area}、{venue.prefecture}
                    </p>
                  </div>
                  {venue.capacity && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />
                      {venue.capacity}名
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {venue.address}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    開催予定 {events.length}件
                  </span>
                  <span className="text-sm text-muted-foreground">
                    詳細 &rarr;
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
