'use client'

export const BackgroundDots = () => {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 animate-gradient-shift"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 50% 0%, rgba(255, 245, 237, 0.3) 0%, rgba(255, 245, 237, 0.1) 30%, transparent 60%),
            radial-gradient(ellipse 100% 80% at 20% 100%, rgba(246, 230, 207, 0.25) 0%, rgba(246, 230, 207, 0.08) 35%, transparent 65%),
            radial-gradient(ellipse 90% 100% at 80% 100%, rgba(240, 217, 190, 0.2) 0%, rgba(240, 217, 190, 0.06) 40%, transparent 70%),
            linear-gradient(180deg, #faf5ed 0%, #f6e6cf 50%, #f0d9be 100%)
          `,
        }}
      />
      
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-15 animate-float-1"
        style={{
          background: `radial-gradient(ellipse 180% 160% at 50% 30%, rgba(255, 245, 237, 0.25) 0%, rgba(255, 245, 237, 0.1) 25%, rgba(255, 245, 237, 0.05) 50%, transparent 75%)`,
        }}
      />
      
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-15 animate-float-2"
        style={{
          background: `radial-gradient(ellipse 160% 180% at 70% 70%, rgba(246, 230, 207, 0.2) 0%, rgba(246, 230, 207, 0.08) 30%, rgba(246, 230, 207, 0.04) 55%, transparent 80%)`,
        }}
      />
      
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-70 mix-blend-multiply animate-waves"
        viewBox="0 0 1000 250"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0" x2="1">
            <stop offset="0" stopColor="#ffe9ce" stopOpacity=".12" />
            <stop offset="1" stopColor="#ffe9ce" stopOpacity=".04" />
          </linearGradient>
          <path
            id="wave-path"
            d="M-50,180 C150,120 350,240 550,150 S950,60 1100,140"
          />
        </defs>

        <g
          fill="none"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <use href="#wave-path" className="animate-wave-1" />
          <use href="#wave-path" transform="translate(0,-20) scale(1.02,1)" className="animate-wave-2" />
          <use href="#wave-path" transform="translate(0,-40) scale(1.04,1)" className="animate-wave-3" />
          <use href="#wave-path" transform="translate(0,20) scale(1.01,1)" className="animate-wave-4" />
          <use href="#wave-path" transform="translate(0,40) scale(1.03,1)" className="animate-wave-5" />
        </g>

        <g fill="none" stroke="#503009" strokeOpacity=".06" strokeWidth="1.5">
          <path d="M-20,250 C160,210 320,190 520,210 S900,250 1040,230" className="animate-wave-6" />
          <path d="M-20,10  C140,30  360,10  560,30  S900,70  1040,40" className="animate-wave-7" />
          <path d="M-20,120 C120,90  340,140 520,100 S900,80  1040,110" className="animate-wave-8" />
        </g>
      </svg>
    </>
  )
}

