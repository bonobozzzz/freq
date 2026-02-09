import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_PLATFORMS } from "@/components/icons/social-icons";
import { MOCK_ARTISTS, getArtistEvents } from "@/lib/mock-data";

const sorted = [...MOCK_ARTISTS]
  .map((a) => ({ ...a, eventCount: getArtistEvents(a.id).length }))
  .sort((a, b) => b.eventCount - a.eventCount);
const pickups = sorted.slice(0, 2);
const rest = sorted.slice(2);

export default function ArtistsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        アーティスト
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        あなたのエリアで活動するアーティストを見つけよう
      </p>

      {/* ===== ピックアップ ===== */}
      <section className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          ピックアップ
        </p>

        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {pickups.map((artist) => {
            const events = getArtistEvents(artist.id);
            return (
              <Link key={artist.id} href={`/artists/${artist.id}`}>
                <div className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-muted-foreground">
                      {artist.name.slice(0, 2).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {artist.name}
                      </p>

                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {artist.genres.map((g) => (
                          <Badge key={g} variant="outline" className="text-xs text-muted-foreground">
                            {g}
                          </Badge>
                        ))}
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {artist.bio}
                      </p>

                      <div className="mt-4 flex items-center gap-4">
                        <span className="text-sm font-medium text-primary">
                          出演予定 {events.length}件
                        </span>
                        {artist.links && (
                          <span className="flex items-center gap-1.5">
                            {SOCIAL_PLATFORMS.filter((p) => artist.links?.[p.key]).map((p) => (
                              <p.icon key={p.key} className="h-3.5 w-3.5 text-muted-foreground" />
                            ))}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Separator className="my-10" />

      {/* ===== すべてのアーティスト ===== */}
      <section>
        <h2 className="mb-5 text-xl font-bold tracking-tight text-foreground">
          すべてのアーティスト
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((artist) => {
            const events = getArtistEvents(artist.id);
            return (
              <Link key={artist.id} href={`/artists/${artist.id}`}>
                <div className="group flex items-start gap-4 rounded-lg border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-muted-foreground">
                    {artist.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {artist.name}
                    </p>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {artist.genres.map((g) => (
                        <Badge key={g} variant="outline" className="text-xs text-muted-foreground">
                          {g}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      出演予定 {events.length}件
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
