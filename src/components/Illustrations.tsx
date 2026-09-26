// Flat illustrations from the GymBuddy pitch deck, redrawn as inline SVG so they
// stay sharp at any size and share the site palette.

const C = {
  ink: '#0A0A10',
  card: '#16151F',
  line: '#2B2A3A',
  primary: '#8B84F0',
  violet: '#6E66FF',
  pink: '#E07BB5',
  coral: '#E8776E',
  teal: '#4FC3B5',
  amber: '#F0B35B',
  green: '#5FD08F',
  grey: '#A09DAE',
  white: '#F6F5FA',
};

/* ---------- small shared pieces ---------- */

export function Sparkle({ x, y, s, color = C.white }: { x: number; y: number; s: number; color?: string }) {
  const k = s * 0.14;
  return (
    <path
      transform={`translate(${x} ${y})`}
      d={`M0 ${-s} C${k} ${-k} ${k} ${-k} ${s} 0 C${k} ${k} ${k} ${k} 0 ${s} C${-k} ${k} ${-k} ${k} ${-s} 0 C${-k} ${-k} ${-k} ${-k} 0 ${-s}Z`}
      fill={color}
    />
  );
}

function LockGlyph({ x, y, scale = 1, color = C.primary }: { x: number; y: number; scale?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-4.5 -1 v-3.5 a4.5 4.5 0 0 1 9 0 v3.5" fill="none" stroke={color} strokeWidth={2.4} />
      <rect x={-7.5} y={-1.5} width={15} height={11} rx={2.8} fill={color} />
    </g>
  );
}

function LockBadge({ x, y, r = 17 }: { x: number; y: number; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={C.ink} stroke={C.primary} strokeWidth={3} />
      <LockGlyph x={x} y={y - 1} scale={r / 17} />
    </g>
  );
}

function Heart({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s / 10})`}
      d="M0 8 C-9 1.5 -10 -5 -6 -7.5 C-3.5 -9 -1 -8 0 -5.5 C1 -8 3.5 -9 6 -7.5 C10 -5 9 1.5 0 8Z"
      fill={color}
    />
  );
}

function Dumbbell({ x, y, w, plate = C.amber, bar = C.grey, scale = 1 }: { x: number; y: number; w: number; plate?: string; bar?: string; scale?: number }) {
  const h = 44 * scale;
  const pw = 18 * scale;
  const cw = 12 * scale;
  const ch = 26 * scale;
  return (
    <g>
      <rect x={x + cw} y={y - 4 * scale} width={w - cw * 2} height={8 * scale} rx={3 * scale} fill={bar} />
      <rect x={x} y={y - ch / 2} width={cw + 4 * scale} height={ch} rx={5 * scale} fill={plate} />
      <rect x={x + cw - 2 * scale} y={y - h / 2} width={pw} height={h} rx={6 * scale} fill={plate} />
      <rect x={x + w - cw - pw + 2 * scale} y={y - h / 2} width={pw} height={h} rx={6 * scale} fill={plate} />
      <rect x={x + w - cw - 4 * scale} y={y - ch / 2} width={cw + 4 * scale} height={ch} rx={5 * scale} fill={plate} />
    </g>
  );
}

type Glyph = 'insta' | 'play' | 'chat' | 'game';

function AppTile({ x, y, rot, color, glyph, badge = true, size = 76 }: { x: number; y: number; rot: number; color: string; glyph: Glyph; badge?: boolean; size?: number }) {
  const k = size / 76;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot} ${size / 2} ${size / 2})`}>
      <rect width={size} height={size} rx={20 * k} fill={color} />
      <g transform={`scale(${k})`}>
        {glyph === 'insta' && (
          <>
            <rect x={20} y={20} width={36} height={36} rx={11} fill="none" stroke="#fff" strokeWidth={5} />
            <circle cx={38} cy={38} r={8.5} fill="none" stroke="#fff" strokeWidth={5} />
            <circle cx={48.5} cy={27.5} r={2.8} fill="#fff" />
          </>
        )}
        {glyph === 'play' && <path d="M29 21 L57 38 L29 55 Z" fill="#fff" strokeLinejoin="round" />}
        {glyph === 'chat' && (
          <>
            <rect x={16} y={20} width={44} height={30} rx={9} fill="#fff" />
            <path d="M25 47 L21 60 L37 49 Z" fill="#fff" />
          </>
        )}
        {glyph === 'game' && (
          <>
            <rect x={14} y={25} width={48} height={27} rx={13.5} fill="#fff" />
            <rect x={23} y={36.5} width={13} height={4} rx={2} fill={color} />
            <rect x={27.5} y={32} width={4} height={13} rx={2} fill={color} />
            <circle cx={47} cy={34} r={3.4} fill={color} />
            <circle cx={53} cy={41} r={3.4} fill={color} />
          </>
        )}
      </g>
      {badge && <LockBadge x={size - 6 * k} y={6 * k} r={17 * k} />}
    </g>
  );
}

