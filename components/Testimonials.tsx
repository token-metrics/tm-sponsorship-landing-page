import React from 'react'

const TESTIMONIALS = [
  {
    name: 'Justin V.',
    role: 'Verified Subscriber',
    content: "I've tried a lot of crypto newsletters, but Token Metrics Daily has been the real deal. 100% crypto-native insights, actionable trends, and alpha that's actually helped me double my portfolio. No fluff-just results."
  },
  {
    name: 'Pamela B.',
    role: 'Verified Subscriber',
    content: "Token Metrics Daily connects me to crypto's most savvy community-builders, investors, and trendsetters. Their insights help me stay ahead of the curve. If you're serious about crypto, this is where you want to be."
  },
  {
    name: 'Michael C.',
    role: 'Verified Subscriber',
    content: "Following Token Metrics Daily is like having an early warning system for the next big thing in crypto. Their trend predictions and quant research have made a HUGE difference in my strategy. It's my daily must-read."
  }
]

const StarRating = () => (
  <div className="flex gap-[3px]">
    {[1, 2, 3, 4, 5].map((star) => (
      <div key={star} className="relative">
        <svg
          width="16.8234"
          height="16"
          viewBox="0 0 16.8234 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.41168 0L10.3009 4.86618L15.4043 5.59018L12.408 9.24114L13.1378 14.5468L8.41168 12L3.68557 14.5468L4.41535 9.24114L1.41906 5.59018L6.52248 4.86618L8.41168 0Z"
            fill="#FFD60A"
          />
        </svg>
      </div>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section
      className="relative bg-[#0D1116] px-6 py-20 overflow-hidden"
      data-node-id="5622:20811"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="font-medium text-[48px] text-white"
            data-node-id="5622:20805"
          >
            What Our <span className="text-[#FFD60A]">Readers Say</span>
          </h2>
          <p
            className="mt-3 font-medium text-[20px] text-white"
            data-node-id="5622:20807"
          >
            Join thousands of satisfied readers and successful advertisers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="flex gap-8 justify-center"
          data-node-id="5622:20804"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="w-[405px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,246,246,0.1)] rounded-lg p-6 backdrop-blur-sm"
              data-node-id={`5622:${20747 + index * 35}`}
            >
              {/* Star Rating */}
        <div className="mb-2 h-4 w-[94.784px]">
          <StarRating />
        </div>

              {/* Testimonial Content */}
              <p
                className="mb-2 text-[14px] leading-[1.35] text-white whitespace-pre-wrap italic"
                data-node-id={`5622:${20752 + index * 37}`}
              >
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author Info */}
              <div
                className="flex flex-col gap-1"
                data-node-id={`5622:${20781 + index * 10}`}
              >
                <p
                  className="font-semibold text-[12px] text-white"
                  data-node-id={`5622:${20777 + index * 14}`}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-[12px] text-white"
                  data-node-id={`5622:${20779 + index * 14}`}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background ellipse detail at the end */}
      <div
        className="absolute left-1/2 bottom-0 h-[85.144px] w-[956px] translate-x-[-50%] z-0 flex-shrink-0"
        style={{
          borderRadius: '956px',
          background: '#3B5C84',
          filter: 'blur(93.359375px)'
        }}
        data-node-id="5622:20810"
      />
    </section>
  )
}
