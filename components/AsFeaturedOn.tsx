import Image from 'next/image'

const LOGO_SOURCES = [
  {
    src: '/Landing%20Page%20Token%20Metrics_icon/Group%2010.svg',
    width: 101,
    height: 19,
    alt: 'Featured on logo 1'
  },
  {
    src: '/Landing%20Page%20Token%20Metrics_icon/Featured%20on-2.svg',
    width: 90,
    height: 28,
    alt: 'Featured on logo 2'
  },
  {
    src: '/Landing%20Page%20Token%20Metrics_icon/Featured%20on-1.svg',
    width: 69,
    height: 33,
    alt: 'Featured on logo 3'
  },
  {
    src: '/Landing%20Page%20Token%20Metrics_icon/Featured%20on.svg',
    width: 111,
    height: 28,
    alt: 'Featured on logo 4'
  },
  {
    src: '/Landing%20Page%20Token%20Metrics_icon/Group%209.svg',
    width: 70,
    height: 56,
    alt: 'Featured on logo 5'
  }
]

export default function AsFeaturedOn() {
  return (
    <section
      className="relative bg-[#0D1116] px-6 py-20"
      data-node-id="5624:20845"
    >
      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-[48px] font-medium text-white capitalize"
            data-node-id="5624:20818"
          >
            As Featured On
          </h2>
        </div>

        {/* Logos Container */}
        <div
          className="flex items-center justify-center gap-24"
          data-node-id="5624:20812"
        >
          {LOGO_SOURCES.map((logo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0"
              style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
              data-node-id={`5624:2081${3 + index}`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 60px, 100px"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}