/* ---------- hero: phone with a big lock, apps orbiting ---------- */

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 480" className="illo" role="img" aria-label="A phone locked by GymBuddy, with Instagram, YouTube, chat and games apps locked around it">
      <circle cx={240} cy={236} r={226} fill="none" stroke="#34334A" strokeWidth={2} strokeDasharray="2 9" strokeLinecap="round" />
      <circle cx={240} cy={236} r={206} fill={C.card} />

      {/* phone */}
      <rect x={168} y={86} width={144} height={258} rx={28} fill="#1B1A26" stroke={C.primary} strokeWidth={5} />
      <rect x={214} y={102} width={52} height={10} rx={5} fill={C.ink} />
      <rect x={210} y={138} width={60} height={8} rx={4} fill={C.line} />
      <path d="M208 204 v-22 a32 32 0 0 1 64 0 v22" fill="none" stroke={C.primary} strokeWidth={15} />
      <rect x={190} y={198} width={100} height={80} rx={16} fill={C.primary} />
      <circle cx={240} cy={230} r={9} fill={C.ink} />
      <rect x={236} y={232} width={8} height={22} rx={4} fill={C.ink} />
      <rect x={192} y={298} width={96} height={24} rx={12} fill={C.green} />

      <Dumbbell x={146} y={372} w={188} />

      <AppTile x={62} y={96} rot={-10} color={C.pink} glyph="insta" />
      <AppTile x={338} y={80} rot={10} color={C.coral} glyph="play" />
      <AppTile x={58} y={292} rot={-8} color={C.teal} glyph="chat" />
      <AppTile x={342} y={300} rot={8} color={C.violet} glyph="game" />

      <Sparkle x={240} y={30} s={12} color={C.amber} />
      <Sparkle x={52} y={222} s={13} color={C.amber} />
      <Sparkle x={448} y={236} s={10} />
      <Sparkle x={410} y={438} s={14} color={C.violet} />
      <Sparkle x={104} y={430} s={8} />
    </svg>
  );
}

/* ---------- the problem: a phone on the couch ---------- */

