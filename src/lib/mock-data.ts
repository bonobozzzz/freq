// ============================================================
// Data Layer — Real data sourced from RA / WOMB / Web
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
  "Tech House",
  "Disco",
  "Drum & Bass",
  "Hip Hop",
  "Experimental",
  "Industrial",
  "Ambient",
] as const;

// ---- Venues ----

export const MOCK_VENUES: MockVenue[] = [
  {
    id: "v1",
    name: "WOMB",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区円山町2-16",
    capacity: 1000,
  },
  {
    id: "v2",
    name: "Zerotokyo",
    area: "新宿",
    prefecture: "東京都",
    address: "東京都新宿区歌舞伎町1-29-1 東急歌舞伎町タワー B1F-B4F",
    capacity: 1500,
  },
  {
    id: "v3",
    name: "VENT",
    area: "表参道",
    prefecture: "東京都",
    address: "東京都港区南青山3-18-19 フェスタ表参道ビルB1F",
    capacity: 400,
  },
  {
    id: "v4",
    name: "LIQUIDROOM",
    area: "恵比寿",
    prefecture: "東京都",
    address: "東京都渋谷区東3-16-6",
    capacity: 900,
  },
  {
    id: "v5",
    name: "Spotify O-EAST",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区道玄坂2-14-8 2F",
    capacity: 1300,
  },
  {
    id: "v6",
    name: "UNIT",
    area: "代官山",
    prefecture: "東京都",
    address: "東京都渋谷区恵比寿西1-34-17 ザ・ハウスビル",
    capacity: 600,
  },
  {
    id: "v7",
    name: "CIRCUS Tokyo",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区渋谷3-26-16 第5叶ビル B1F/1F",
    capacity: 300,
  },
  {
    id: "v8",
    name: "WWW",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区宇田川町13-17 ライズビルB1F",
    capacity: 500,
  },
  {
    id: "v9",
    name: "club asia",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区円山町1-8",
    capacity: 600,
  },
  {
    id: "v10",
    name: "Oath",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区道玄坂1-6-5 東静ビルB1F",
    capacity: 90,
  },
  {
    id: "v11",
    name: "ENTER",
    area: "渋谷",
    prefecture: "東京都",
    address: "東京都渋谷区神宮前6-19-17 GEMS神宮前6F",
    capacity: 150,
  },
  {
    id: "v12",
    name: "Bar Bonobo",
    area: "原宿",
    prefecture: "東京都",
    address: "東京都渋谷区神宮前2-23-4",
    capacity: 50,
  },
];

// ---- Artists ----

