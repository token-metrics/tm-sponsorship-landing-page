import React from 'react'

const SPECIAL_FEATURES = [
  {
    number: "1",
    title: "For crypto natives, by crypto",
    description: "Token Metrics Daily is the ultimate source of crypto truth and the flagship media product of the Token Metrics suite. It's likely the only newsletter with 100% crypto-native readers, thanks to a crypto-savvy acquisition strategy."
  },
  {
    number: "2",
    title: "A diverse audience of crypto leaders",
    description: "Our audience includes high-earning crypto-literate readers from Western countries: investors, industry execs, trad-fi veterans, crypto natives, newbies, creators, builders, and a large retail crypto audience."
  },
  {
    number: "3",
    title: "Actionable insights & alpha",
    description: "We deliver real value with actionable insights and alpha that our readers can use immediately. Our content has helped thousands double their portfolios with data-driven strategies."
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof SPECIAL_FEATURES[0]; index: number }) => (
  <div
    className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,246,246,0.1)] rounded-lg p-6 md:p-8 w-[405px] min-h-[220px] relative flex flex-col"
    data-node-id={`5586:${20300 + index * 13}`}
  >
    {/* Header with number and title */}
    <div
      className="flex items-end gap-3 mb-3"
      data-node-id={`5586:${20298 + index * 16}`}
    >
      <span
        className="text-[48px] font-medium text-[#FFD60A] flex-shrink-0 leading-none"
        data-node-id={`5586:${20296 + index * 19}`}
      >
        {feature.number}
      </span>
      <span
        className="text-[16px] font-medium text-[#FFFFFF] leading-none pl-2 pr-0 flex-1 break-words"
        data-node-id={`5586:${20297 + index * 19}`}
      >
        {feature.title}
      </span>
    </div>

    {/* Divider line */}
    <div
      className="h-0 w-full border-t border-white/10 mb-3"
      data-node-id={`5586:${20295 + index * 22}`}
    />

    {/* Description */}
    <p
      className="text-[15px] text-[#FFFFFF] leading-relaxed break-words flex-1"
      data-node-id={`5586:${20299 + index}`}
    >
      {feature.description}
    </p>
  </div>
)

export default function TMDailySpecial() {
  return (
    <section
      className="bg-[#0D1116] px-6 py-20"
      data-node-id="5586:20326"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <h2
          className="text-[48px] font-medium text-center text-white mb-14"
          data-node-id="5586:20271"
        >
          What makes <span className="text-[#FFD60A]">TM Daily</span> special?
        </h2>

        {/* Features Grid */}
        <div
          className="flex gap-8 justify-center"
          data-node-id="5586:20325"
        >
          {SPECIAL_FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
