// ============================================================
// Mock Data Layer — [@Backend_Ryo]
// Structure mirrors Prisma schema for seamless migration.
// ============================================================

export type MockArtist = {
  id: string;
  name: string;
  genres: string[];
  bio: string;
  links?: {
    x?: string;
    instagram?: string;
    soundcloud?: string;
    bandcamp?: string;
    spotify?: string;
    appleMusic?: string;
    amazonMusic?: string;
  };
};

export type MockVenue = {
  id: string;
  name: string;
  area: string;
  prefecture: string;
  address: string;
  capacity: number;
};

export type MockEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  day: string;
  startTime: string;
  endTime: string;
  venueId: string;
  organizerName: string;
  genres: string[];
  artistIds: string[];
  gradient: string;
  imageUrl?: string | null;
  featured?: boolean;
};

// ---- Genre Master ----

export const GENRES = [
  "Techno",
  "House",
  "Minimal",
  "Deep House",
  "Ambient",
  "Industrial",
  "Bass",
  "Drum & Bass",
  "Experimental",
] as const;

// ---- Venues ----

export const MOCK_VENUES: MockVenue[] = [
  {
    id: "v1",
    name: "WOMB",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区円山町2-16",
    capacity: 800,
  },
  {
    id: "v2",
    name: "Contact",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区道玄坂2-10-12",
    capacity: 600,
  },
  {
    id: "v3",
    name: "Circus Tokyo",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区渋谷3-26-16",
    capacity: 300,
  },
  {
    id: "v4",
    name: "Vent",
    area: "表参道",
    prefecture: "東京都",
    address: "東京都港区南青山3-18-19",
    capacity: 400,
  },
  {
    id: "v5",
    name: "Warehouse702",
    area: "新木場",
    prefecture: "東京都",
    address: "東京都江東区新木場2-7-2",
    capacity: 1500,
  },
  {
    id: "v6",
    name: "Forestlimit",
    area: "幡ヶ谷",
    prefecture: "東京都",
    address: "東京都渋谷区西原1-13-5",
    capacity: 80,
  },
];

// ---- Artists ----

export const MOCK_ARTISTS: MockArtist[] = [
  {
    id: "a1",
    name: "KØSMOS",
    genres: ["Techno", "Industrial"],
    bio: "ベルリンのアンダーグラウンドから放たれる、容赦ない4つ打ちのプレッシャー。儀式とレイヴの境界を溶かすマラソンセットで知られる。",
    links: {
      soundcloud: "https://soundcloud.com/kosmos",
      x: "https://x.com/kosmos",
      instagram: "https://instagram.com/kosmos",
    },
  },
  {
    id: "a2",
    name: "Yūrei",
    genres: ["Ambient", "Experimental"],
    bio: "東京発のスペクトラルなサウンドスケープ。フィールドレコーディングとグラニュラーシンセシスを融合し、幻想的なテクスチャーを生み出す。",
    links: {
      bandcamp: "https://yurei.bandcamp.com",
      instagram: "https://instagram.com/yurei",
    },
  },
  {
    id: "a3",
    name: "NERVE",
    genres: ["Techno", "Minimal"],
    bio: "精密に設計されたミニマルテクノ。すべての音には意図があり、すべての静寂は武器だ。",
    links: {
      spotify: "https://open.spotify.com/artist/nerve",
      appleMusic: "https://music.apple.com/artist/nerve",
      x: "https://x.com/nerve",
    },
  },
  {
    id: "a4",
    name: "Sōma",
    genres: ["Deep House", "House"],
    bio: "シカゴのヘリテージに根ざしたディープグルーヴを、深夜の東京というレンズを通して表現。闇の中の温もり。",
    links: {
      soundcloud: "https://soundcloud.com/soma",
      spotify: "https://open.spotify.com/artist/soma",
      instagram: "https://instagram.com/soma",
    },
  },
  {
    id: "a5",
    name: "AcidWitch",
    genres: ["Techno", "Industrial"],
    bio: "深淵から這い出る、アシッドまみれのディストーション・ヘビーテクノ。心臓の弱い者はお断り。",
    links: {
      soundcloud: "https://soundcloud.com/acidwitch",
      bandcamp: "https://acidwitch.bandcamp.com",
    },
  },
  {
    id: "a6",
    name: "DRKRM",
    genres: ["Minimal", "Techno"],
    bio: "最小の構成で最大のインパクト。神経系を書き換える催眠的ループ。",
    links: {
      soundcloud: "https://soundcloud.com/drkrm",
      spotify: "https://open.spotify.com/artist/drkrm",
      amazonMusic: "https://music.amazon.com/artists/drkrm",
      x: "https://x.com/drkrm",
    },
  },
  {
    id: "a7",
    name: "Pulse",
    genres: ["Drum & Bass", "Bass"],
    bio: "高速のベースプレッシャー。リキッドローラーからニューロファンクまで、常にテンポを上げ続ける。",
    links: {
      instagram: "https://instagram.com/pulse",
      soundcloud: "https://soundcloud.com/pulse",
    },
  },
  {
    id: "a8",
    name: "echo_",
    genres: ["Deep House", "Ambient"],
    bio: "ディープハウスがアンビエントに溶け込む場所。夜と夜明けの狭間をサウンドトラックする、長尺の瞑想的セット。",
    links: {
      bandcamp: "https://echo.bandcamp.com",
      spotify: "https://open.spotify.com/artist/echo",
    },
  },
];

