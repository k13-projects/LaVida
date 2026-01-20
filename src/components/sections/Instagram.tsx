import { useState, useEffect } from "react";
import { menuItems } from "@/data/menuItems";
import Wave from "@/components/common/Wave";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InstagramPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
}

// Behold Feed ID - Replace with your actual Behold feed ID after setup
const BEHOLD_FEED_ID = "YOUR_BEHOLD_FEED_ID";

const Instagram = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  const POSTS_PER_PAGE = 4;

  // Fallback to menu items if Behold isn't configured
  const fallbackImages = menuItems.slice(0, 12).map((item, index) => ({
    id: `fallback-${index}`,
    mediaUrl: `${import.meta.env.BASE_URL}${item.src.replace(/^\//, '')}`,
    permalink: "https://www.instagram.com/lavida.sandiego/",
    caption: item.alt,
  }));

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      // Skip API call if feed ID isn't configured
      if (BEHOLD_FEED_ID === "YOUR_BEHOLD_FEED_ID") {
        setUseFallback(true);
        setPosts(fallbackImages);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://feeds.behold.so/${BEHOLD_FEED_ID}`
        );

        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();

        const formattedPosts: InstagramPost[] = data.map((post: {
          id: string;
          mediaUrl: string;
          permalink: string;
          caption?: string;
        }) => ({
          id: post.id,
          mediaUrl: post.mediaUrl,
          permalink: post.permalink,
          caption: post.caption,
        }));

        setPosts(formattedPosts.slice(0, 12)); // Get up to 12 posts for 3 pages
        setUseFallback(false);
      } catch (error) {
        console.warn("Instagram feed unavailable, using fallback images");
        setUseFallback(true);
        setPosts(fallbackImages);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice(
    currentPage * POSTS_PER_PAGE,
    (currentPage + 1) * POSTS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <>
    <section className="relative bg-primary min-h-[400px] md:min-h-[450px] flex items-center">
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-24">
        {/* Instagram Grid with Navigation */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows - only show if more than one page */}
          {totalPages > 1 && !loading && (
            <>
              <button
                onClick={prevPage}
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
                aria-label="Previous photos"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextPage}
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
                aria-label="Next photos"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </>
          )}

          {/* Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white/20 rounded-lg animate-pulse"
                />
              ))
            ) : (
              currentPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square overflow-hidden rounded-lg group"
                >
                  <img
                    src={post.mediaUrl}
                    alt={post.caption || "Instagram post"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ))
            )}
          </div>

          {/* Page Dots */}
          {totalPages > 1 && !loading && (
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPage
                      ? "bg-secondary w-6"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/lavida.sandiego/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-foreground px-10 py-3 rounded-full font-semibold transition-all"
          >
            FOLLOW US
          </a>
        </div>

        {/* Setup instructions for development */}
        {useFallback && process.env.NODE_ENV === "development" && (
          <p className="text-center text-white/50 text-xs mt-4">
            To connect Instagram: Sign up at behold.so, create a feed, and update BEHOLD_FEED_ID
          </p>
        )}
      </div>

    </section>

    {/* Wave transition from olive to pink */}
    <section className="relative w-full bg-secondary -mt-32 md:-mt-40 lg:-mt-48">
      <svg
        className="w-full h-32 md:h-48 lg:h-56"
        viewBox="0 0 1440 230"
        preserveAspectRatio="none"
        style={{ transform: 'scaleX(-1) scaleY(-1)' }}
      >
        <path
          d="M0,0 L0,150 C200,80 400,50 600,50 C840,50 960,150 1440,150 L1440,230 L0,230 Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </section>
  </>
  );
};

export default Instagram;
