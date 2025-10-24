'use client'

import React, { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: "Do you offer dofollow links?",
    answer: "Yes, we offer dofollow links for select sponsorship packages. Contact our team for details on link options and pricing."
  },
  {
    question: "How fast can we go live?",
    answer: "We can launch your campaign within 24-48 hours after approval and payment processing. Premium packages get priority placement."
  },
  {
    question: "What do you report?",
    answer: "We provide comprehensive analytics including impressions, clicks, conversions, and engagement metrics. Monthly reports delivered via email."
  },
  {
    question: "What if rankings change?",
    answer: "Our pricing is based on current performance metrics. We review quarterly and adjust accordingly."
  },
  {
    question: "Can we use affiliate links?",
    answer: "Yes, affiliate links are allowed in blog posts and newsletter content. Must be properly disclosed per FTC guidelines."
  }
]

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="h-2 w-4 relative transition-transform duration-200">
    <svg
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    >
      <path
        d="M1 1L8 7L15 1"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="bg-[#0D1116] px-6 py-20"
      data-node-id="5662:18930"
    >
      <div className="mx-auto max-w-[547px]">
        {/* Section Header */}
        <h2
          className="text-[48px] font-medium text-center text-white mb-20"
          data-node-id="5662:18929"
        >
          FAQs
        </h2>

        {/* FAQ Items */}
        <div
          className="flex flex-col gap-4"
          data-node-id="5662:18863"
        >
          {FAQ_ITEMS.map((item, index) => (
            <button
              key={index}
              onClick={() => toggleFAQ(index)}
              className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 text-left w-full transition-all hover:bg-[rgba(255,255,255,0.12)] group"
              data-node-id={`I5662:18863;34:239${3 + index}`}
            >
              <div className="flex items-center justify-between gap-10">
                <p
                  className="flex-1 text-[16px] text-white font-medium"
                  data-node-id={`I5662:18863;34:239${3 + index};34:2349`}
                >
                  {item.question}
                </p>
                <ChevronIcon isOpen={openIndex === index} />
              </div>

              {/* Answer - expands when open */}
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-[14px] text-white leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
