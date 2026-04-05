export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#1a1f26]"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(168deg,
              #161a20 0%,
              #1a1f26 30%,
              #232b35 65%,
              #1e242d 100%
            )
          `,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_38%,rgba(165,201,225,0.14)_0%,transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_85%_15%,rgba(140,166,189,0.1)_0%,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_50%_at_50%_100%,rgba(0,0,0,0.35)_0%,transparent_50%)]" />
    </div>
  )
}
