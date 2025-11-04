import React from 'react'
import Image from 'next/image'

export default function StatsBanner() {
  return (
    <section className="bg-[#0D1116] px-4 py-1">
      <div className="max-w-[842px] mx-auto">
        <div
          className="box-border flex gap-[50px] items-center justify-center px-[46.778px] py-[8px] rounded-[16px] w-full"
          style={{
            background: "linear-gradient(-43.179433023630395deg, #FFD60A 0%, #FFF4BB 100%), linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)"
          }}
        >
          {/* Stats Section */}
          <div className="flex gap-[20px] items-center shrink-0">

            {/* Stat 1 */}
            <div className="flex flex-col gap-[3px] items-center text-black text-center">
              <p className="font-black text-[16px] capitalize leading-normal">
                110,000+
              </p>
              <div className="font-normal text-[7px] uppercase leading-[6px] whitespace-nowrap">
                <p className="mb-0">Users rely on our</p>
                <p>AI insights</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-[3px] items-center text-black text-center">
              <p className="font-black text-[16px] capitalize leading-normal w-full whitespace-pre-wrap">
                60%+
              </p>
              <div className="font-normal text-[7px] uppercase leading-[6px] w-full whitespace-pre-wrap">
                <p className="mb-0">Bullish AI Signals</p>
                <p>beat the market</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-[3px] items-center text-black text-center">
              <p className="font-black text-[16px] capitalize leading-normal">
                350,000+
              </p>
              <div className="font-normal text-[7px] uppercase leading-[6px] whitespace-nowrap">
                <p className="mb-0">Members Using Our</p>
                <p>Tools & Research</p>
              </div>
            </div>

          </div>

          {/* Divider - Vector 2546 */}
          <div className="h-[44.1667px] w-[1px] relative shrink-0">
            <Image src="/Landing%20Page%20Token%20Metrics_icon/Vector%202546.svg" alt="" className="w-full h-full" width={1} height={44} />
          </div>

          {/* Featured On Logos */}
          <div className="flex gap-[25px] items-center justify-center shrink-0">

            {/* Logo 1 */}
            <div className="h-[11.754px] w-[63.792px] relative shrink-0">
              <div className="absolute bottom-[0.03%] left-[-0.01%] right-0 top-0">
                <Image src="/Landing%20Page%20Token%20Metrics_icon/Featured%20on-7.svg" alt="Featured on" className="block max-w-none size-full" width={64} height={12} />
              </div>
            </div>

            {/* Logo 2 */}
            <div className="h-[17.632px] w-[56.752px] relative shrink-0">
              <Image src="/Landing%20Page%20Token%20Metrics_icon/Featured%20on-6.svg" alt="Featured on" className="block max-w-none size-full" width={57} height={18} />
            </div>

            {/* Logo 3 */}
            <div className="h-[20.619px] w-[43.344px] relative shrink-0">
              <Image src="/Landing%20Page%20Token%20Metrics_icon/Featured%20on-5.svg" alt="Featured on" className="block max-w-none size-full" width={41} height={33} />
            </div>

            {/* Logo 4 */}
            <div className="h-[15.113px] w-[60.238px] relative shrink-0">
              <Image src="/Landing%20Page%20Token%20Metrics_icon/Featured%20on-4.svg" alt="Featured on" className="block max-w-none size-full" width={43} height={21} />
            </div>

            {/* Logo 5 */}
            <div className="h-[32.744px] w-[40.971px] relative shrink-0">
              <div className="absolute bottom-0 left-[0.1%] right-[0.1%] top-[2.33%]">
                <Image src="/Landing%20Page%20Token%20Metrics_icon/Featured%20on-3.svg" alt="Featured on" className="block max-w-none size-full" width={41} height={13} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}