export const MOCK_ARTISTS: MockArtist[] = [
  {
    id: "a1",
    name: "DJ Nobu",
    genres: ["Techno", "Experimental", "Industrial"],
    bio: "東京を拠点とするDJ/プロデューサー。2001年に千葉でパーティー「Future Terror」を立ち上げ、レーベル「Bitta」を主宰。20年以上にわたり日本のテクノシーンの象徴的存在であり、ディープかつハードなセットで世界中のアンダーグラウンドを魅了し続けている。",
    links: {
      x: "https://x.com/dj_nobu_ft",
      instagram: "https://www.instagram.com/dj_nobu_ft/",
      soundcloud: "https://soundcloud.com/djnobu_bitta",
      bandcamp: "https://dj-nobu.bandcamp.com/",
      spotify: "https://open.spotify.com/artist/0FjzWRwRfEzCndGjColUy9",
    },
  },
  {
    id: "a2",
    name: "Fumiya Tanaka",
    genres: ["Minimal", "House", "Techno"],
    bio: "京都生まれ。1993年に日本初の電子ダンスミュージックレーベル「Torema Records」を設立。30年以上のキャリアを持つ日本で最も評価の高いテクノDJ。ミニマルを「マキシマム」に変えるスタイルが特徴。",
    links: {
      instagram: "https://www.instagram.com/fumiyatanaka.101/",
      soundcloud: "https://soundcloud.com/fumiyatanaka_official",
      spotify: "https://open.spotify.com/artist/6x7CJxVRVtYcTHqui1GDSx",
    },
  },
  {
    id: "a3",
    name: "DJ Krush",
    genres: ["Hip Hop", "Ambient", "Experimental"],
    bio: "1962年東京生まれ。1987年にKrush Posseを結成し、日本のヒップホップシーンを牽引。自然の音を取り入れたアトモスフェリックなプロダクションとジャズサンプリングで知られる。Herbie Hancock、Miles Davisらとのコラボ実績を持つレジェンド。",
    links: {
      instagram: "https://www.instagram.com/djkrushofficial/",
      soundcloud: "https://soundcloud.com/dj-krush-official",
      bandcamp: "https://djkrush.bandcamp.com/",
      spotify: "https://open.spotify.com/artist/00G1NTDAoU7rBpjG4KoYAM",
    },
  },
  {
    id: "a4",
    name: "Gonno",
    genres: ["House", "Techno", "Minimal"],
    bio: "東京を拠点とするDJ/プロデューサー。2011年の「Acdise #2」がブレイクスルーとなり、Laurent Garnier、Todd Terjeらに頻繁にプレイされた。Ostgut Tonからもリリース。レーベル「Sanka」を運営。",
    links: {
      x: "https://x.com/gonno_desu",
      instagram: "https://www.instagram.com/djgonno/",
      soundcloud: "https://soundcloud.com/gonno",
      bandcamp: "https://gonno.bandcamp.com/",
      spotify: "https://open.spotify.com/artist/3eLdh9SdubcpgHghdab5fV",
    },
  },
  {
    id: "a5",
    name: "Kenji Takimi",
    genres: ["Disco", "House"],
    bio: "東京のアンダーグラウンドシーンの「ゴッドファーザー」。レーベル「Crue-l Records」を設立し、30年以上にわたり日本のオルタナティヴ音楽の最前線に立つ。Rainbow Disco Clubレジデント。",
    links: {
      instagram: "https://www.instagram.com/kenji_takimi/",
      spotify: "https://open.spotify.com/artist/5fgqFAUbHSOMQKS4b5kmZL",
    },
  },
  {
    id: "a6",
    name: "Mari Sakurai",
    genres: ["Techno", "Experimental"],
    bio: "横浜出身、東京を拠点とするDJ。スリリングなテクノセットに実験的な要素を融合させたスタイルで知られる。Boiler Room、MUTEK.JP出演。パーティー「Ultraheaven」「SLICK」のオーガナイザー。",
    links: {
      x: "https://x.com/_marisakurai",
      instagram: "https://www.instagram.com/_marisakurai/",
      soundcloud: "https://soundcloud.com/marisakurai",
    },
  },
  {
    id: "a7",
    name: "KABUTO",
    genres: ["House", "Disco"],
    bio: "東京を拠点とするDJ。2016年にパーティー「DAZE OF PHAZE」を立ち上げ、国内外のDJをホスト。デトロイトスタイルのコード、太いアシッドベースライン、ソアリングストリングスなど、ディスコの影響を前面に出したハウスを展開。",
    links: {
      instagram: "https://www.instagram.com/kabutooo/",
      soundcloud: "https://soundcloud.com/kabuto",
    },
  },
  {
    id: "a8",
    name: "Mars89",
    genres: ["Techno", "Industrial", "Experimental"],
    bio: "神戸出身、東京在住のDJ/コンポーザー。南アフリカのgqomやジャマイカのデジダブからインダストリアルニューウェーブまで幅広い影響を取り込む。Thom YorkeがBBC Radio 3で楽曲をプレイ。Undercoverとのコラボでも知られる。",
    links: {
      instagram: "https://www.instagram.com/_mars89/",
      soundcloud: "https://soundcloud.com/mars89",
      bandcamp: "https://mars89.bandcamp.com/",
    },
  },
  {
    id: "a9",
    name: "Wata Igarashi",
    genres: ["Techno", "Deep House"],
    bio: "東京、ロンドン、マドリードで育ち、各地の文化的多様性を吸収。ユーフォリックかつサイケデリックなテクノスタイルを確立。Kompaktからデビューアルバム『Agartha』を発表。現在はアムステルダム拠点。",
    links: {
      instagram: "https://www.instagram.com/wataigarashi/",
      soundcloud: "https://soundcloud.com/wata",
      bandcamp: "https://wataigarashi.bandcamp.com/",
    },
  },
  {
    id: "a10",
    name: "RAHA",
    genres: ["Minimal", "Techno"],
    bio: "東京を拠点とするDJ/プロデューサー。ルーマニアンミニマルにフォーカスし、Rhadoo、Rareshらを日本に招聘するパーティー「Beat In Me」を主催。Sunwavesフェスティバルにも出演。",
    links: {
      x: "https://x.com/rahamusic",
      instagram: "https://www.instagram.com/rahamusic/",
      soundcloud: "https://soundcloud.com/raha_jp",
    },
  },
  {
    id: "a11",
    name: "AOKI takamasa",
    genres: ["Experimental", "Minimal"],
    bio: "1976年大阪生まれ。グリッチ/IDMの先駆者。raster-notonやProgressive Formからリリース。サカナクションとの共同制作やリミックスでも知られる。音楽家としてだけでなくアマチュア写真家としても活動。",
    links: {
      instagram: "https://www.instagram.com/aokitakamasa/",
      soundcloud: "https://soundcloud.com/aoki-1",
      bandcamp: "https://aokitakamasa.bandcamp.com/",
      spotify: "https://open.spotify.com/artist/7bjmjTh6nb3Sslb0AHWhJP",
    },
  },
  {
    id: "a12",
    name: "Que Sakamoto",
    genres: ["Disco", "House", "Techno"],
    bio: "東京出身のDJ/プロデューサー。ディスコからダブ、トランス、ブレイクビートまで幅広いスタイルを展開。近年は70-90年代の日本の音楽にフォーカス。Red Light Radio、NTS Radioなど世界各地のラジオでDJを担当。",
    links: {
      soundcloud: "https://soundcloud.com/que-sakamoto",
      spotify: "https://open.spotify.com/artist/3fNjOhhrcw5J2PWByZQn5N",
    },
  },
  {
    id: "a13",
    name: "Sven Väth",
    genres: ["Techno", "House"],
    bio: "43年以上にわたりグローバルなエレクトロニックミュージックシーンの最前線に立ち続けるドイツのレジェンドDJ。Cocoon Recordings主宰。2024年BAMBIアワード（文化部門）受賞。",
    links: {
      instagram: "https://www.instagram.com/svenvaeth/",
      spotify: "https://open.spotify.com/artist/6FVzMBCNRpSdNH4e2k1VfO",
    },
  },
  {
    id: "a14",
    name: "Aurora Halal",
    genres: ["Techno", "Experimental"],
    bio: "NYC拠点のDJ/プロデューサー。催眠的でサイケデリックなテクノで知られ、ブルックリンのアンダーグラウンドシーンの中心人物。Mutual Dreamingパーティー主催。",
    links: {
      instagram: "https://www.instagram.com/aurorahalal/",
      soundcloud: "https://soundcloud.com/aurorahalal",
    },
  },
  {
    id: "a15",
    name: "Michael Bibi",
    genres: ["Tech House", "House"],
    bio: "UKを代表するテックハウスDJ/プロデューサー。世界中のダンスフロアを席巻するグルーヴィーなサウンドで急速に台頭。Solid Grooves所属。",
    links: {
      instagram: "https://www.instagram.com/michaelbibi/",
      soundcloud: "https://soundcloud.com/michael-bibi",
      spotify: "https://open.spotify.com/artist/6dJiL7jXMHeAFmNvvCkjNb",
    },
  },
  {
    id: "a16",
    name: "Tommy Wada",
    genres: ["Techno", "House"],
    bio: "WOMBの長寿レジデントパーティー「SESSION」を2001年から主宰。トライバルハウスからテクノまで、メインストリームな4つ打ちサウンドにフォーカスしたオールナイトセットで知られる。",
    links: {
      soundcloud: "https://soundcloud.com/tommywada",
    },
  },
];

