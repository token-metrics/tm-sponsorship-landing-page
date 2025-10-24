import Image from 'next/image'

const PARTNERS = [
  {
    name: 'Polygon',
    image: 'https://www.figma.com/api/mcp/asset/90a2ac3d-0741-4e1a-82e5-ca500e49d463',
    borderRadius: 'full',
    hasBorder: false
  },
  {
    name: 'Multicoin Capital',
    image: 'https://www.figma.com/api/mcp/asset/9c98d10b-7a84-4986-a980-1ee716380500',
    borderRadius: 'lg',
    hasBorder: false
  },
  {
    name: 'Dragonfly',
    image: 'https://www.figma.com/api/mcp/asset/697ce2ed-3ab9-4604-ad8c-ba3a45a47f7e',
    borderRadius: 'full',
    hasBorder: true
  },
  {
    name: 'Davincij15',
    image: 'https://www.figma.com/api/mcp/asset/5f3c896a-9fc2-4f6a-91d4-fe419e41aa44',
    borderRadius: 'lg',
    hasBorder: false,
    isWhiteBackground: true
  },
  {
    name: 'LayerZero',
    image: 'https://www.figma.com/api/mcp/asset/e7304e8d-48ac-429c-b3af-09dd28c22d8c',
    borderRadius: 'lg',
    hasBorder: true
  },
  {
    name: 'Avalanche',
    image: 'https://www.figma.com/api/mcp/asset/7347d67b-b405-4eb7-9863-e84db7ea338f',
    borderRadius: 'full',
    hasBorder: false
  }
]

const PartnerItem = ({ partner }: { partner: typeof PARTNERS[0] }) => (
  <div
    className="flex items-center gap-5"
    data-node-id={`5626:2091${PARTNERS.indexOf(partner) + 4}`}
  >
    {/* Logo Container */}
    <div
      className={`
        relative w-16 h-16 shrink-0 overflow-hidden
        ${partner.borderRadius === 'full' ? 'rounded-full' : 'rounded-2xl'}
        ${partner.hasBorder ? 'border border-white/20' : ''}
        ${partner.isWhiteBackground ? 'bg-white' : ''}
      `}
      data-node-id={`5626:2095${0 + PARTNERS.indexOf(partner)}`}
    >
      <Image
        src={partner.image}
        alt={`${partner.name} logo`}
        fill
        className={`
          object-cover
          ${partner.isWhiteBackground ? 'object-center' : 'object-center'}
        `}
        sizes="64px"
        priority={PARTNERS.indexOf(partner) === 0}
      />
    </div>

    {/* Partner Name */}
    <p
      className="text-[32px] font-medium text-white"
      data-node-id={`5626:2091${2 + PARTNERS.indexOf(partner)}`}
    >
      {partner.name}
    </p>
  </div>
)

export default function TrustedByProjects() {
  // Split partners into two rows of 3
  const firstRow = PARTNERS.slice(0, 3)
  const secondRow = PARTNERS.slice(3, 6)

  return (
    <section
      className="relative bg-[#0D1116] px-6 py-20"
      data-node-id="5655:18136"
    >
      <div className="relative mx-auto max-w-[891px]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            className="text-[48px] font-medium text-white capitalize"
            data-node-id="5624:20851"
          >
            Trusted by leading projects
          </h2>
        </div>

        {/* Partners Grid */}
        <div
          className="flex flex-col gap-14"
          data-node-id="5626:20960"
        >
          {/* First Row */}
          <div
            className="flex items-center justify-between gap-8 px-8"
            data-node-id="5626:20921"
          >
            {firstRow.map((partner) => (
              <PartnerItem key={partner.name} partner={partner} />
            ))}
          </div>

          {/* Second Row */}
          <div
            className="flex items-center justify-between gap-8 px-8"
            data-node-id="5626:20922"
          >
            {secondRow.map((partner) => (
              <PartnerItem key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}