export function CouchIllustration() {
  return (
    <svg viewBox="0 0 460 460" className="illo" role="img" aria-label="A phone playing video on the couch, with a dumbbell forgotten on the floor">
      <circle cx={230} cy={230} r={228} fill="#7A72E6" />
      <g transform="translate(268 160) rotate(-10)">
        <rect x={-56} y={-96} width={112} height={176} rx={20} fill={C.ink} />
        <rect x={-46} y={-84} width={92} height={152} rx={12} fill={C.pink} />
        <path d="M-12 -30 L20 -8 L-12 14 Z" fill="#fff" />
        <rect x={-30} y={40} width={60} height={6} rx={3} fill="#F4C6DF" />
      </g>
      <rect x={96} y={238} width={268} height={76} rx={34} fill="#2A2650" />
      <rect x={96} y={284} width={268} height={76} rx={8} fill="#1B1A2E" />
      <line x1={230} y1={296} x2={230} y2={344} stroke="#2A2650" strokeWidth={3} strokeLinecap="round" />
      <rect x={46} y={266} width={80} height={120} rx={36} fill="#1B1A2E" />
      <rect x={334} y={266} width={80} height={120} rx={36} fill="#1B1A2E" />
      <rect x={100} y={384} width={14} height={20} rx={4} fill="#1B1A2E" />
      <rect x={346} y={384} width={14} height={20} rx={4} fill="#1B1A2E" />

      <Dumbbell x={132} y={428} w={128} plate="#1B1A2E" bar="#1B1A2E" scale={0.85} />

      <Heart x={140} y={132} s={12} color={C.amber} />
      <Heart x={360} y={92} s={15} color="#fff" />
      <Heart x={374} y={196} s={10} color={C.coral} />
      <text x={300} y={440} fontSize={30} fontWeight={900} fill="#1B1A2E" fontFamily="inherit">z</text>
      <text x={322} y={418} fontSize={22} fontWeight={900} fill="#1B1A2E" fontFamily="inherit">z</text>
    </svg>
  );
}

/* ---------- locked apps in chains (the shield card) ---------- */

export function ChainedAppsIllustration() {
  const link = (cx: number, cy: number, rot: number) => (
    <ellipse cx={cx} cy={cy} rx={15} ry={7} fill="none" stroke={C.grey} strokeWidth={4} transform={`rotate(${rot} ${cx} ${cy})`} />
  );
  return (
    <svg viewBox="0 0 280 150" className="illo" role="img" aria-label="App icons chained together behind a padlock">
      <rect x={54} y={30} width={74} height={74} rx={18} fill={C.pink} transform="rotate(-8 91 67)" />
      <rect x={152} y={32} width={74} height={74} rx={18} fill={C.violet} transform="rotate(8 189 69)" />
      <rect x={102} y={8} width={76} height={76} rx={18} fill={C.coral} />
      <path d="M122 88 v-22 a18 18 0 0 1 36 0 v22" fill="none" stroke="#fff" strokeWidth={9} />
      {link(40, 118, -6)}
      {link(70, 112, -10)}
      {link(210, 110, -8)}
      {link(240, 104, -14)}
      <rect x={110} y={82} width={60} height={52} rx={11} fill={C.primary} stroke={C.ink} strokeWidth={4} />
      <circle cx={140} cy={103} r={6} fill={C.ink} />
      <rect x={137} y={104} width={6} height={15} rx={3} fill={C.ink} />
      <Sparkle x={250} y={26} s={10} color={C.amber} />
    </svg>
  );
}

/* ---------- how it works: one small picture per step ---------- */

export function AppGridIllustration() {
  const colors = [C.pink, C.coral, C.violet, C.teal, C.amber, C.green];
  return (
    <svg viewBox="0 0 160 96" className="illo" aria-hidden>
      {colors.map((c, i) => (
        <rect key={c} x={16 + (i % 3) * 42} y={8 + Math.floor(i / 3) * 42} width={34} height={34} rx={9} fill={c} />
      ))}
      <LockBadge x={134} y={72} r={17} />
    </svg>
  );
}

