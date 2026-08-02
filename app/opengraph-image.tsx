import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'FASTEQ — Global Engineering & AI Architecture Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#07191A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px 90px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(200,125,79,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(200,125,79,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Copper glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(200,125,79,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Teal glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -100,
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(13,46,47,0.8) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Header: Logo + badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative' }}>
          {/* Logo mark */}
          <div
            style={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, #C87D4F, #E08E5A)',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#fff', fontSize: 24, fontWeight: 900, letterSpacing: -1 }}>F</span>
          </div>
          <div>
            <div style={{ color: '#F8F6F3', fontSize: 28, fontWeight: 900, letterSpacing: 6 }}>
              FASTEQ
            </div>
            <div style={{ color: '#C87D4F', fontSize: 11, fontWeight: 700, letterSpacing: 4, marginTop: 2 }}>
              TECH & DESIGN
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 24,
              background: 'rgba(200,125,79,0.12)',
              border: '1px solid rgba(200,125,79,0.3)',
              borderRadius: 100,
              padding: '8px 20px',
              width: 'fit-content',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#C87D4F',
              }}
            />
            <span style={{ color: '#C87D4F', fontSize: 11, fontWeight: 700, letterSpacing: 3 }}>
              GLOBAL ENGINEERING STUDIO
            </span>
          </div>

          <div
            style={{
              color: '#F8F6F3',
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -2,
              maxWidth: 800,
            }}
          >
            Engineering the{' '}
            <span style={{ color: '#C87D4F', fontStyle: 'italic' }}>
              Unimaginable.
            </span>
          </div>

          <div
            style={{
              color: 'rgba(248,246,243,0.5)',
              fontSize: 22,
              fontWeight: 400,
              marginTop: 28,
              maxWidth: 650,
              lineHeight: 1.5,
            }}
          >
            High-fidelity web ecosystems, custom AI agents, and luxury digital products for global enterprises.
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            position: 'relative',
            borderTop: '1px solid rgba(248,246,243,0.08)',
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex', gap: 32 }}>
            {['50+ Projects', '25+ Clients', '99.9% Uptime', 'AI-Powered'].map((stat) => (
              <div key={stat} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{ width: 4, height: 4, borderRadius: '50%', background: '#C87D4F' }}
                />
                <span style={{ color: 'rgba(248,246,243,0.5)', fontSize: 13, fontWeight: 600 }}>
                  {stat}
                </span>
              </div>
            ))}
          </div>
          <div style={{ color: 'rgba(248,246,243,0.25)', fontSize: 13 }}>fasteq.online</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