// ---- Events ----

export const MOCK_EVENTS: MockEvent[] = [
  {
    id: "e1",
    title: "VOID",
    description:
      "闇の中へ。2つのフロアで展開される容赦ないテクノの夜。Room 1ではインダストリアルグレードの4つ打ちを、Room 2ではエクスペリメンタル・エレクトロニクスの最前線を探求する。",
    date: "2026.02.14",
    day: "土",
    startTime: "23:00",
    endTime: "05:00",
    venueId: "v1",
    organizerName: "Midnight Collective",
    genres: ["Techno", "Industrial"],
    artistIds: ["a1", "a3", "a5"],
    gradient: "from-purple-950/80 via-zinc-950 to-black",
    featured: true,
  },
  {
    id: "e2",
    title: "Dimensions",
    description:
      "ハウスミュージックのディープサイドを巡る旅。温かいベースライン、ソウルフルなヴォーカル、催眠的なグルーヴが早朝の光まで続く。",
    date: "2026.02.15",
    day: "日",
    startTime: "22:00",
    endTime: "04:00",
    venueId: "v2",
    organizerName: "Frequency Inc.",
    genres: ["House", "Deep House"],
    artistIds: ["a4", "a8"],
    gradient: "from-amber-950/70 via-zinc-950 to-black",
  },
  {
    id: "e3",
    title: "LOW END",
    description:
      "ベースの重力。聴く前に体が感じるサブ周波数。親密なウェアハウスでDrum & Bassとその先へ。",
    date: "2026.02.20",
    day: "金",
    startTime: "23:00",
    endTime: "05:00",
    venueId: "v5",
    organizerName: "BASS CHURCH",
    genres: ["Bass", "Drum & Bass"],
    artistIds: ["a7"],
    gradient: "from-cyan-950/70 via-zinc-950 to-black",
  },
  {
    id: "e4",
    title: "Midnight Society",
    description:
      "街が眠り、我々は踊る。表参道の中心でディープハウスのセレクション。親密で温かく、深くグルーヴィー。",
    date: "2026.02.21",
    day: "土",
    startTime: "23:30",
    endTime: "05:00",
    venueId: "v4",
    organizerName: "Frequency Inc.",
    genres: ["Deep House", "Minimal"],
    artistIds: ["a4", "a6"],
    gradient: "from-rose-950/60 via-zinc-950 to-black",
  },
  {
    id: "e5",
    title: "Concrete",
    description:
      "RAW。妥協なし。まさにこの目的のために建てられたウェアハウスでのインダストリアルテクノ。歪みを覚悟せよ。",
    date: "2026.02.27",
    day: "金",
    startTime: "23:00",
    endTime: "06:00",
    venueId: "v5",
    organizerName: "Midnight Collective",
    genres: ["Industrial", "Techno"],
    artistIds: ["a1", "a5"],
    gradient: "from-zinc-800/60 via-zinc-950 to-black",
  },
  {
    id: "e6",
    title: "Elevation",
    description:
      "音のレイヤーを昇っていく。ディープなアンビエントの始まりからピークタイムのミニマルテクノへ——これは旅だ。",
    date: "2026.02.28",
    day: "土",
    startTime: "22:00",
    endTime: "05:00",
    venueId: "v3",
    organizerName: "Frequency Inc.",
    genres: ["Minimal", "Techno"],
    artistIds: ["a3", "a6"],
    gradient: "from-emerald-950/60 via-zinc-950 to-black",
  },
  {
    id: "e7",
    title: "Ghost Frequencies",
    description:
      "親密なForestlimitの空間で繰り広げる、アンビエントとエクスペリメンタル・エレクトロニクスの夕べ。リスニングセッション形式——フロアでの会話は禁止。",
    date: "2026.03.06",
    day: "金",
    startTime: "20:00",
    endTime: "00:00",
    venueId: "v6",
    organizerName: "Spectral",
    genres: ["Ambient", "Experimental"],
    artistIds: ["a2", "a8"],
    gradient: "from-indigo-950/70 via-zinc-950 to-black",
  },
  {
    id: "e8",
    title: "ACID RAIN",
    description:
      "303が夜を突き抜ける。アシッドテクノ、アシッドハウス、そしてその間にあるすべてのスクウェルチ。",
    date: "2026.03.07",
    day: "土",
    startTime: "23:00",
    endTime: "05:00",
    venueId: "v1",
    organizerName: "Midnight Collective",
    genres: ["Techno", "House"],
    artistIds: ["a5", "a4", "a3"],
    gradient: "from-fuchsia-950/60 via-zinc-950 to-black",
  },
];

// ---- Lookup Helpers ----

export function getVenue(id: string) {
  return MOCK_VENUES.find((v) => v.id === id);
}

export function getArtist(id: string) {
  return MOCK_ARTISTS.find((a) => a.id === id);
}

export function getEvent(id: string) {
  return MOCK_EVENTS.find((e) => e.id === id);
}

export function getEventArtists(event: MockEvent) {
  return event.artistIds.map((id) => getArtist(id)).filter(Boolean) as MockArtist[];
}

export function getArtistEvents(artistId: string) {
  return MOCK_EVENTS.filter((e) => e.artistIds.includes(artistId));
}

export function getVenueEvents(venueId: string) {
  return MOCK_EVENTS.filter((e) => e.venueId === venueId);
}
