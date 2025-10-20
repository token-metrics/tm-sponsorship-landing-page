import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-tm-yellow/20 to-transparent blur-3xl" />
      <div className="absolute -right-5 bottom-0 w-[220px] h-[220px] md:w-[250px] md:h-[250px] lg:w-[280px] lg:h-[280px] xl:w-[330px] xl:h-[330px] 2xl:-right-10 z-0">
        <Image
          src="/tmai-confident.png"
          alt="TMAI Mascot"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/logos/tm-logo.svg"
              alt="Token Metrics"
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Partner with <span className="text-tm-yellow">Token Metrics</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Reach 160k+ crypto-native subscribers, 350k+ community members, and the most engaged audience in cryptocurrency across 50+ countries
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNTNj9ABa2gvuoeyAKISILc1C1p8XLE2vvidRU29ZNqLuFdA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-tm-yellow px-6 py-3 text-lg font-semibold text-black shadow-sm hover:bg-yellow-400 transition-colors"
            >
              Submit Sponsorship Inquiry
            </a>
            <a
              href="#stats"
              className="text-lg font-semibold leading-6 text-white hover:text-tm-yellow transition-colors"
            >
              See Our Reach
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}