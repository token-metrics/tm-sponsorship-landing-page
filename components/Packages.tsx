'use client'
import Image from 'next/image'
import { Sparkles, Star, Crown } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

type PackageItem = {
  name: string
  price: string
  priceSubtext?: string
  icon?: LucideIcon
  features: string[]
}

export default function Packages() {
  const packages: { category: string; items: PackageItem[] }[] = [
    {
      category: 'Blog Features',
      items: [
        { 
          name: 'Link Insertion', 
          price: '$400 - $900', 
          priceSubtext: '(one time)',
          icon: Sparkles,
          features: ['Contextual mention + link added to existing ranking post', 'Link policy: Nofollow / sponsored only'] 
        },
        { 
          name: 'Guest Post', 
          price: '$1,200 - $2,500', 
          priceSubtext: '(one time)',
          icon: Star,
          features: ['1,400–1,800 words, editor-written', 'Includes internal links to ranking hubs'] 
        },
      ]
    },
    {
      category: 'YouTube Features',
      items: [
        { name: 'Livestream Ad', price: '$3,000', features: ['60-120 second ad', 'Live audience engagement', 'Real-time interaction'] },
        { name: 'YouTube Video Feature', price: '$3,500', features: ['60-120 second ad', 'Full production support', 'Avg 56k+ views'] },
        { name: 'Youtube Dedicated Video', price: '$8,000', features: ['Dedicated full video', 'Premium positioning', 'Maximum exposure'] },
        { name: 'Youtube Interview', price: '$12,000', features: ['Personal interview session', 'Extended coverage', 'Premium engagement'] },
      ]
    },
    {
      category: 'Newsletter Placements',
      items: [
        { name: 'Top Header Placement', price: '$599', features: ['Prime visibility', 'First impression', '160k+ subscribers'] },
        { name: 'Main Feature Highlight', price: '$799', features: ['Detailed coverage', 'Center placement', 'Maximum engagement'] },
        { name: 'Full Issue Takeover', price: '$1,199', features: ['Exclusive presence', 'Multiple placements', 'Complete control'] },
        { name: 'Tail Placement', price: '$499', features: ['Cost-effective', 'Good visibility', 'Call-to-action focused'] },
      ]
    },
    {
      category: 'Research Platform',
      items: [
        { name: 'Platform Integration', price: '$2,399', features: ['Direct user access', 'Analytics dashboard', 'Targeted exposure'] },
      ]
    }
  ]

  // Extract numeric prices for dynamic tier styling
  const parsePrice = (price: string): number => {
    const matches = price.match(/\d[\d,]*/g)
    if (!matches || matches.length === 0) return 0
    const values = matches.map(v => parseInt(v.replace(/,/g, ''), 10)).filter(v => !Number.isNaN(v))
    if (values.length === 0) return 0
    if (values.length === 1) return values[0]
    const sum = values.reduce((acc, v) => acc + v, 0)
    return Math.round(sum / values.length)
  }

  const cardClassesByTier = (tier: 1 | 2 | 3 | 4 | 5): string => {
    switch (tier) {
      case 1:
        return 'from-gray-900 to-gray-800 border-gray-700 hover:border-gray-500'
      case 2:
        return 'from-gray-900 to-gray-800 border-yellow-600/20 hover:border-yellow-500/40 ring-1 ring-yellow-500/10 shadow-[0_0_12px_rgba(255,207,48,0.05)]'
      case 3:
        return 'from-gray-900 to-gray-800 border-yellow-500/40 hover:border-yellow-400 ring-1 ring-yellow-400/30 shadow-[0_0_16px_rgba(255,207,48,0.08)]'
      case 4:
        return 'from-gray-900 to-gray-800 border-yellow-400/70 hover:border-yellow-300 ring-2 ring-yellow-400/40 shadow-[0_0_24px_rgba(255,207,48,0.18)]'
      case 5:
      default:
        return 'from-gray-900 to-gray-800 border-tm-yellow hover:border-tm-yellow ring-2 ring-tm-yellow/60 shadow-[0_0_36px_rgba(255,207,48,0.28)]'
    }
  }

  const overlayOpacityByTier = (tier: 1 | 2 | 3 | 4 | 5): string => {
    switch (tier) {
      case 1:
        return 'opacity-0'
      case 2:
        return 'opacity-30'
      case 3:
        return 'opacity-40'
      case 4:
        return 'opacity-60'
      case 5:
      default:
        return 'opacity-80'
    }
  }

  const priceColorByTier = (tier: 1 | 2 | 3 | 4 | 5): string => {
    switch (tier) {
      case 1:
        return 'text-white'
      case 2:
        return 'text-yellow-200'
      case 3:
        return 'text-yellow-300'
      case 4:
        return 'text-yellow-300'
      case 5:
      default:
        return 'text-tm-yellow'
    }
  }

  return (
    <section id="packages" className="py-24 sm:py-32 bg-black/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute -left-20 md:-left-32 -top-28 md:-top-33 w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[280px] xl:h-[280px] z-0">
            <Image
              src="/tmai-rocket.png"
              alt="TMAI Rocket"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl relative z-10">
            Sponsorship <span className="text-tm-yellow">Packages</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 relative z-10">
            Choose the perfect package to reach our crypto-native audience
          </p>
        </div>

        {packages.map((category) => {
          const items = category.category === 'Newsletter Placements'
            ? [...category.items].sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
            : category.items
          const numericPrices = items.map(i => parsePrice(i.price))
          const catMin = Math.min(...numericPrices)
          const catMax = Math.max(...numericPrices)
          const count = category.items.length

          const getTierForCategory = (value: number): 1 | 2 | 3 | 4 | 5 => {
            if (count <= 1) return 5
            if (count === 2) return value === catMax ? 5 : 2
            if (!Number.isFinite(value) || catMax === catMin) return 3
            const normalized = (value - catMin) / (catMax - catMin)
            const tier = Math.min(4, Math.floor(normalized * 4)) + 1
            return tier as 1 | 2 | 3 | 4 | 5
          }

          return (
            <div key={category.category} className="mb-16">
              <h3 className="text-2xl font-bold text-tm-yellow mb-8">{category.category}</h3>
              <div className={category.category === 'Blog Features' 
                ? "flex flex-wrap justify-center gap-8" 
                : "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"}>
                {items.map((item) => {
                  const numericPrice = parsePrice(item.price)
                  const tier = getTierForCategory(numericPrice)
                  const cardClasses = cardClassesByTier(tier)
                  const overlayOpacity = overlayOpacityByTier(tier)
                  const priceColor = priceColorByTier(tier)
                  return (
                    <div
                      key={item.name}
                      className={`group tm-tilt relative bg-gradient-to-br ${cardClasses} rounded-lg p-8 border transition-all ${category.category === 'Blog Features' ? 'w-full sm:w-[400px]' : ''}`}
                      onMouseMove={(e) => {
                        const target = e.currentTarget as HTMLElement
                        const rect = target.getBoundingClientRect()
                        const x = e.clientX - rect.left
                        const y = e.clientY - rect.top
                        const ry = ((x - rect.width / 2) / rect.width) * 10 // -5..5deg
                        const rx = -((y - rect.height / 2) / rect.height) * 10
                        target.style.setProperty('--ry', ry.toFixed(2) + 'deg')
                        target.style.setProperty('--rx', rx.toFixed(2) + 'deg')
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLElement
                        target.style.setProperty('--ry', '0deg')
                        target.style.setProperty('--rx', '0deg')
                      }}
                    >
                      {/* Radial gold glow overlays scale with tier */}
                      <div className={`pointer-events-none absolute inset-0 rounded-lg mix-blend-screen ${overlayOpacity} transition-opacity`}>
                        <div className="absolute inset-0 rounded-lg bg-[radial-gradient(450px_200px_at_0%_0%,rgba(255,207,48,0.12),transparent),radial-gradient(300px_200px_at_100%_100%,rgba(255,207,48,0.08),transparent)]" />
                      </div>
                      {/* Premium badge for top tiers */}
                      {(tier === 4 || tier === 5) && (
                        <div className="absolute right-4 top-4 flex items-center gap-1 px-2 py-1 rounded-full border border-yellow-300/50 bg-yellow-500/10 text-yellow-200 text-xs uppercase tracking-wide">
                          {tier === 5 ? <Crown className="w-3.5 h-3.5" /> : <Star className="w-3.5 h-3.5" />}
                          <span>{tier === 5 ? 'Premium' : 'Popular'}</span>
                        </div>
                      )}
                      {tier === 5 && (
                        <div className="tm-shine" />
                      )}
                      {item.icon && (
                        <div className="mb-4 flex items-center justify-center w-12 h-12 bg-tm-yellow/10 rounded-full">
                          <item.icon className="w-6 h-6 text-tm-yellow" />
                        </div>
                      )}
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-white mb-3">{item.name}</h4>
                        <p className="text-sm text-gray-400 mb-4">
                          {item.features.map((feature, index) => (
                            <span key={index} className="block mb-1">{feature}</span>
                          ))}
                        </p>
                        <div className="mt-4">
                          <p className={`text-3xl font-bold ${priceColor}`}>
                            {item.price}
                            {item.priceSubtext && (
                              <span className="text-sm font-normal text-gray-400 ml-2">{item.priceSubtext}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}