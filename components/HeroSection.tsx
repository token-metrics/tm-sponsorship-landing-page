import Image from 'next/image'
import Link from 'next/link'

const HERO_LOGO_SRC =
  '/Landing%20Page%20Token%20Metrics_icon/TM_logo_primary_white.svg'
const HERO_ARROW_SRC =
  '/Landing%20Page%20Token%20Metrics_icon/Union.svg'

const CTA_PRIMARY_HREF = 'https://docs.google.com/forms/d/e/1FAIpQLSeNTNj9ABa2gvuoeyAKISILc1C1p8XLE2vvidRU29ZNqLuFdA/viewform?usp=header'
const CTA_SECONDARY_HREF = '#metrics-details'

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0D1116] pt-16 pb-12 sm:pt-20 sm:pb-16"
      data-node-id="5586:20043"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-70 blur-3xl" />
        <div className="absolute inset-x-0 top-0 mx-auto h-[360px] w-[580px] rounded-full bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-[120px] opacity-20" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 text-center">
        <Image
          alt="Token Metrics"
          className="h-12 w-auto"
          src={HERO_LOGO_SRC}
          width={123}
          height={48}
          priority
        />

        <h1 className="text-balance font-medium text-white text-[40px] sm:text-[48px] lg:text-[64px]">
          <span className="text-tm-yellow">Partner </span>
          With Token Metrics
        </h1>

        <p className="max-w-3xl text-pretty text-white font-medium text-[18px] sm:text-[20px] lg:text-[24px]">
          Reach 160k+ crypto-native subscribers, 350k+ community members, and
          the most engaged audience in cryptocurrency across 50+ countries
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link
            href={CTA_PRIMARY_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-[10px] rounded-lg bg-tm-yellow px-[19px] text-[16px] font-bold capitalize text-[#0b0b0b] transition hover:bg-[#ffdf4e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tm-yellow"
          >
            Submit Sponsorship Inquiry
            <Image alt="" src={HERO_ARROW_SRC} width={19} height={10} />
          </Link>
          <Link
            href={CTA_SECONDARY_HREF}
            className="inline-flex h-11 items-center justify-center gap-[10px] rounded-lg border border-white bg-[rgba(255,255,255,0.01)] px-[19px] text-[16px] font-bold capitalize text-white backdrop-blur-[15px] transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See Our Reach
          </Link>
        </div>
      </div>
    </section>
  )
}
