import HeroSection from '@/components/HeroSection'
import StatsBanner from '@/components/StatsBanner'
import MetricsDetails from '@/components/MetricsDetails'
import NewsletterGrowth from '@/components/NewsletterGrowth'
import NewsletterGrowthChart from '@/components/NewsletterGrowthChart'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import BlogHub from '@/components/BlogHub'
import TMDailySpecial from '@/components/TMDailySpecial'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import OurMetrics from '@/components/OurMetrics'
import AsFeaturedOn from '@/components/AsFeaturedOn'
import TrustedByProjects from '@/components/TrustedByProjects'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1116]">
      {/* Hero Section - Node ID: 5586:20043 */}
      <HeroSection />

      {/* Newsletter Growth Chart - Node ID: 5586:20106 */}
      <NewsletterGrowth />

      {/* Stats Banner - Node ID: 5586:19996 */}
      <div className="relative z-10" style={{ marginTop: '-50px'}}>
        <StatsBanner />
      </div>

      {/* Metrics Details Section - Node ID: 5655:18135 (w=768, centered) */}
      <MetricsDetails />

      {/* Sponsorship Packages Section - Node ID: 5655:18134 (w=954, centered) */}
      <Packages />

      {/* Newsletter Growth Chart Section - Node ID: 5586:20391 */}
      <NewsletterGrowthChart />

      {/* Testimonials Section - Node ID: 5622:20811 */}
      <Testimonials />

      {/* Blog Hub Section - Node ID: 5586:20359 */}
      <BlogHub />

      {/* TM Daily Special Section - Node ID: 5586:20326 */}
      <TMDailySpecial />

      {/* Our Metrics - Node ID: 5658:18163 */}
      <OurMetrics />

      {/* As Featured On Section - Node ID: 5624:20845 */}
      <AsFeaturedOn />

      {/* Trusted By Projects Section - Node ID: 5655:18136 */}
      <TrustedByProjects />

      {/* Final CTA Section - Node ID: 5626:20962 */}
      <FinalCTA />

      {/* FAQ Section - Node ID: 5662:18930 */}
      <FAQ />


      {/* All sections completed! */}
      {/*
        Next sections to implement:
        - Stats/Metrics Section (Node ID: 5655:18135)
        - Newsletter Growth Chart (Node ID: 5586:20106)
        - Sponsorship Packages (Node ID: 5655:18134)
        - Testimonials (Node ID: 5622:20811)
        - Blog Hub (Node ID: 5586:20359)
        - Final CTA (Node ID: 5626:20962)
        - FAQ (Node ID: 5662:18930)
      */}
    </main>
  )
}
