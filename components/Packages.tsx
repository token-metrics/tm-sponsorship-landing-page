'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

const BLOG_FEATURES = [
  {
    name: 'Link Insertion',
    description: [
      'Contextual mention + link added to existing ranking post.',
      'Link policy: Nofollow / sponsored only.'
    ],
    price: '$400 - $900',
    priceNote: '(one time)',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Link-Chain--Streamline-Core%201.svg',
    featured: false
  },
  {
    name: 'Guest Post',
    description: [
      '1,400–1,800 words, editor-written',
      'Includes internal links to ranking hubs.',
      ''
    ],
    price: '$1,200 - $2,500',
    priceNote: '(one time)',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Crown--Streamline-Core%20(2)%201.svg',
    featured: true
  }
]

const YOUTUBE_FEATURES = [
  {
    name: 'Livestream Ad',
    description: [
      '60-120 second ad',
      'Live audience engagement',
      'Real-time interaction'
    ],
    price: '$3,000',
    priceNote: '',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Play-List-9--Streamline-Core%201.svg',
    featured: false
  },
  {
    name: 'YouTube Video Feature',
    description: [
      '60-120 second ad',
      'Full production support',
      'Avg 56k+ views'
    ],
    price: '$3,500',
    priceNote: '',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Play-List-9--Streamline-Core%201.svg',
    featured: false
  },
  {
    name: 'Youtube Dedicated Video',
    description: [
      'Dedicated full video',
      'Premium positioning',
      'Maximum exposure'
    ],
    price: '$8,000',
    priceNote: '(one time)',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Film-Slate--Streamline-Core%20(1)%201.svg',
    featured: false
  },
  {
    name: 'Youtube Interview',
    description: [
      'Personal interview session',
      'Extended coverage',
      'Premium engagement'
    ],
    price: '$12,000',
    priceNote: '(one time)',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Webcam-Video--Streamline-Core%201.svg',
    featured: true
  }
]

const NEWSLETTER_FEATURES = [
  {
    name: 'Tail Placement',
    description: [
      'Cost-effective',
      'Good visibility',
      'Call-to-action focused'
    ],
    price: '$499',
    priceNote: '',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Browser-Website-1--Streamline-Core%202.svg',
    featured: false
  },
  {
    name: 'Top Header Placement',
    description: [
      'Prime visibility',
      'First impression',
      '160k+ subscribers'
    ],
    price: '$599',
    priceNote: '',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Browser-Website-1--Streamline-Core%201.svg',
    featured: false
  },
  {
    name: 'Full Issue Takeover',
    description: [
      'Exclusive presence',
      'Multiple placements',
      'Complete control'
    ],
    price: '$1,199',
    priceNote: '',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Inbox-Favorite--Streamline-Core%201.svg',
    featured: true
  },
  {
    name: 'Main Feature Highlight',
    description: [
      'Detailed coverage',
      'Center placement',
      'Maximum engagement'
    ],
    price: '$799',
    priceNote: '',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Desktop-Favorite-Star--Streamline-Core%20(1)%201.svg',
    featured: false
  }
]

const RESEARCH_FEATURES = [
  {
    name: 'Platform Integration',
    description: [
      'Direct user acess',
      'Analytics dashboard',
      'Targeted exposure'
    ],
    price: '$2,399',
    priceNote: '',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Inbox-Favorite--Streamline-Core%201.svg',
    featured: true
  }
]

const SOCIAL_FEATURES = [
  {
    name: 'Twitter (X) Post',
    description: [
      'Single post with CTA link',
      'Direct engagement with crypto community',
      '160K Followers reach'
    ],
    price: '$1,500',
    priceNote: '$250',
    icon: '/Landing%20Page%20Token%20Metrics_icon/X_logo_2023 (1) 1.svg',
    featured: true
  },
  {
    name: 'Telegram Group Pin',
    description: [
      'Promo post + 24-hour pin in our crypto group',
      'High visibility in engaged community',
      '10K Members reach'
    ],
    price: '$500',
    priceNote: '',
    icon: '/telegram-logo.svg',
    featured: false
  }
]

