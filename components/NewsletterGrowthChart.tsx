'use client'
import React from 'react'
import Image from 'next/image'

const GRID_LINE_SRC = '/Landing%20Page%20Token%20Metrics_icon/Vector%20grid.svg'
const LINE_PATH_SRC = '/Landing%20Page%20Token%20Metrics_icon/Vector%206.svg'
const STAR_SRC = '/Landing%20Page%20Token%20Metrics_icon/Star%201.svg'

// Percent-based positions to avoid pixel-rounding/clipping issues
const GRID_LINES = [
  { label: '200000', top: 2.4 },
  { label: '150000', top: 24.1 },
  { label: '100000', top: 45.8 },
  { label: '50000', top: 67.5 },
  { label: '0', top: 89.2 },
]

const X_AXIS_LABELS = [
  { label: 'Q1 2024', left: 12 },
  { label: 'Q2 2024', left: 33.7 },
  { label: 'Q3 2024', left: 56.1 },
  { label: 'Q4 2024 - Present', left: 78.5 },
]

const STAR_POSITIONS = [
  { left: 15.0, top: 46, delay: '0s' },
  { left: 34, top: 43, delay: '0.15s' },
  { left: 54, top: 36, delay: '0.3s' },
  { left: 86, top: 19, delay: '0.45s' },
]

const LINE_FRAME = { left: 16.7, top: 24, width: 72 }

export default function NewsletterGrowthChart() {
  return (
    <section className="relative py-16" data-node-id="5586:20391" id="newsletter-growth-chart">
      <div className="mx-auto w-full max-w-[800px] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[48px] font-medium text-white whitespace-nowrap">
            <span className="text-[#FFD60A]">TM Newsletter</span> readers by the numbers
          </h2>
          <div className="mx-auto mt-6 text-[20px] font-medium text-white whitespace-nowrap">
            <p className="mb-0">Tell your story to crypto&apos;s most engaged readers —</p>
            <p>the ultimate decision-makers, link clickers, and early on-chain adopters.</p>
          </div>
        </div>

        {/* Card + Chart */}
        <div className="relative mx-auto max-w-[600px] overflow-hidden rounded-[11.855px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)] px-3 py-4">
          <p className="mb-5 text-center text-[15.13px] font-semibold text-white">Subscriber Count</p>

          <div className="relative mx-auto aspect-[777/400] w-full max-w-[580px]">

            {/* grid rows */}
            {GRID_LINES.map(({ top }) => (
              <div key={top} className="absolute left-[10%] right-0 w-[90%]" style={{ top: `${top}%` }}>
                <Image alt="" src={GRID_LINE_SRC} width={684} height={2} className="h-[2px] w-full opacity-80" />
              </div>
            ))}

            {/* y labels */}
            {GRID_LINES.map(({ label, top }) => (
              <span key={label} className="absolute left-0 w-[10%] -translate-y-1/2 pr-2 text-right text-[15.13px] font-medium text-white" style={{ top: `${top}%` }}>
                {label}
              </span>
            ))}

            {/* remove y baseline; rely on grid lines only */}

            {/* curve */}
            <div className="absolute" style={{ left: `${LINE_FRAME.left}%`, top: `${LINE_FRAME.top}%`, width: `${LINE_FRAME.width}%` }}>
              <Image alt="" src={LINE_PATH_SRC} width={569} height={111} className="h-auto w-full" priority />
            </div>

            {/* stars */}
            {STAR_POSITIONS.map(({ left, top, delay }, i) => (
              <div key={i} className="absolute animate-[twinkle_2.6s_ease-in-out_infinite] drop-shadow-[0_0_12px_rgba(255,214,10,0.45)]" style={{ left: `${left}%`, top: `${top}%`, animationDelay: delay }}>
                <Image alt="" src={STAR_SRC} width={21} height={21} className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            ))}

            {/* x labels (even spacing, start at left of each tick) */}
            <div className="absolute left-[10%] right-0 bottom-[-2%] grid w-[90%] grid-cols-[1fr_1fr_1fr_1.4fr]">
              {X_AXIS_LABELS.map(({ label }, i) => (
                <span
                  key={label}
                  className="col-span-1 whitespace-nowrap px-1 text-left text-[12px] leading-tight font-medium uppercase tracking-[0.15em] text-white sm:text-[13px]"
                  style={{ marginLeft: i === 0 ? 0 : -8 }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: .75; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
