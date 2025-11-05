'use client'

import React from 'react'
import Image from 'next/image'

export default function PlacementPreview() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-transparent to-[rgba(255,214,10,0.05)]">
      <div className="mx-auto w-full max-w-[800px]">
        <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.02)] p-8 backdrop-blur-sm">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative h-[60px] w-[60px] rounded-full bg-gradient-to-br from-[#FFD60A] to-[#FFF4BB] p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                  <Image
                    src="/Landing%20Page%20Token%20Metrics_icon/Desktop-Favorite-Star--Streamline-Core%20(1)%201.svg"
                    alt="Preview"
                    width={30}
                    height={30}
                    className="filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            <h3 className="mb-4 font-['Articulat_CF',_sans-serif] text-[28px] md:text-[32px] font-semibold text-white">
              See Exact <span className="text-[#FFD60A]">Placement Options</span>
            </h3>

            <p className="mb-8 font-['Articulat_CF',_sans-serif] text-[16px] text-[#9ca8b7] leading-relaxed max-w-[600px] mx-auto">
              View our comprehensive presentation deck showcasing detailed placement examples,
              visibility metrics, and platform specifications for each sponsorship package.
            </p>

            <a
              href="https://www.figma.com/deck/eBVnUXazenoPG53geFxvrd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[12px] bg-gradient-to-r from-[#FFD60A] to-[#FFF4BB] px-8 py-4 font-['Articulat_CF',_sans-serif] text-[16px] font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_0_rgba(255,214,10,0.4)] active:scale-95"
            >
              <span>View Placement Presentation</span>
              <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-black/20">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="6" width="12" height="8" rx="1" fill="black" />
                  <rect x="4" y="4" width="12" height="8" rx="1" fill="black" opacity="0.7" />
                  <rect x="6" y="2" width="12" height="8" rx="1" fill="black" opacity="0.4" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}