// Function to extract numeric value from price string
const extractPrice = (price: string) => {
  // Extract numbers from price strings like "$400 - $900" or "$1,200"
  const numbers = price.match(/\$?([\d,]+)/g)
  if (!numbers) return 0

  // If it's a range, take the lower number
  const firstNumber = numbers[0].replace(/[$,]/g, '')
  return parseInt(firstNumber)
}

// Map package sections to corresponding metrics cards
const SECTION_TO_CARD_MAP = {
  'Blog Features': ['metrics-card-link-insertion', 'metrics-card-guest-post'], // Maps to both Link Insertion and Guest Post
  'YouTube Features': 'metrics-card-youtube', // Maps to 🎥 YouTube metrics
  'Newsletter Placements': 'metrics-card-newsletter', // Maps to 📰 Newsletter metrics
  'Research Platform': 'metrics-card-research',  // Maps to 🔍 Research metrics
  'Social & Community Promotions': 'metrics-card-social' // Maps to 📱 Social media metrics
}

const PremiumBadge = () => (
  <div className="absolute right-[18.46px] top-[18px] z-10 flex items-center gap-[6px] rounded-[5px] px-2 py-[3px] bg-gradient-to-r from-[#FFD60A] to-[#FFF4BB] shadow-[0_0_16px_0_rgba(255,214,10,0.45)]">
    <Image
      src="/Landing%20Page%20Token%20Metrics_icon/Diamond-2--Streamline-Core%20(3)%202.svg"
      alt="Premium"
      width={13}
      height={13}
      className="shrink-0"
    />
    <span className="text-[10px] font-bold leading-none text-black">PREMIUM</span>
  </div>
)

// Function to handle smooth scroll with animated tilt effect
const handleViewMetrics = (sectionName: string) => {
  const cardIds = SECTION_TO_CARD_MAP[sectionName as keyof typeof SECTION_TO_CARD_MAP]
  if (cardIds) {
    // Remove any existing highlights and animations from other cards
    document.querySelectorAll('.metrics-highlight').forEach(el => {
      el.classList.remove('metrics-highlight', 'auto-tilt')
      ;(el as HTMLElement).style.setProperty('--rx', '0deg')
      ;(el as HTMLElement).style.setProperty('--ry', '0deg')
    })

    // Handle both single card ID and array of card IDs
    const ids = Array.isArray(cardIds) ? cardIds : [cardIds]

    // Find all the elements
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    if (elements.length > 0) {
      // Scroll to the first element
      elements[0].scrollIntoView({ behavior: 'smooth', block: 'center' })

      // Wait for scroll to complete, then start automatic tilt animation on all cards
      setTimeout(() => {
        elements.forEach((element) => {
          element.classList.add('auto-tilt')
          element.classList.add('metrics-highlight')
        })

        let tiltAngle = 0
        let direction = 1

        const tiltInterval = setInterval(() => {
          // Gradually increase tilt angle to max, then decrease
          tiltAngle += direction * 0.5

          if (tiltAngle >= 6) {
            tiltAngle = 6
            direction = -1 // Reverse direction
          } else if (tiltAngle <= -6) {
            tiltAngle = -6
            direction = 1 // Reverse direction
          }

          // Apply the same tilt to all cards simultaneously
          elements.forEach(element => {
            element.style.setProperty('--rx', '0deg')
            element.style.setProperty('--ry', `${tiltAngle}deg`)
          })

        }, 50) // Smooth animation

        // Stop tilting after 4 seconds and return to normal
        setTimeout(() => {
          clearInterval(tiltInterval)

          // Smoothly return to center for all cards
          elements.forEach(element => {
            const returnToCenter = () => {
              const currentTilt = parseFloat(element.style.getPropertyValue('--ry')) || 0
              const newTilt = currentTilt * 0.8 // Gradual return
              element.style.setProperty('--ry', `${newTilt}deg`)

              if (Math.abs(newTilt) > 0.1) {
                requestAnimationFrame(returnToCenter)
              } else {
                // Complete cleanup
                element.classList.remove('metrics-highlight', 'auto-tilt')
                element.style.setProperty('--rx', '0deg')
                element.style.setProperty('--ry', '0deg')
              }
            }
            returnToCenter()
          })
        }, 4000)
      }, 800) // Wait for scroll to complete
    }
  }
}

