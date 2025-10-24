import React from 'react'
import Image from 'next/image'

const METRICS = [
  {
    value: '160K+',
    label: 'Newsletter Subscribers',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Mail-Send-Envelope--Streamline-Core%201.svg',
    padding: 'py-[13.5px]'
  },
  {
    value: '30%',
    label: 'Average Open Rate',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Mail-Incoming--Streamline-Core%201.svg',
    padding: 'py-[13.5px]'
  },
  {
    value: '145K+',
    label: 'Daily Impressions',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Announcement-Megaphone--Streamline-Core%201.svg',
    padding: 'py-[13.5px]'
  },
  {
    value: '350K+',
    label: 'Community Members',
    icon: '/Landing%20Page%20Token%20Metrics_icon/No-Poverty--Streamline-Core%20(7)%201.svg',
    padding: 'py-[18px]'
  },
  {
    value: '169K+',
    label: 'YouTube Subscribers',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Mail-Send-Envelope--Streamline-Core%201-1.svg',
    padding: 'py-[18px]'
  },
  {
    value: '56K+',
    label: 'Average Video Views',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Visible--Streamline-Core%201.svg',
    padding: 'py-[18px]'
  }
]

const COMMUNITIES = [
  {
    name: 'X/Twitter 140K+',
    icon: '/Landing%20Page%20Token%20Metrics_icon/X_logo_2023%20(1)%201.svg',
    width: '26.568px',
  },
  {
    name: 'YouTube 169K+',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Frame.svg',
    width: '34.284px',
  },
  {
    name: 'Discord 8K+',
    icon: '/Landing%20Page%20Token%20Metrics_icon/Group.svg',
    width: '31.004px',
  },
]

export default function MetricsDetails() {
  return (
    <section id="metrics-details" className="px-6 py-20" data-node-id="5655:18135">
      <div className="relative mx-auto w-full max-w-[878px]">
        {/* Title */}
        <h2
          className="mx-auto w-full text-center text-[48px] font-medium leading-normal text-white whitespace-nowrap font-['Articulat_CF',_sans-serif]"
          data-node-id="5586:20044"
        >
          Big Numbers, <span className="text-[#FFD60A]">Big Conversions</span>
        </h2>

        {/* Metrics Grid */}
        <div
          className="mt-[98px] mx-auto flex w-[768px] flex-wrap justify-center gap-[24px]"
          data-node-id="5586:20067"
        >
          {METRICS.map((metric, index) => (
            <div
              key={index}
              className={`relative w-[240px] shrink-0 rounded-[12px] border-[0.75px] border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.07)] overflow-hidden`}
              style={{ padding: `0 ${metric.padding === 'py-[13.5px]' ? '0' : '0'}` }}
              data-node-id={`5586:2006${61 + index}`}
            >
              <div
                className="flex flex-col items-center gap-[18px] text-center relative w-[240px]"
                style={{ padding: metric.padding === 'py-[13.5px]' ? '13.5px 0' : '18px 0' }}
              >
                {/* Icon */}
                <div className="relative h-[30px] w-[30px] shrink-0 overflow-hidden">
                  <Image
                    src={metric.icon}
                    alt={metric.label}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Value */}
                <p
                  className="text-[36px] font-bold leading-normal text-center w-full text-transparent bg-gradient-to-b from-[#FFD60A] to-[#FFF4BB] bg-clip-text font-['Articulat_CF',_sans-serif]"
                  style={{ width: 'min-content', whiteSpace: 'pre-wrap', WebkitTextFillColor: 'transparent' }}
                  data-node-id={`5586:2006${2 + index}`}
                >
                  {metric.value}
                </p>

                {/* Label - force single line */}
                <p
                  className="text-[12px] font-medium leading-normal text-center text-white w-full whitespace-nowrap overflow-hidden text-ellipsis font-['Articulat_CF',_sans-serif]"
                  data-node-id={`5586:2006${3 + index}`}
                >
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Communities Section (title left, icons to the right, divider below) */}
        <div className="mt-[120px] w-[768px] mx-auto relative h-[50px]" data-node-id="5622:20809">
          <h3
            className="absolute left-0 top-[2px] text-[24px] font-medium leading-normal text-white whitespace-nowrap font-['Articulat_CF',_sans-serif]"
            data-node-id="5586:20203"
          >
            Our Communities
          </h3>
          <div
            className="absolute left-[297px] top-0 flex flex-nowrap items-center gap-[24px]"
            data-node-id="5586:20237"
          >
            {COMMUNITIES.map((community, index) => (
              <div
                key={index}
                className="relative flex items-center gap-[9px] shrink-0"
                data-node-id={`5586:2021${1 + index}`}
              >
                <div
                  className="relative shrink-0"
                  style={{ height: '24px', width: community.width }}
                >
                  <Image
                    src={community.icon}
                    alt={community.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p
                  className="text-[15px] font-semibold leading-normal text-white whitespace-nowrap font-['Articulat_CF',_sans-serif]"
                  data-node-id={`5586:2021${0 + index}`}
                >
                  {community.name}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-[42px] h-[2px] w-[768px] bg-white/55" data-node-id="5586:20204" />
        </div>
      </div>
    </section>
  )
}
