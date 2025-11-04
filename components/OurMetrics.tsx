"use client"
import Image from 'next/image'

const LEFT_IMG =
  '/Landing%20Page%20Token%20Metrics_img/ChatGPT%20Image%2026%20jun%202025%2C%2013_50_26%204.png'

const CARDS = [
  {
    title: '🔗 Link Insertion',
    points: [
      'Page impressions/mo (when ranked #3–#10): ~150k',
      'Total clicks/mo: 32.4K',
      'Total impressions/mo: 9.62M',
      'Average CTR/mo: 0.3%',
      'Average position/mo: 7.3',
    ],
    note: 'Time to live: 3–5 biz days',
  },
  {
    title: '👑 Guest Post',
    points: [
      'Weeks to page-1 (when linked from a ranking hub): 1wk',
      'First-90d pageviews: ~150k',
      'Avg time-on-page: 53s',
      'Total clicks/mo: 32.4K',
      'Total impressions/mo: 9.62M',
      'Average CTR/mo: 0.3%',
      'Average position/mo: 7.3',
    ],
    note: 'Time to live: 3–5 biz days',
  },
  {
    title: '📰 Newsletter',
    points: [
      'Feature page views/mo: 64k views/month',
      'Active subscribers: 157,478',
      'Open rate: 40.73%',
      'In-app CTA CTR: 0.28%',
    ],
    note: 'Time to live: 3–5 biz days',
  },
  {
    title: '📹 YouTube',
    points: [
      'Video Feature (60–120s): 5–10k views in 30 days',
      'Link CTR 4% → 50–200 clicks',
      'Dedicated Video (5–10 min): ~150k views / 30d',
      'CTR 4.0% → 6000 clicks',
      'Interview: 8k–29k views',
      'CTR 6.5–7.8%',
    ],
    note: 'Time to live: 3–5 biz days',
  },
  {
    title: '📝 Research',
    points: [
      'Feature page views/mo: 64k views/month',
      'Active subscribers: 157,478',
      'Open rate: 40.73%',
      'In-app CTA CTR: 0.28%',
    ],
    note: 'Time to live: 3–5 biz days',
  },
  {
    title: '📱 Social Media',
    points: [
      'Twitter/X: 160K Followers',
      'Average post engagement: 2.5%',
      'Telegram: 10K Members',
      'Telegram daily active users: 4.2K',
      'Post CTR average: 3.8%',
    ],
    note: 'Time to live: 24 hours for Telegram pin',
  },
]

