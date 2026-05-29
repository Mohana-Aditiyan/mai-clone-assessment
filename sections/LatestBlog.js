import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BLOGS } from "@/constants/blogs";
import { PLACEHOLDER_HREF } from "@/constants/navigation";

/* ──────────────────────────────────────────────
   Column layout — alternating short/tall heights
   matches original myproject.ai mosaic rhythm
   ────────────────────────────────────────────── */
const COLUMNS = [
  { sizes: ["short", "tall"] }, // col 1: short top, tall bottom
  { sizes: ["tall", "short"] }, // col 2: tall top, short bottom
  { sizes: ["short", "tall"] }, // col 3: short top, tall bottom
];

const HEIGHT_CLASS = {
  short: "h-[216px] lg:h-[240px]",
  tall: "h-[272px] lg:h-[300px]",
};

/* ──────────────────────────────────────────────
   Entrance animation per card
   Cards explode outward from center:
   - Col 1 cards start from RIGHT (x: 100%)
   - Col 2 cards start at center (x: 0)
   - Col 3 cards start from LEFT (x: -100%)
   - Top row pushed DOWN (y: 50%)
   - Bottom row pushed UP (y: -50%)
   All half-scale and invisible, then settle into place.
   Sequential 100ms delay per card (col by col, top to bottom).
   ────────────────────────────────────────────── */
function cardVariants(col, row, totalIndex) {
  const xOffsets = ["100%", "0%", "-100%"];
  return {
    hidden: {
      x: xOffsets[col],
      y: row === 0 ? "50%" : "-50%",
      scale: 0.5,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.1 + totalIndex * 0.1,
      },
    },
  };
}

export default function LatestBlog() {
  /* Split BLOGS into 3 columns of 2 — pads with undefined if fewer than 6 entries */
  const blogColumns = [
    [BLOGS[0], BLOGS[1]],
    [BLOGS[2], BLOGS[3]],
    [BLOGS[4], BLOGS[5]],
  ];

  return (
    <section className="section-y bg-surface px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="mx-auto w-full max-w-[1360px]">
        <SectionHeading
          eyebrow="KNOWLEDGE HUB"
          title="Latest Blog"
          subtitle="Our articles cover a range of topics to help you stay informed and make better decisions. Dive into expert advice and stay ahead in the industry with our engaging and informative content."
        />

        {/* ─── Desktop mosaic (md+) ─── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 hidden md:flex md:gap-5"
        >
          {blogColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-1 flex-col gap-5">
              {col.map((blog, rowIdx) => {
                if (!blog) return null;
                const totalIndex = colIdx * 2 + rowIdx;
                const size = COLUMNS[colIdx].sizes[rowIdx];
                return (
                  <motion.div
                    key={blog.title + totalIndex}
                    variants={cardVariants(colIdx, rowIdx, totalIndex)}
                    className={HEIGHT_CLASS[size]}
                  >
                    <BlogCard blog={blog} />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>

        {/* ─── Mobile horizontal scroll (<md) ─── */}
        <div className="mt-14 -mx-4 flex gap-5 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {BLOGS.map((blog, i) => (
            <div
              key={blog.title + i}
              className="h-[280px] w-[75vw] shrink-0 snap-center"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href={PLACEHOLDER_HREF}
            variant="primary"
            className="px-7 py-3.5"
          >
            View All Blogs
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── Individual blog card ──────────────────── */
function BlogCard({ blog }) {
  return (
    <motion.a
      href={blog.href ?? PLACEHOLDER_HREF}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block h-full overflow-hidden rounded-2xl shadow-lg"
    >
      <Image
        src={blog.image}
        alt={blog.title}
        fill
        sizes="(max-width: 768px) 75vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Bottom gradient strip with title —
          hidden by default on desktop, slides up on hover.
          Always visible on mobile. */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#003F6B] via-[#003F6B]/70 to-transparent p-4 transition-transform duration-700 ease-in-out md:translate-y-full md:group-hover:translate-y-0">
        <h3 className="line-clamp-2 text-lg font-semibold capitalize text-white drop-shadow-md">
          {blog.overlay ?? blog.title}
        </h3>
      </div>
    </motion.a>
  );
}