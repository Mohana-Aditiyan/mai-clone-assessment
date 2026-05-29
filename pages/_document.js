import { Html, Head, Main, NextScript } from "next/document";

/* ────────────────────────────────────────────────────────────
   SITE CONSTANTS — edit these in one place
   ──────────────────────────────────────────────────────────── */
const SITE_URL = "https://myproject.ai";
const SITE_NAME = "MAI";
const SITE_LONG_NAME = "Myproject.ai";
const SITE_TAGLINE = "Find Trusted Stonemasons & Verified Tradespeople in UK";

/* Crafted from your real service catalogue (SERVICES + HERO_ROTATING_PHRASES) —
   long-tail UK trade keywords, not generic filler. */
const SITE_DESCRIPTION =
  "Post your project free on MAI — UK's AI-powered platform connecting homeowners with verified stonemasons, worktop fitters, stone fabricators, tile suppliers, and tradespeople. Get competitive quotes from rated professionals with milestone-secured payments.";

const SITE_KEYWORDS = [
  // Primary intent
  "find tradespeople UK",
  "post a project UK",
  "verified tradespeople",
  "hire stonemasons UK",
  "trusted builders UK",
  // Stone specialists (your core vertical)
  "stonemasons UK",
  "stone slab supplier",
  "stone fabricators",
  "worktop fitters",
  "worktop fabricators",
  "stone repairs",
  "natural stone installation",
  "engineered stone installation",
  "granite worktops UK",
  "marble worktops UK",
  "quartz worktops UK",
  "dry stone walling",
  "monument masons",
  // Adjacent trades
  "kitchen installers",
  "kitchen installation London",
  "bathroom designers",
  "bathroom tiling",
  "tile suppliers UK",
  "tiling services",
  "fireplace surrounds",
  "firehearth fitters",
  "wall cladding",
  "internal wall insulation",
  "external wall insulation",
  "interior decorators",
  "roofing services UK",
  "flooring specialists",
  "KBB design",
  "driveways UK",
  // Product
  "AI-matched traders",
  "milestone secured payments",
  "trade matching platform",
  "post construction project",
].join(", ");

/* OG/Twitter card image — create a 1200x630 JPG/PNG at /public/og-image.jpg.
   Falls back to logo if you haven't generated it yet. */
const SOCIAL_IMAGE = `${SITE_URL}/og-image.jpg`;

/* ────────────────────────────────────────────────────────────
   STRUCTURED DATA (JSON-LD) — rich snippets eligibility
   ──────────────────────────────────────────────────────────── */

/* Organization — for knowledge panel and brand signals */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_LONG_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.webp`,
  description: SITE_DESCRIPTION,
  foundingDate: "2024",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  sameAs: [
    // Add when live:
    // "https://www.facebook.com/myprojectai",
    // "https://www.linkedin.com/company/myprojectai",
    // "https://twitter.com/myprojectai",
    // "https://www.instagram.com/myprojectai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    areaServed: "GB",
    availableLanguage: ["English"],
  },
};

/* WebSite — enables sitelinks search box in Google */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_LONG_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: SITE_LONG_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/logo.webp`,
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/* ProfessionalService — local SEO for UK trades vertical */
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: SITE_LONG_NAME,
  image: `${SITE_URL}/assets/logo.webp`,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  priceRange: "££",
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "AdministrativeArea", name: "England" },
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "AdministrativeArea", name: "Scotland" },
    { "@type": "AdministrativeArea", name: "Wales" },
  ],
  serviceType: [
    "Stone Slab Supply",
    "Natural Stone Installation",
    "Engineered Stone Installation",
    "Worktop Fitting",
    "Tiling Services",
    "Fireplace Surrounds",
    "Kitchen Installation",
    "Bathroom Installation",
    "Stone Repairs",
    "Cladding",
    "Wall Insulation",
    "Roofing",
    "Flooring",
    "Driveways",
    "Interior Decorating",
    "Monument Masonry",
    "Dry Stone Walling",
    "KBB Design",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trade Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Matched Trader Discovery",
          description:
            "Intelligent matching engine that connects your project with verified tradespeople based on skills, availability, and location.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Milestone-Secured Payments",
          description:
            "Protected payment system that releases funds only when agreed project milestones are met.",
        },
      },
    ],
  },
};

export default function Document() {
  return (
    <Html lang="en-GB">
      <Head>
        {/* ═══ Character & Document ═══ */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, email=no, address=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ═══ Core SEO Meta ═══ */}
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="keywords" content={SITE_KEYWORDS} />
        <meta name="author" content={SITE_LONG_NAME} />
        <meta name="publisher" content={SITE_LONG_NAME} />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="generator" content="Next.js" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="3 days" />
        <meta
          name="copyright"
          content={`© ${new Date().getFullYear()} ${SITE_LONG_NAME}. All rights reserved.`}
        />

        {/* ═══ Robots — explicit crawler directives ═══ */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="bingbot" content="index, follow" />

        {/* ═══ Geographic Targeting (UK) ═══ */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="ICBM" content="54.7023545, -3.2765753" />
        <meta name="geo.position" content="54.7023545;-3.2765753" />

        {/* ═══ Canonical & Language Alternates ═══ */}
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="en-gb" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

        {/* ═══ Theme & Browser Chrome ═══ */}
        <meta name="theme-color" content="#1F5CAC" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0F2238" media="(prefers-color-scheme: dark)" />
        <meta name="msapplication-TileColor" content="#1F5CAC" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="color-scheme" content="light" />

        {/* ═══ Apple iOS / PWA ═══ */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* ═══ Open Graph (Facebook, LinkedIn, WhatsApp, Slack) ═══ */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_LONG_NAME} />
        <meta property="og:title" content={`${SITE_LONG_NAME} | ${SITE_TAGLINE}`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta property="og:image:secure_url" content={SOCIAL_IMAGE} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content={`${SITE_LONG_NAME} — UK's AI-powered platform for verified stonemasons, fabricators, and tradespeople`}
        />

        {/* ═══ Twitter Card ═══ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myprojectai" />
        <meta name="twitter:creator" content="@myprojectai" />
        <meta name="twitter:title" content={`${SITE_LONG_NAME} | ${SITE_TAGLINE}`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta
          name="twitter:image:alt"
          content={`${SITE_LONG_NAME} — UK's trusted trade matching platform`}
        />

        {/* ═══ Favicons & App Icons ═══ */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* ═══ PWA Manifest ═══ */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* ═══ Performance — Preconnect to Third-Party Origins ═══ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="preconnect"
          href="https://d2iyhd3v3rvz2k.cloudfront.net"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://d2iyhd3v3rvz2k.cloudfront.net" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* ═══ Fonts ═══ */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* ═══ Sitemap & RSS (hints for crawlers) ═══ */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ═══ Structured Data (JSON-LD) — rich snippet eligibility ═══ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}