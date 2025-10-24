import Image from 'next/image'

const GRID_LINE_SRC =
  '/Landing%20Page%20Token%20Metrics_icon/Vector%20grid.svg'
const CURVE_SRC =
  '/Landing%20Page%20Token%20Metrics_icon/Vector%206.svg'
const STAR_SRC =
  '/Landing%20Page%20Token%20Metrics_icon/Star%201.svg'
const ROBOT_SRC =
  '/Landing%20Page%20Token%20Metrics_img/ChatGPT%20Image%2011%20jun%202025%2C%2014_39_23%201.png'
const ROCKET_SRC =
  '/Landing%20Page%20Token%20Metrics_img/ChatGPT%20Image%2011%20abr%202025%2C%2010_21_24%201.png'

const Y_LABELS = [
  { value: '200000', top: 66 },
  { value: '150000', top: 135 },
  { value: '100000', top: 204 },
  { value: '50000', top: 273 },
  { value: '0', top: 341 },
]

const X_LABELS = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024 - Present']

const STARS = [
  { left: 0, top: 170 },
  { left: 171.79, top: 155 },
  { left: 370, top: 125 },
  { left: 590, top: 60 },
]

export default function NewsletterGrowth() {
  return (
    <div
      className="relative mx-auto max-w-4xl overflow-hidden px-6"
    >
      <div
        className="relative mx-auto aspect-[777/400] w-full max-w-[777px]"
        data-node-id="5586:20106"
        aria-hidden
      >
        {/* Blur the entire chart layer (grid, labels, curve, stars) */}
        <div
          className="absolute inset-0 opacity-50 blur-[0.5px] brightness-180"
          data-node-id="5586:20082"
          style={{ willChange: 'filter' }}
        >
          <ul className="absolute left-0 top-0 m-0 w-[76px] list-none font-sans text-[20.5px] font-bold text-white">
            {Y_LABELS.map(({ value, top }) => (
              <li
                key={value}
                className="absolute right-0"
                style={{ top }}
                data-node-id={
                  value === '0'
                    ? '5586:20091'
                    : value === '50000'
                      ? '5586:20086'
                      : value === '100000'
                        ? '5586:20085'
                        : value === '150000'
                          ? '5586:20084'
                          : '5586:20083'
                }
              >
                {value}
              </li>
            ))}
          </ul>

          {[76.92, 146.15, 215.38, 284.61].map((top, index) => (
            <Image
              key={top}
              src={GRID_LINE_SRC}
              alt=""
              width={684}
              height={2}
              className="absolute"
              style={{ left: 93.16, top, width: 683.742 }}
              data-node-id={`5586:2009${5 - index}`}
              priority={index === 0}
            />
          ))}

          <div
            className="absolute"
            style={{ left: 116.24, top: 48.72, width: 591.436, height: 138.459 }}
            data-node-id="5586:20097"
          >
            <Image
              src={CURVE_SRC}
              alt=""
              width={700}
              height={800}
              className="absolute"
              style={{ left: 13.25, top: 75 }}
              priority
            />
            {STARS.map(({ left, top }, index) => (
              <Image
                key={index}
                src={STAR_SRC}
                alt=""
                width={28.184}
                height={28.224}
                className="absolute"
                style={{ left, top }}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-[93.16px] flex w-[683.742px] justify-between font-sans text-[20.5px] font-medium text-white">
            {X_LABELS.map((label, index) => (
              <span
                key={label}
                data-node-id={`5586:2008${7 + index}`}
                className="uppercase tracking-[0.08em]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <Image
          src={ROBOT_SRC}
          alt="Token Metrics Robot"
          width={267.236}
          height={400}
          className="absolute z-20 object-contain"
          style={{ left: 254.95, top: 40 }}
          data-node-id="5586:20041"
          priority
        />
        <Image
          src={ROCKET_SRC}
          alt="Token Metrics Rocket"
          width={297}
          height={297}
          className="absolute z-10 object-contain"
          style={{ left: 388.95, top: 110 }}
          data-node-id="5586:20080"
          priority
        />
      </div>
    </div>
  )
}
