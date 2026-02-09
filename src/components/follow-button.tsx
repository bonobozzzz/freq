"use client";

import { useCallback, useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  type FollowType,
  isFollowing,
  toggleFollow,
} from "@/lib/follow-store";

type Props = {
  type: FollowType;
  id: string;
  className?: string;
};

export function FollowButton({ type, id, className }: Props) {
  const [following, setFollowing] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setFollowing(isFollowing(type, id));
    const handler = () => setFollowing(isFollowing(type, id));
    window.addEventListener("freq_follows_changed", handler);
    return () => window.removeEventListener("freq_follows_changed", handler);
  }, [type, id]);

  const handleClick = useCallback(() => {
    const next = toggleFollow(type, id);
    setFollowing(next);
  }, [type, id]);

  if (following) {
    return (
      <Button
        size="sm"
        className={`h-9 gap-1.5 px-4 text-sm font-semibold ${className ?? ""}`}
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Heart className="h-3.5 w-3.5 fill-current" />
        {hover ? "フォロー解除" : "フォロー中"}
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={`h-9 gap-1.5 px-4 text-sm font-semibold ${className ?? ""}`}
      onClick={handleClick}
    >
      <Heart className="h-3.5 w-3.5" />
      フォロー
    </Button>
  );
}