export default function OurMetrics() {
  return (
    <section className="relative bg-[#0D1116] px-6 py-20" data-node-id="5658:18163" id="our-metrics">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 md:flex-row md:items-start md:gap-12">
        {/* Left Column: Heading + Robot */}
        <div className="mx-auto w-full max-w-[512px] md:mx-0">
          <h2 className="mb-6 whitespace-nowrap text-[64px] md:text-[72px] font-medium leading-none text-white">Our Metrics</h2>

          <div className="relative mt-4 h-[340px] w-full max-w-[394px] overflow-hidden rounded-md md:mt-16 md:h-[578px]">
            <Image
              src={LEFT_IMG}
              alt="Token Metrics media preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column: Cards */}
        <div className="w-full max-w-[720px]" style={{ perspective: '1000px' }}>

          <div className="flex flex-col gap-3">
            {CARDS.map((card, idx) => {
              // Map card titles to specific IDs
              const getCardId = (title: string, index: number) => {
                if (title.includes('Link Insertion')) return 'metrics-card-link-insertion'
                if (title.includes('Guest Post')) return 'metrics-card-guest-post'
                if (title.includes('YouTube')) return 'metrics-card-youtube'
                if (title.includes('Newsletter')) return 'metrics-card-newsletter'
                if (title.includes('Research')) return 'metrics-card-research'
                if (title.includes('Social Media')) return 'metrics-card-social'
                return `metrics-card-${index}`
              }

              return (
                <div
                  key={card.title}
                  id={getCardId(card.title, idx)}
                  className="card3d relative rounded-lg border border-[rgba(255,246,246,0.1)] bg-[rgba(255,255,255,0.05)] p-5 text-white transition-[transform,box-shadow,border-color] duration-300 will-change-transform [transform-style:preserve-3d] hover:border-[rgba(255,214,10,0.3)]"
                  onMouseMove={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    const rect = el.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    const midX = rect.width / 2
                    const midY = rect.height / 2
                    const rx = ((y - midY) / midY) * -6
                    const ry = ((x - midX) / midX) * 6
                    el.style.setProperty('--rx', `${rx}deg`)
                    el.style.setProperty('--ry', `${ry}deg`)
                    el.style.setProperty('--px', `${x}px`)
                    el.style.setProperty('--py', `${y}px`)
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.setProperty('--rx', '0deg')
                    el.style.setProperty('--ry', '0deg')
                    el.style.setProperty('--px', '50%')
                    el.style.setProperty('--py', '50%')
                  }}
                  onMouseDown={(e) => (e.currentTarget as HTMLDivElement).style.setProperty('--tz', '28px')}
                  onMouseUp={(e) => (e.currentTarget as HTMLDivElement).style.setProperty('--tz', '12px')}
                  style={{
                    // @ts-ignore custom props
                    ['--rx' as any]: '0deg',
                    ['--ry' as any]: '0deg',
                    ['--tz' as any]: '12px',
                    ['--px' as any]: '50%',
                    ['--py' as any]: '50%',
                  }}
                >
                {/* cursor-follow glare */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-200"
                  style={{ background: 'radial-gradient(420px circle at var(--px) var(--py), rgba(255,255,255,0.12), transparent 45%)' }}
                />
                <p className="relative z-[1] mb-2 text-[16px] font-semibold">{card.title}</p>
                <ul className="mb-2 list-disc space-y-[2px] pl-5 text-[14px] leading-snug marker:text-white">
                  {card.points.map((p, i) => (
                    <li key={i} className="relative z-[1]">
                      <span className="[transform:translateZ(6px)]">{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="relative z-[1] mt-1 text-[14px] italic">{card.note}</p>
              </div>
            )})}
          </div>
        </div>
      </div>
      <style jsx>{`
        .card3d { transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateZ(0); box-shadow: 0 10px 24px rgba(0,0,0,0.25); }
        .card3d:not(.auto-tilt):hover { transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry)) translateZ(var(--tz)); box-shadow: 0 24px 60px rgba(0,0,0,0.35), 0 0 24px rgba(255,214,10,0.12) inset; }
        /* highlight used when jumping from View Metrics */
        .metrics-highlight {
          box-shadow: 0 0 24px rgba(255,214,10,0.15), 0 30px 80px rgba(0,0,0,0.45);
          border-color: rgba(255,214,10,0.3);
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* auto-tilt specific styling */
        .auto-tilt {
          cursor: default !important;
          pointer-events: none !important;
        }

        .auto-tilt.metrics-highlight {
          box-shadow: 0 0 30px rgba(255,214,10,0.2), 0 35px 70px rgba(0,0,0,0.4);
          border-color: rgba(255,214,10,0.3);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }

        /* fallback highlight animation for non-runway effects */
        @keyframes highlightPulse {
          0% { box-shadow: 0 0 0 0 rgba(255,214,10,0.42), 0 24px 60px rgba(0,0,0,0.35); transform: translateY(-8px) scale(1.02); }
          45% { box-shadow: 0 0 0 6px rgba(255,214,10,0.18), 0 40px 80px rgba(0,0,0,0.45); transform: translateY(0) scale(1); }
          100% { box-shadow: 0 10px 24px rgba(0,0,0,0.25); transform: none; }
        }
        @media (prefers-reduced-motion: reduce) { .card3d, .card3d:hover { transform: none !important; } }
      `}</style>
    </section>
  )
}
