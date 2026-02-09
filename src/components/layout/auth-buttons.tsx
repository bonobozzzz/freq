"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, User } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import type { User as SupabaseUser } from "@supabase/supabase-js";

function useAuth() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: string, session: { user: SupabaseUser | null } | null) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

  return { user, loading, supabase };
}

export function AuthButtons() {
  const { user, loading, supabase } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase?.auth.signOut();
    router.refresh();
  };

  if (loading) {
    return <div className="h-9 w-20" />;
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <User className="h-3.5 w-3.5" />
          <span className="max-w-[120px] truncate">
            {user.user_metadata?.full_name ?? user.email?.split("@")[0]}
          </span>
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 gap-1.5 px-3 text-sm text-muted-foreground hover:text-foreground"
          onClick={handleLogout}
        >
          <LogOut className="h-3.5 w-3.5" />
          ログアウト
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="h-9 px-3 text-sm text-muted-foreground hover:text-foreground"
        asChild
      >
        <Link href="/login">ログイン</Link>
      </Button>
      <Button size="sm" className="h-9 px-4 text-sm font-semibold" asChild>
        <Link href="/login">新規登録</Link>
      </Button>
    </>
  );
}

export function MobileAuthButtons() {
  const { user, loading, supabase } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase?.auth.signOut();
    router.refresh();
  };

  if (loading) {
    return <div className="h-10 w-full" />;
  }

  if (user) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="truncate text-sm font-medium">
            {user.user_metadata?.full_name ?? user.email?.split("@")[0]}
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full gap-2 text-sm"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          ログアウト
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" className="w-full text-sm" asChild>
        <Link href="/login">ログイン</Link>
      </Button>
      <Button className="w-full text-sm font-semibold" asChild>
        <Link href="/login">新規登録</Link>
      </Button>
    </div>
  );
}
