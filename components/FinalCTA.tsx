import Image from 'next/image'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section
      className="relative bg-[#FFD60A] px-6 py-20 overflow-hidden"
      style={{ height: '420px' }}
      data-node-id="5626:20962"
    >
      <div className="relative mx-auto max-w-[1440px] h-full">
        {/* Background yellow rectangle */}
        <div
          className="absolute inset-0 bg-[#FFD60A] -z-10"
          data-node-id="5626:20963"
        />

        {/* Robot/Image - positioned more to the left */}
        <div
          className="absolute left-[calc(50%-480px)] top-[-60px] h-[400px] w-[345px] z-0"
          data-node-id="5626:20964"
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/Landing%20Page%20Token%20Metrics_img/ChatGPT%20Image%2011%20jun%202025%2C%2014_39_23%201.png"
              alt="Token Metrics Robot"
              fill
              className="object-cover"
              style={{
                objectPosition: '50% -4.97%'
              }}
              priority
            />
          </div>
        </div>

        {/* Content - positioned to the right of the image */}
        <div
          className="absolute left-[609px] top-[50%] translate-y-[-50%] flex flex-col gap-4 max-w-[600px]"
          data-node-id="5626:20965"
        >
          {/* Title */}
          <h2
            className="font-semibold text-[40px] text-black"
            data-node-id="5626:20966"
          >
            Let&apos;s Build Together
          </h2>

          {/* Description */}
          <p
            className="text-[20px] text-black leading-normal max-w-[671px]"
            data-node-id="5626:20967"
          >
            Join the most successful crypto projects advertising with Token Metrics. Reach our engaged, crypto-native audience and drive real results.
          </p>

          {/* Buttons */}
          <div
            className="flex gap-4 items-center"
            data-node-id="5626:20974"
          >
            {/* Primary Button */}
            <Link
              href="#sponsorship-inquiry"
              className="bg-black hover:bg-gray-900 transition-colors rounded-lg px-[19px] py-[19px] flex items-center justify-center gap-2 h-[49px] w-[172px] group"
              data-node-id="5626:20994"
            >
              <span
                className="font-semibold text-[16px] text-white text-center capitalize group-hover:text-[#FFD60A] transition-colors"
                data-node-id="5626:20995"
              >
                Get Started Today
              </span>
            </Link>

            {/* Secondary Button */}
            <Link
              href="#packages"
              className="backdrop-blur-[15px] bg-[rgba(0,0,0,0.01)] hover:bg-[rgba(0,0,0,0.05)] border border-black hover:border-gray-800 transition-all rounded-lg px-[19px] py-[19px] flex items-center justify-center gap-2 h-[49px] w-[196px] group"
              data-node-id="5626:20971"
            >
              <span
                className="font-semibold text-[16px] text-black text-center capitalize group-hover:text-gray-700 transition-colors"
              >
                View Packages Again
              </span>
            </Link>
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-col gap-1 text-black"
            data-node-id="5626:21000"
          >
            <div
              className="flex items-center gap-1 text-[14px]"
              data-node-id="5626:20996"
            >
              <span className="text-black">Contact us at:</span>
              <a
                href="mailto:Promo@tokenmetrics.com"
                className="text-black hover:bg-gradient-to-r hover:from-black hover:to-white hover:bg-clip-text hover:text-transparent transition-all duration-300 underline underline-offset-2"
              >
                Promo@tokenmetrics.com
              </a>
              <span className="text-[10px] text-black">(Average response time: 24 hours)</span>
            </div>

            <div className="flex items-center gap-1 text-[14px]">
              <span className="text-black">Visit us at:</span>
              <a
                href="https://tokenmetrics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:bg-gradient-to-r hover:from-black hover:to-white hover:bg-clip-text hover:text-transparent transition-all duration-300 underline underline-offset-2"
                data-node-id="5626:20998"
              >
                tokenmetrics.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}