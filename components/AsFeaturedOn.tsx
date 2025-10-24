import Image from 'next/image'

const LOGO_SOURCES = [
  {
    src: 'https://www.figma.com/api/mcp/asset/843b522f-a09d-4948-9f8a-3d5ca958ecf2',
    width: 101,
    height: 19,
    alt: 'Featured on logo 1'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/1fdda2b7-3841-452e-a061-7d66f5bc30e0',
    width: 90,
    height: 28,
    alt: 'Featured on logo 2'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/a90bc699-2286-40f1-9c69-c6bb3e2703fe',
    width: 69,
    height: 33,
    alt: 'Featured on logo 3'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/edf8004f-6983-48fc-a6a7-9f04dcc43e3c',
    width: 111,
    height: 28,
    alt: 'Featured on logo 4'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/ad11887b-ee57-45e5-b412-2fad264a57f0',
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