export function CalendarIllustration() {
  const cells = [
    [0, 0, true], [1, 0, false], [2, 0, true], [3, 0, false],
    [0, 1, true], [1, 1, false], [2, 1, false],
  ] as const;
  return (
    <svg viewBox="0 0 160 96" className="illo" aria-hidden>
      <rect x={8} y={10} width={144} height={82} rx={11} fill={C.line} />
      <path d="M8 21 a11 11 0 0 1 11 -11 h122 a11 11 0 0 1 11 11 v11 h-144 Z" fill={C.primary} />
      <circle cx={38} cy={10} r={4} fill="#fff" />
      <circle cx={122} cy={10} r={4} fill="#fff" />
      {cells.map(([cx, cy, on]) => {
        const x = 34 + cx * 30;
        const y = 50 + cy * 26;
        return on ? (
          <g key={`${cx}-${cy}`}>
            <circle cx={x} cy={y} r={10} fill={C.green} />
            <path d={`M${x - 4.5} ${y} l3 3 l6 -6.5`} fill="none" stroke={C.ink} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ) : (
          <circle key={`${cx}-${cy}`} cx={x} cy={y} r={9} fill="none" stroke="#5A586B" strokeWidth={2} />
        );
      })}
    </svg>
  );
}

export function PinCameraIllustration() {
  return (
    <svg viewBox="0 0 160 96" className="illo" aria-hidden>
      <path d="M48 92 C48 92 20 60 20 40 a28 28 0 0 1 56 0 C76 60 48 92 48 92Z" fill={C.green} />
      <circle cx={48} cy={40} r={10} fill={C.card} />
      <rect x={100} y={34} width={22} height={12} rx={4} fill={C.amber} />
      <rect x={84} y={42} width={70} height={50} rx={11} fill={C.amber} />
      <circle cx={117} cy={67} r={14} fill={C.card} />
      <circle cx={117} cy={67} r={5.5} fill="#fff" />
      <circle cx={143} cy={52} r={3.5} fill={C.card} />
      <Sparkle x={86} y={18} s={8} />
    </svg>
  );
}

/* ---------- a gym day: the sun's arc ---------- */

export function SunArcIllustration() {
  return (
    <svg viewBox="0 0 320 120" className="illo" aria-hidden>
      <path d="M8 116 Q160 -44 312 116" fill="none" stroke="#34334A" strokeWidth={2} strokeDasharray="3 7" strokeLinecap="round" />
      <g stroke={C.amber} strokeWidth={3} strokeLinecap="round">
        <line x1={52} y1={52} x2={52} y2={44} />
        <line x1={36} y1={60} x2={31} y2={55} />
        <line x1={68} y1={60} x2={73} y2={55} />
        <line x1={30} y1={76} x2={24} y2={76} />
      </g>
      <circle cx={52} cy={78} r={15} fill={C.amber} />
      <Dumbbell x={132} y={30} w={58} plate={C.green} bar={C.green} scale={0.5} />
      <Sparkle x={104} y={46} s={6} />
      <circle cx={274} cy={78} r={15} fill={C.primary} />
      <circle cx={282} cy={72} r={13} fill="var(--bg)" />
    </svg>
  );
}

/* ---------- check-in: the 150 m geofence ---------- */

export function GeofenceIllustration() {
  return (
    <svg viewBox="0 0 600 230" className="illo" role="img" aria-label="A map with a 150 metre circle around the gym and your location pin inside it">
      <defs>
        <clipPath id="geofence-clip"><rect width={600} height={230} rx={22} /></clipPath>
      </defs>
      <g clipPath="url(#geofence-clip)">
        <rect width={600} height={230} fill={C.card} />
        <rect y={52} width={600} height={18} fill="#232233" />
        <rect y={166} width={600} height={18} fill="#232233" />
        <rect x={136} width={18} height={230} fill="#232233" />
        <rect x={452} width={18} height={230} fill="#232233" />
        <line x1={330} y1={250} x2={620} y2={20} stroke="#232233" strokeWidth={16} />
        <rect x={26} y={86} width={94} height={66} rx={12} fill="#1C3A2B" />
        <circle cx={52} cy={110} r={11} fill="#2A5A40" />
        <circle cx={92} cy={104} r={9} fill="#2A5A40" />
        <circle cx={84} cy={132} r={12} fill="#2A5A40" />
        <rect x={486} y={86} width={90} height={66} rx={10} fill="#232233" />
        <circle cx={300} cy={118} r={98} fill="rgba(139,132,240,0.12)" stroke={C.primary} strokeWidth={2.5} strokeDasharray="7 7" />
        <path d="M268 112 L300 82 L332 112 Z" fill={C.amber} strokeLinejoin="round" />
        <rect x={274} y={106} width={52} height={40} rx={6} fill={C.amber} />
        <Dumbbell x={283} y={127} w={34} plate={C.ink} bar={C.ink} scale={0.34} />
        <path d="M304 132 L360 162" stroke={C.green} strokeWidth={2.5} strokeDasharray="3 6" strokeLinecap="round" />
        <circle cx={372} cy={190} r={18} fill="rgba(95,208,143,0.22)" />
        <path d="M372 190 C372 190 354 170 354 158 a18 18 0 0 1 36 0 C390 170 372 190 372 190Z" fill={C.green} />
        <circle cx={372} cy={158} r={6} fill={C.ink} />
      </g>
    </svg>
  );
}

