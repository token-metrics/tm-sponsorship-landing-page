import Image from 'next/image'
import Link from 'next/link'

const BLOG_POSTS = [
  {
    title: "Top Crypto Trading Platforms in 2025",
    description: "When it comes to crypto trading platforms, Token Metrics is not an exchange, but a crypto analytics and crypto trading intelligence platform powered by AI.",
    image: "/Landing%20Page%20Token%20Metrics_img/rectange%201.png",
    link: "https://www.tokenmetrics.com/blog/top-crypto-trading-platforms-in-2025"
  },
  {
    title: "Token Metrics AI Raises $8.5M to Advance Crypto AI Agents, Reveals 2025 Roadmap",
    description: "Token Metrics AI (TMAI), a platform transforming cryptocurrency trading with AI agents, has raised $8.5 million over four years from 3,000+ investors.",
    image: "/Landing%20Page%20Token%20Metrics_img/rectangle%202.png",
    link: "https://www.tokenmetrics.com/blog/token-metrics-ai-raises-8-5m-to-advance-crypto-ai-agents-reveals-2025-roadmap"
  },
  {
    title: "Top Solana Projects in 2024 - Token Metrics Moon Awards",
    description: "Discover the top Solana projects of 2024 at the Token Metrics Moon Awards. Uncover the best in Solana innovation and investment potential.",
    image: "/Landing%20Page%20Token%20Metrics_img/rectangle%203.png",
    link: "https://www.tokenmetrics.com/blog/top-solana-projects"
  },
  {
    title: "Top Crypto Trading Platforms in 2025",
    description: "When it comes to crypto trading platforms, Token Metrics is not an exchange, but a crypto analytics and crypto trading intelligence platform powered by AI.",
    image: "/Landing%20Page%20Token%20Metrics_img/rectange%201.png",
    link: "https://www.tokenmetrics.com/blog/top-crypto-trading-platforms-in-2025"
  }
]

const BlogCard = ({ post, index }: { post: typeof BLOG_POSTS[0]; index: number }) => (
  <div
    className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.05)] border border-[#666666] rounded-3xl p-6 w-[296px] relative overflow-hidden"
    data-node-id={`5586:${20363 + index}`}
  >
    <div className="flex flex-col gap-6">
      {/* Blog Image */}
      <div
        className="h-[136px] rounded-lg overflow-hidden relative shrink-0"
        data-node-id={`I5586:${20363 + index};4116:11740`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index === 0}
        />
      </div>

      {/* Blog Content */}
      <div className="flex flex-col gap-4 flex-1">
        {/* Title */}
        <h3
          className="font-medium text-[20px] text-white leading-tight overflow-hidden"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical'
          }}
          data-node-id={`I5586:${20363 + index};4116:11741`}
        >
          {post.title}
        </h3>

        {/* Description */}
        <p
          className="text-[14px] text-white leading-relaxed overflow-hidden line-clamp-3"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical'
          }}
          data-node-id={`I5586:${20363 + index};4116:11742`}
        >
          {post.description}
        </p>

        {/* Read More Button */}
        <Link
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] transition-colors rounded-lg px-6 py-[10px] flex items-center justify-center h-[44px] w-full group"
          data-node-id={`I5586:${20363 + index};4116:11744`}
        >
          <span
            className="font-semibold text-[16px] text-white text-center group-hover:text-[#FFD60A] transition-colors"
            data-node-id={`I5586:${20363 + index};4116:11744;4093:17795`}
          >
            Read More
          </span>
        </Link>
      </div>
    </div>
  </div>
)

export default function BlogHub() {
  return (
    <section
      className="relative bg-[#0D1116] px-6 py-20 overflow-hidden"
      data-node-id="5586:20359"
    >
      <div className="relative mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h2
              className="text-[32px] font-normal text-white mb-2"
              data-node-id="5586:20360"
            >
              Our Blog Hub
            </h2>
            <p
              className="text-[16px] text-white max-w-md mb-0"
              data-node-id="5586:20361"
            >
              Insights, research, and trends to help you invest smarter.
            </p>
          </div>

          {/* Browse All Blogs Button */}
          <div>
            <Link
              href="https://tokenmetrics.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-[15px] bg-[rgba(255,255,255,0.01)] border border-white hover:bg-[rgba(255,255,255,0.05)] transition-all rounded-lg px-[19px] py-[10px] flex items-center gap-2 h-[44px] w-[187px] group"
              data-node-id="5586:20367"
            >
              <span
                className="font-semibold text-[16px] text-white text-center group-hover:text-[#FFD60A] transition-colors flex items-center justify-center w-full"
              >
                Browse all blogs
              </span>
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute left-0 top-[89px] h-0 w-full border-t border-white/10"
          data-node-id="5586:20368"
        />

        {/* Blog Posts Grid */}
        <div
          className="flex gap-8 justify-center"
          data-node-id="5586:20362"
        >
          {BLOG_POSTS.slice(0, 4).map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