export default function Packages() {
  return (
    <section className="px-6 py-20" data-node-id="5655:18134">
      <div className="mx-auto w-full max-w-[954px]">
        {/* Header */}
        <div className="mb-20 flex items-center gap-4 md:gap-1">
          <div className="relative h-[314px] w-[200px] md:w-[314px]">
            <Image
              src="/Landing%20Page%20Token%20Metrics_img/jetpack%201%202.png"
              alt="Token Metrics Jetpack"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h2 className="mb-4 font-['Articulat_CF',_sans-serif] text-[40px] md:text-[56px] font-medium leading-normal text-white">
              <span className="text-[#FFD60A]">Sponsorship</span> Packages
            </h2>
            <p className="font-['Articulat_CF',_sans-serif] text-[18px] md:text-[24px] leading-relaxed text-white">
              Choose the perfect package to reach our<br />crypto-native audience
            </p>
          </div>
        </div>

        {/* Blog Features */}
        <div className="mb-16 mx-auto w-[680px]">
          <div className="mb-8 flex items-start justify-between">
            <h3 className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-medium leading-normal text-white">
              <span className="font-semibold">Blog Features</span> <span className="text-white">(Domain Authority - 65%)</span>
            </h3>
            <button
              onClick={() => handleViewMetrics('Blog Features')}
              className="text-[14px] md:text-[16px] text-white underline hover:text-[#FFD60A] transition-colors"
            >
              View Metrics
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
            {BLOG_FEATURES.slice().sort((a,b)=> extractPrice(a.price) - extractPrice(b.price)).map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-[12px] border p-5 transition-all duration-300 hover:scale-105 ${
                  feature.featured
                    ? 'border-[#FFD60A] bg-[rgba(255,214,10,0.16)] shadow-[0_0_30px_0_rgba(255,214,10,0.35)]'
                    : 'border-white/10 bg-[rgba(255,255,255,0.06)]'
                }`}
              >
                {feature.featured && <PremiumBadge />}

                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={30}
                  height={30}
                  className="mb-5"
                />

                <h4 className="mb-3 font-['Articulat_CF',_sans-serif] text-[16px] md:text-[18px] font-semibold text-white">
                  {feature.name}
                </h4>

                <div className="mb-4 space-y-[2px]">
                  {feature.description.map((line, lineIndex) => (
                    <p key={lineIndex} className="font-['Articulat_CF',_sans-serif] text-[12px] leading-snug text-white">
                      {line}
                    </p>
                  ))}
                </div>

                <div>
                  <span className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-semibold bg-gradient-to-b from-[#FFD60A] to-[#FFF4BB] bg-clip-text text-transparent align-middle" style={{ WebkitTextFillColor: 'transparent' }}>
                    {feature.price}
                  </span>
                  {feature.priceNote && (
                    <span className="ml-2 inline-block align-middle font-['Articulat_CF',_sans-serif] text-[12px] text-[#9ca8b7] md:text-[#b7b49c]">
                      {feature.priceNote}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Features */}
        <div className="mb-16 mx-auto w-[680px]">
          <div className="mb-8 flex items-start justify-between">
            <h3 className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-medium leading-normal text-white">
              <span className="font-semibold">YouTube Features</span> <span className="text-white">(150K Subscribers)</span>
            </h3>
            <button
              onClick={() => handleViewMetrics('YouTube Features')}
              className="text-[14px] md:text-[16px] text-white underline hover:text-[#FFD60A] transition-colors"
            >
              View Metrics
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
            {YOUTUBE_FEATURES.slice().sort((a,b)=> extractPrice(a.price) - extractPrice(b.price)).map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-[12px] border p-5 transition-all duration-300 hover:scale-105 ${
                  feature.featured
                    ? 'border-[#FFD60A] bg-[rgba(255,214,10,0.16)] shadow-[0_0_30px_0_rgba(255,214,10,0.35)]'
                    : 'border-white/10 bg-[rgba(255,255,255,0.06)]'
                }`}
              >
                {feature.featured && <PremiumBadge />}

                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={30}
                  height={30}
                  className="mb-5"
                />

                <h4 className="mb-3 font-['Articulat_CF',_sans-serif] text-[16px] md:text-[18px] font-semibold text-white">
                  {feature.name}
                </h4>

                <div className="mb-4 space-y-[2px]">
                  {feature.description.map((line, lineIndex) => (
                    <p key={lineIndex} className="font-['Articulat_CF',_sans-serif] text-[12px] leading-snug text-white">
                      {line}
                    </p>
                  ))}
                </div>

                <div>
                  <span className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-semibold bg-gradient-to-b from-[#FFD60A] to-[#FFF4BB] bg-clip-text text-transparent align-middle" style={{ WebkitTextFillColor: 'transparent' }}>
                    {feature.price}
                  </span>
                  {feature.priceNote && (
                    <span className="ml-2 inline-block align-middle font-['Articulat_CF',_sans-serif] text-[12px] text-[#9ca8b7] md:text-[#b7b49c]">
                      {feature.priceNote}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Placements */}
        <div className="mb-16 mx-auto w-[680px]">
          <div className="mb-8 flex items-start justify-between">
            <h3 className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-medium leading-normal text-white">
              <span className="font-semibold">Newsletter Placements</span> <span className="text-white">(150K Readers)</span>
            </h3>
            <button
              onClick={() => handleViewMetrics('Newsletter Placements')}
              className="text-[14px] md:text-[16px] text-white underline hover:text-[#FFD60A] transition-colors"
            >
              View Metrics
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
            {NEWSLETTER_FEATURES.slice().sort((a,b)=> extractPrice(a.price) - extractPrice(b.price)).map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-[12px] border p-5 transition-all duration-300 hover:scale-105 ${
                  feature.featured
                    ? 'border-[#FFD60A] bg-[rgba(255,214,10,0.16)] shadow-[0_0_30px_0_rgba(255,214,10,0.35)]'
                    : 'border-white/10 bg-[rgba(255,255,255,0.06)]'
                }`}
              >
                {feature.featured && <PremiumBadge />}

                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={30}
                  height={30}
                  className="mb-5"
                />

                <h4 className="mb-3 font-['Articulat_CF',_sans-serif] text-[16px] md:text-[18px] font-semibold text-white">
                  {feature.name}
                </h4>

                <div className="mb-4 space-y-[2px]">
                  {feature.description.map((line, lineIndex) => (
                    <p key={lineIndex} className="font-['Articulat_CF',_sans-serif] text-[12px] leading-snug text-white">
                      {line}
                    </p>
                  ))}
                </div>

                <div>
                  <span className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-semibold bg-gradient-to-b from-[#FFD60A] to-[#FFF4BB] bg-clip-text text-transparent align-middle" style={{ WebkitTextFillColor: 'transparent' }}>
                    {feature.price}
                  </span>
                  {feature.priceNote && (
                    <span className="ml-2 inline-block align-middle font-['Articulat_CF',_sans-serif] text-[12px] text-[#9ca8b7] md:text-[#b7b49c]">
                      {feature.priceNote}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Platform */}
        <div className="mb-16 mx-auto w-[680px]">
          <div className="mb-8 flex items-start justify-between">
            <h3 className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-bold leading-normal text-white">
              Research Platform
            </h3>
            <button
              onClick={() => handleViewMetrics('Research Platform')}
              className="text-[14px] md:text-[16px] text-white underline hover:text-[#FFD60A] transition-colors"
            >
              View Metrics
            </button>
          </div>

          <div className="flex justify-center">
            {RESEARCH_FEATURES.map((feature, index) => (
              <div
                key={index}
                className={`relative w-full max-w-[320px] rounded-[12px] border p-5 transition-all duration-300 hover:scale-105 ${
                  feature.featured
                    ? 'border-[#FFD60A] bg-[rgba(255,214,10,0.16)] shadow-[0_0_30px_0_rgba(255,214,10,0.35)]'
                    : 'border-white/10 bg-[rgba(255,255,255,0.06)]'
                }`}
              >
                {feature.featured && <PremiumBadge />}

                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={30}
                  height={30}
                  className="mb-5"
                />

                <h4 className="mb-4 font-['Articulat_CF',_sans-serif] text-[16px] md:text-[18px] font-semibold text-white">
                  {feature.name}
                </h4>

                <div className="mb-6 space-y-1">
                  {feature.description.map((line, lineIndex) => (
                    <p key={lineIndex} className="font-['Articulat_CF',_sans-serif] text-[12px] text-white">
                      {line}
                    </p>
                  ))}
                </div>

                <div>
                  <span className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-semibold bg-gradient-to-b from-[#FFD60A] to-[#FFF4BB] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    {feature.price}
                  </span>
                  {feature.priceNote && (
                    <span className="ml-2 font-['Articulat_CF',_sans-serif] text-[12px] text-[#9ca8b7] md:text-[#b7b49c]">
                      {feature.priceNote}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social & Community Promotions */}
        <div className="mx-auto w-[680px]">
          <div className="mb-8 flex items-start justify-between">
            <h3 className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-medium leading-normal text-white">
              <span className="font-semibold">Social & Community Promotions</span>
            </h3>
            <button
              onClick={() => handleViewMetrics('Social & Community Promotions')}
              className="text-[14px] md:text-[16px] text-white underline hover:text-[#FFD60A] transition-colors"
            >
              View Metrics
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
            {SOCIAL_FEATURES.slice().sort((a,b)=> extractPrice(a.price) - extractPrice(b.price)).map((feature, index) => (
              <div
                key={index}
                className={`relative rounded-[12px] border p-5 transition-all duration-300 hover:scale-105 ${
                  feature.featured
                    ? 'border-[#FFD60A] bg-[rgba(255,214,10,0.16)] shadow-[0_0_30px_0_rgba(255,214,10,0.35)]'
                    : 'border-white/10 bg-[rgba(255,255,255,0.06)]'
                }`}
              >
                {feature.featured && <PremiumBadge />}

                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={30}
                  height={30}
                  className="mb-5"
                />

                <h4 className="mb-3 font-['Articulat_CF',_sans-serif] text-[16px] md:text-[18px] font-semibold text-white">
                  {feature.name}
                </h4>

                <div className="mb-4 space-y-[2px]">
                  {feature.description.map((line, lineIndex) => (
                    <p key={lineIndex} className="font-['Articulat_CF',_sans-serif] text-[12px] leading-snug text-white">
                      {line}
                    </p>
                  ))}
                </div>

                <div>
                  <span className="font-['Articulat_CF',_sans-serif] text-[20px] md:text-[24px] font-semibold bg-gradient-to-b from-[#FFD60A] to-[#FFF4BB] bg-clip-text text-transparent align-middle" style={{ WebkitTextFillColor: 'transparent' }}>
                    {feature.price}
                  </span>
                  {feature.priceNote && (
                    <span className="ml-2 inline-block align-middle font-['Articulat_CF',_sans-serif] text-[12px] text-[#9ca8b7] md:text-[#b7b49c]">
                      {feature.priceNote}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
