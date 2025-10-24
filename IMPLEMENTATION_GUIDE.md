# Token Metrics Sponsorship Landing Page - Implementation Guide

## Overview
This document provides a comprehensive implementation guide for Token Metrics sponsorship landing page based on Figma design. The page is designed to promote sponsorship opportunities with Token Metrics and showcase their reach to crypto-native audiences.

## Tech Stack
- **Framework**: Next.js with React
- **Styling**: Tailwind CSS (as specified in project requirements)
- **Theme Colors**:
  - Primary: Token Metrics Yellow `#FFCF30` (matches `#ffd60a` in design)
  - Background: Gradient with black and dark blue colors
  - Text: White with yellow accents

## Page Structure & Implementation Status

### ✅ COMPLETED SECTIONS:

#### 1. Hero Section (Node ID: 5586:20043) - ✅ COMPLETED
**Position**: Top of page, centered content
**Component**: `components/HeroSection.tsx`

#### 2. Newsletter Growth Chart (Node ID: 5586:20106) - ✅ COMPLETED
**Position**: Below hero, above stats banner
**Component**: `components/NewsletterGrowth.tsx`

#### 3. Stats Banner (Node ID: 5586:19996) - ✅ COMPLETED
**Position**: Below newsletter growth
**Component**: `components/StatsBanner.tsx`

#### 4. Big Numbers Section (Node ID: 5655:18135) - ✅ COMPLETED
**Position**: Below stats banner
**Component**: `components/MetricsDetails.tsx`

#### 5. Sponsorship Packages (Node ID: 5655:18134) - ✅ COMPLETED
**Position**: Below metrics details
**Component**: `components/Packages.tsx`
**Includes**:
- Blog Features (Node ID: 5662:18861) - Link Insertion, Guest Post
- YouTube Features (Node ID: 5662:18860) - Livestream Ad, Video Feature, Interview, Dedicated Video
- Newsletter Placements (Node ID: 5662:18859) - Tail Placement, Top Header, Full Issue Takeover, Main Feature
- Research Platform (Node ID: 5662:18858) - Full Issue Takeover

---

### 🔄 PENDING SECTIONS (In Correct Order):

#### 6. Newsletter Growth Detail Section (Node ID: 5586:20391) - 🔄 NEXT
**Position**: After sponsorship packages
**Components**:
- Title: "TM Newsletter readers by numbers"
- Description: "Tell your story to crypto's most engaged readers — ultimate decision-makers, link clickers, and early on-chain adopters."
- Larger detailed growth chart with Y-axis (200K, 150K, 100K, 50K, 0) and X-axis (Q1-Q4 2024)

#### 7. Testimonials Section (Node ID: 5622:20811) - 🔄 PENDING
**Position**: After newsletter growth detail
**Components**: 3 testimonial cards with ratings
- Title: "What Our Readers Say"
- Subtitle: "Join thousands of satisfied readers and successful advertisers"
- Testimonials from Justin V., Pamela B., Michael C.

#### 8. Blog Hub Section (Node ID: 5586:20359) - 🔄 PENDING
**Position**: After testimonials
**Components**: 4 blog post cards
- Title: "Our Blog Hub"
- Subtitle: "Insights, research, and trends to help you invest smarter."
- Posts: "Top Crypto Trading Platforms", "Token Metrics AI Raises...", "Top Solana Projects...", "Top Crypto Trading Platforms..."

#### 9. What Makes TM Daily Special Section (Node ID: 5586:20326) - 🔄 PENDING
**Position**: After blog hub
**Components**: 3 differentiator cards
- Title: "What makes TM Daily special?"
- Cards: "For crypto natives, by crypto", "A diverse audience of crypto leaders", "Actionable insights & alpha"

#### 10. Metrics Details Section (Node ID: 5658:18163) - 🔄 PENDING
**Position**: After TM Daily special section
**Components**: Performance metrics display
- Title: "Our Metrics"
- Side image: Chart/graphic illustration
- Detailed metrics for: Link Insertion, Guest Post, YouTube, Newsletter, Research

#### 11. As Featured On Section (Node ID: 5624:20845) - 🔄 PENDING
**Position**: After metrics details, lower section
**Components**: Featured media logos
- Title: "As Featured On"
- 5 media logos in horizontal row

#### 12. Trusted Projects Section (Node ID: 5655:18136) - 🔄 PENDING
**Position**: Above final CTA
**Components**: Partner/company logos
- Title: "Trusted by leading projects"
- 6 partners in 2x3 grid: Polygon, Multicoin Capital, Dragonfly, Davincij15, LayerZero, Avalanche

#### 13. Final CTA Section (Node ID: 5626:20962) - 🔄 PENDING
**Position**: Final section before FAQ
**Components**: Call-to-action with robot image
- Title: "Let's Build Together"
- Description: "Join most successful crypto projects advertising with Token Metrics. Reach our engaged, crypto-native audience and drive real results."
- Buttons: "Get Started Today", secondary button
- Contact info: info@tokenmetrics.com, tokenmetrics.com

#### 14. FAQ Section (Node ID: 5662:18930) - 🔄 PENDING
**Position**: Final section of page
**Components**: Frequently asked questions
- Title: "FAQs"
- 5 collapsible FAQ items:
  1. "Do you offer dofollow links?"
  2. "How fast can we go live?"
  3. "What do you report?"
  4. "What if rankings change?"
  5. "Can we use affiliate links?"

---

## Remaining Implementation Order:
1. ✅ Hero Section
2. ✅ Newsletter Growth Chart
3. ✅ Stats Banner
4. ✅ Big Numbers Section
5. ✅ Sponsorship Packages
6. 🔄 Newsletter Growth Detail Section
7. 🔄 Testimonials Section
8. 🔄 Blog Hub Section
9. 🔄 What Makes TM Daily Special Section
10. 🔄 Metrics Details Section
11. 🔄 As Featured On Section
12. 🔄 Trusted Projects Section
13. 🔄 Final CTA Section
14. 🔄 FAQ Section

## Design System

### Colors
- **Primary Yellow**: #FFCF30 (or #ffd60a)
- **Background**: #0D1116 (exact background color for entire page)
- **White**: #FFFFFF
- **Text Gray**: #9ca8b7, #b7b49c (for secondary text)
- **Card Background**: rgba(255,255,255,0.05) to rgba(255,255,255,0.08)
- **Premium Card Background**: rgba(255,214,10,0.16)

### Typography
- **Headlines**: Articulat CF Medium/Demi Bold
- **Body**: Articulat CF Regular
- **Accent**: Demi Bold for emphasis
- **Italic**: Regular Oblique for testimonials

### Spacing
- **Card Padding**: 24px standard, 26.25px for package cards
- **Gap**: 16px-32px between elements
- **Border Radius**: 8px-12px for cards
- **Border Width**: 0.75px standard

### Effects
- **Backdrop Blur**: 5px-25px for various elements
- **Gradients**: Background gradients
- **Shadows**: Subtle shadows on cards
- **Hover**: Scale effects and color transitions

### Icons
- Use Streamline icons for consistency
- Optimize images for web performance
- Fallbacks for external images

### Performance
- Lazy load images below fold
- Optimize chart rendering
- Minimize bundle size
- Smooth scrolling between sections

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance

This implementation guide provides all necessary details to recreate Token Metrics sponsorship landing page exactly as designed in Figma.