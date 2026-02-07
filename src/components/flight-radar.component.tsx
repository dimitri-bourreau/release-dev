const missions = [
  { id: 'CIDJ', x: 10, y: 20, year: '2020' },
  { id: 'ALGOAN', x: 25, y: 35, year: '2020' },
  { id: 'SCALITY', x: 18, y: 55, year: '2021' },
  { id: 'SIGILIUM', x: 35, y: 70, year: '2021' },
  { id: 'ARTELIA', x: 55, y: 60, year: '2022' },
  { id: 'EU4UA', x: 70, y: 45, year: '2022' },
  { id: 'TUDIGO', x: 82, y: 30, year: '2023' },
  { id: 'VISEO', x: 90, y: 15, year: '2025' },
]

export function FlightRadar() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute right-0 left-0 h-px bg-border/50"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-border/50"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Radar circles - centered with inset-0 + flex */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[80, 160, 260, 380, 520].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-border"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Radar sweep container - positioned at exact center */}
      <div className="radar-sweep-container absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Sweep trail - circular arc behind the line */}
          <div
            className="absolute rounded-full"
            style={{
              width: '520px',
              height: '520px',
              bottom: '-260px',
              left: '-260px',
              background: 'conic-gradient(from -50deg at 50% 50%, transparent 0deg, rgba(37, 99, 235, 0.08) 35deg, transparent 50deg)',
            }}
          />
          {/* Sweep line - starts at center, extends upward */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: '2px',
              height: '260px',
              background: 'linear-gradient(to top, var(--color-accent), transparent)',
            }}
          />
        </div>
      </div>

      {/* Flight paths - individual dashed lines between consecutive missions */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        {missions.slice(0, -1).map((m, i) => {
          const next = missions[i + 1]
          return (
            <line
              key={m.id}
              x1={`${m.x}%`}
              y1={`${m.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              stroke="var(--color-border)"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
          )
        })}
      </svg>

      {/* Mission blips */}
      {missions.map((m, i) => (
        <div
          key={m.id}
          className="group absolute"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
        >
          {/* Ping animation - absolutely centered on this point */}
          <div
            className="blip-ping absolute rounded-full bg-accent"
            style={{
              width: '40px',
              height: '40px',
              left: '-20px',
              top: '-20px',
              animationDelay: `${i * 0.3}s`,
            }}
          />
          {/* Core dot - centered on the point */}
          <div
            className="absolute bg-accent rounded-full shadow-[0_0_10px_var(--color-accent)]"
            style={{
              width: '10px',
              height: '10px',
              left: '-5px',
              top: '-5px',
            }}
          />
          {/* Label */}
          <div className="absolute left-4 -top-1 font-mono text-[10px] whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-accent font-bold">{m.id}</span>
            <span className="text-muted ml-2">{m.year}</span>
          </div>
        </div>
      ))}

      {/* Corner coordinates */}
      <div className="absolute top-4 left-4 font-mono text-[11px] text-muted">
        <div>LAT 45.1885°N</div>
        <div>LON 5.7245°E</div>
        <div className="mt-1 text-accent font-bold">GRENOBLE</div>
      </div>
      <div className="absolute top-4 right-4 text-right font-mono text-[11px] text-muted">
        <div>MISSIONS: 42</div>
        <div>STATUT: <span className="text-accent font-bold">DISPONIBLE</span></div>
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-muted">
        <div>CAREER.RADAR v2.0</div>
        <div className="text-accent">2019 → PRESENT</div>
      </div>
      <div className="absolute right-4 bottom-4 text-right font-mono text-[10px] text-muted">
        <div>UTC+1</div>
      </div>

      {/* Center crosshair */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none">
        <div className="absolute w-px h-3 bg-muted -translate-x-1/2 -translate-y-full" />
        <div className="absolute w-px h-3 bg-muted -translate-x-1/2" />
        <div className="absolute h-px w-3 bg-muted -translate-y-1/2 -translate-x-full" />
        <div className="absolute h-px w-3 bg-muted -translate-y-1/2" />
      </div>
    </div>
  )
}