/* ---------- early access: confetti, and a dumbbell with a streak flame ---------- */

function FlamePaths() {
  return (
    <>
      <path d="M30 2 C34 16 52 28 52 48 A22 22 0 0 1 8 48 C8 36 16 29 21 21 C23 30 27 34 30 34 C27 22 26 12 30 2Z" fill={C.amber} />
      <path d="M30 38 C34 44 39 48 39 55 A9 9 0 0 1 21 55 C21 48 27 44 30 38Z" fill={C.coral} />
    </>
  );
}

export function Flame({ size = 20 }: { size?: number }) {
  return (
    <svg width={size * (60 / 72)} height={size} viewBox="0 0 60 72" aria-hidden className="flame">
      <FlamePaths />
    </svg>
  );
}

export function Confetti() {
  const bits: { x: number; y: number; kind: 'dot' | 'bar' | 'wave'; color: string; rot?: number }[] = [
    { x: 30, y: 60, kind: 'bar', color: C.amber, rot: 28 },
    { x: 92, y: 28, kind: 'dot', color: C.pink },
    { x: 150, y: 70, kind: 'wave', color: C.green },
    { x: 208, y: 22, kind: 'bar', color: C.primary, rot: -30 },
    { x: 330, y: 44, kind: 'bar', color: C.teal, rot: 40 },
    { x: 296, y: 30, kind: 'dot', color: C.amber },
    { x: 392, y: 40, kind: 'dot', color: C.green },
    { x: 420, y: 78, kind: 'wave', color: C.coral },
    { x: 524, y: 28, kind: 'bar', color: C.pink, rot: -20 },
    { x: 570, y: 84, kind: 'dot', color: C.primary },
  ];
  return (
    <svg viewBox="0 0 600 120" className="illo confetti" aria-hidden preserveAspectRatio="xMidYMid meet">
      {bits.map((b, i) => {
        if (b.kind === 'dot') return <circle key={i} cx={b.x} cy={b.y} r={5} fill={b.color} />;
        if (b.kind === 'bar') return <rect key={i} x={b.x - 8} y={b.y - 3.5} width={16} height={7} rx={3.5} fill={b.color} transform={`rotate(${b.rot} ${b.x} ${b.y})`} />;
        return (
          <path key={i} d={`M${b.x - 22} ${b.y} q5.5 -12 11 0 t11 0 t11 0 t11 0`} fill="none" stroke={b.color} strokeWidth={3.5} strokeLinecap="round" />
        );
      })}
      <Sparkle x={262} y={62} s={15} />
      <Sparkle x={484} y={60} s={15} color={C.amber} />
    </svg>
  );
}

export function DumbbellFlameIllustration() {
  return (
    <svg viewBox="0 0 240 90" className="illo" aria-hidden>
      <Dumbbell x={6} y={50} w={176} plate={C.primary} bar={C.grey} />
      <g transform="translate(186 12) scale(0.9)">
        <FlamePaths />
      </g>
      <Sparkle x={232} y={14} s={7} />
    </svg>
  );
}