// ---- Events ----

export const MOCK_EVENTS: MockEvent[] = [
  {
    id: "e1",
    title: "NEWNEU. SYNAPSE. PRESENTS MICHAEL BIBI",
    description:
      "テックハウスの世界的アイコンMICHAEL BIBIがWOMBに初登場。synapse.の4周年を祝い、ファッション・音楽・アート・空間デザインを融合させた一夜。3フロア、10名以上のDJが出演。",
    date: "2026.02.06",
    day: "金",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "NEWNEU / synapse.",
    genres: ["Tech House", "House"],
    artistIds: ["a15"],
    gradient: "from-amber-950/70 via-zinc-950 to-black",
    featured: true,
  },
  {
    id: "e2",
    title: "SUSTAIN-RELEASE × PACIFIC MODE",
    description:
      "NYC拠点のレイヴ機関Sustain-Releaseが2026年ワールドツアーの一環として、東京-NYCコレクティブPACIFIC MODEとコラボレーション。Aurora Halal、DJRUM、PRIORI (Live)ほか出演。",
    date: "2026.02.07",
    day: "土",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "PACIFIC MODE",
    genres: ["Techno", "House"],
    artistIds: ["a14"],
    gradient: "from-indigo-950/70 via-zinc-950 to-black",
  },
  {
    id: "e3",
    title: "COMPASS",
    description:
      "HOLE AND HOLLAND、Mamazu、REO MATSUMOTO、FRONTERAの4組がキュレーション。Courtney Baileyの「Jiwa Jiwa EP」リリースを祝う一夜限りの集い。",
    date: "2026.02.13",
    day: "金",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "HOLE AND HOLLAND",
    genres: ["House"],
    artistIds: [],
    gradient: "from-emerald-950/60 via-zinc-950 to-black",
  },
  {
    id: "e4",
    title: "T.R.A.N.C.E. WORLD TOUR 2026",
    description:
      "レジェンドSven Väthが60歳の誕生日と40年のキャリアを祝う特別エディションでWOMBに帰還。Sven Väthのオールナイトロングセットをフィーチャー。",
    date: "2026.02.14",
    day: "土",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "WOMB",
    genres: ["Techno", "House"],
    artistIds: ["a13"],
    gradient: "from-purple-950/80 via-zinc-950 to-black",
    featured: true,
  },
  {
    id: "e5",
    title: "RECOMBINATION",
    description:
      "異なる世代とスタイルのドラムンベースDJを新鮮な組み合わせで集めるパーティー。DJ AKi、KEiTA、TETSUJI TANAKAほか出演。1FではHard Techno特化のINFUSE_INTOを同時開催。",
    date: "2026.02.18",
    day: "水",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "WOMB",
    genres: ["Drum & Bass", "Techno"],
    artistIds: [],
    gradient: "from-cyan-950/70 via-zinc-950 to-black",
  },
  {
    id: "e6",
    title: "SESSION",
    description:
      "WOMBの長寿レジデントパーティー。2001年から続くSESSIONは、Tommy Wadaのオールナイトセットをフィーチャー。シンクロナイズドビジュアルとダイナミックなライティングによる没入体験。",
    date: "2026.02.21",
    day: "土",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "WOMB",
    genres: ["Techno"],
    artistIds: ["a16"],
    gradient: "from-zinc-800/60 via-zinc-950 to-black",
  },
  {
    id: "e7",
    title: "FORCE EPISODE 048",
    description:
      "ベルリンTresorのレジデントToxido Maskを迎え、身体・時間・意識の交差点としてのサウンドに焦点を当てたディープアンダーグラウンドテクノ。47回を重ねたパーティーの最新回。",
    date: "2026.02.22",
    day: "日",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "WOMB",
    genres: ["Techno"],
    artistIds: [],
    gradient: "from-rose-950/60 via-zinc-950 to-black",
  },
  {
    id: "e8",
    title: "KILLIAN × RESONANCE",
    description:
      "フランスからVELがMAMA TOLD YAレーベルを代表して日本初上陸。東京のDJ MARIA.やオーストラリアのAndy Garveyらが新しいトランスサウンドを披露。",
    date: "2026.02.27",
    day: "金",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "Killian / Resonance",
    genres: ["Techno"],
    artistIds: ["a6"],
    gradient: "from-fuchsia-950/60 via-zinc-950 to-black",
  },
  {
    id: "e9",
    title: "ELEVATOR 全館開放",
    description:
      "WOMBとYamarchyによる全4夜シリーズのオープニング。ソウルのNyapiクラブオーナーffanとのB2BユニットElevatorが「上下」のコンセプトをWOMBの3フロアで表現。",
    date: "2026.02.28",
    day: "土",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "WOMB",
    genres: ["Techno", "House"],
    artistIds: ["a7"],
    gradient: "from-sky-950/60 via-zinc-950 to-black",
  },
  {
    id: "e10",
    title: "LOVE INTERNATIONAL × RAINBOW DISCO CLUB",
    description:
      "Love InternationalがWOMBを一夜限り占拠。Rainbow Disco Clubが特別サポーター。UKのカルトデュオParanoid Londonが待望の日本デビュー。CHIDA、Monkey Timersほか出演。",
    date: "2026.03.06",
    day: "金",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "Love International / Rainbow Disco Club",
    genres: ["House", "Techno"],
    artistIds: ["a5"],
    gradient: "from-pink-950/60 via-zinc-950 to-black",
  },
  {
    id: "e11",
    title: "REPRISE — DJ NOBU ALL NIGHT",
    description:
      "DJ NOBUのWOMBレジデントパーティー。年に一度の特別エディションで、オープンからクローズまでオールナイトロングセット。VJにKOZEE、サウンドデザインにYORIを迎えた没入体験。",
    date: "2026.03.13",
    day: "金",
    startTime: "23:00",
    endTime: "04:30",
    venueId: "v1",
    organizerName: "WOMB",
    genres: ["Techno"],
    artistIds: ["a1", "a7"],
    gradient: "from-slate-800/70 via-zinc-950 to-black",
    featured: true,
  },
  {
    id: "e12",
    title: "GONNO × RAHA at VENT",
    description:
      "GonnoとRAHAのダブルヘッドライナー。GonnoのプログレッシブなハウスとRAHAのルーマニアンミニマルが表参道のVENTで交差する一夜。",
    date: "2026.03.14",
    day: "土",
    startTime: "23:00",
    endTime: "05:00",
    venueId: "v3",
    organizerName: "VENT",
    genres: ["House", "Minimal"],
    artistIds: ["a4", "a10"],
    gradient: "from-teal-950/60 via-zinc-950 to-black",
  },
  {
    id: "e13",
    title: "MARS89 PRESENTS: PROTEST RAVE",
    description:
      "Mars89が主催するProtest Raveの最新エディション。インダストリアルテクノとエクスペリメンタルが融合する、メッセージ性の強いアンダーグラウンドイベント。",
    date: "2026.03.20",
    day: "金",
    startTime: "23:00",
    endTime: "05:00",
    venueId: "v6",
    organizerName: "Mars89",
    genres: ["Industrial", "Techno", "Experimental"],
    artistIds: ["a8", "a11"],
    gradient: "from-red-950/70 via-zinc-950 to-black",
  },
  {
    id: "e14",
    title: "WATA IGARASHI — AGARTHA TOUR TOKYO",
    description:
      "Kompaktからのデビューアルバム『Agartha』を引っ提げたワールドツアーの東京公演。ユーフォリックかつサイケデリックなテクノの世界へ。",
    date: "2026.03.21",
    day: "土",
    startTime: "23:00",
    endTime: "05:00",
    venueId: "v7",
    organizerName: "CIRCUS Tokyo",
    genres: ["Techno", "Deep House"],
    artistIds: ["a9", "a2"],
    gradient: "from-violet-950/70 via-zinc-950 to-black",
  },
  {
    id: "e15",
    title: "DJ KRUSH — ZEN SESSION",
    description:
      "トリップホップのレジェンドDJ Krushによるスペシャルセッション。自然の音を取り入れたアトモスフェリックなサウンドスケープを、LIQUIDROOMの空間で体験する。",
    date: "2026.03.28",
    day: "土",
    startTime: "19:00",
    endTime: "23:00",
    venueId: "v4",
    organizerName: "LIQUIDROOM",
    genres: ["Hip Hop", "Ambient"],
    artistIds: ["a3", "a12"],
    gradient: "from-stone-800/70 via-zinc-950 to-black",
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
