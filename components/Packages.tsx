import Image from 'next/image'

export default function Packages() {
  const packages = [
    {
      category: 'Content Features',
      items: [
        { name: 'Non-Competitive Blog', price: '$1,500', features: ['SEO optimized', 'Permanent placement', 'Google front page potential'] },
        { name: 'Livestream Ad', price: '$3,000', features: ['60-120 second ad', 'Live audience engagement', 'Real-time interaction'] },
        { name: 'Competitive Blog', price: '$6,000', features: ['Premium positioning', 'Extended coverage', 'Multi-channel promotion'] },
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

        {packages.map((category) => (
          <div key={category.category} className="mb-16">
            <h3 className="text-2xl font-bold text-tm-yellow mb-8">{category.category}</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-gray-700 hover:border-tm-yellow transition-all hover:scale-105"
                >
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white">{item.name}</h4>
                    <p className="mt-2 text-3xl font-bold text-tm-yellow">{item.price}</p>
                  </div>
                  <ul className="space-y-3">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-tm-yellow mr-2 font-bold">-</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}