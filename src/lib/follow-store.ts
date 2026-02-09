const STORAGE_KEY = "freq_follows";

export type FollowType = "artist" | "venue";

type FollowState = {
  artists: string[];
  venues: string[];
};

function getState(): FollowState {
  if (typeof window === "undefined") return { artists: [], venues: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { artists: [], venues: [] };
    return JSON.parse(raw) as FollowState;
  } catch {
    return { artists: [], venues: [] };
  }
}

function setState(state: FollowState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event("freq_follows_changed"));
}

export function isFollowing(type: FollowType, id: string): boolean {
  const state = getState();
  const list = type === "artist" ? state.artists : state.venues;
  return list.includes(id);
}

export function toggleFollow(type: FollowType, id: string): boolean {
  const state = getState();
  const key = type === "artist" ? "artists" : "venues";
  const index = state[key].indexOf(id);
  if (index >= 0) {
    state[key].splice(index, 1);
  } else {
    state[key].push(id);
  }
  setState(state);
  return state[key].includes(id);
}

export function getFollowedIds(type: FollowType): string[] {
  const state = getState();
  return type === "artist" ? state.artists : state.venues;
}
