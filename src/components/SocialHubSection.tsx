"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Play, Layers, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  caption: string;
  timestamp: string;
  rawTimestamp?: string;
  permalink: string;
  username?: string;
}

interface RawInstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  caption?: string;
  timestamp: string;
  permalink?: string;
  thumbnail_url?: string;
  username?: string;
}

interface InstagramApiResponse {
  data?: RawInstagramPost[];
}

const mockPosts: InstagramPost[] = [
  {
    id: "1",
    media_url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    media_type: "IMAGE",
    caption: "JUMPSCARE 🚨 except, our lecturers and academic advisors are never this scary! Ingat untuk selalu berkonsultasi mengenai rencana studi Anda semester depan ya! 📝✨\n\nremember to use our website to schedule an appointment with them! 📅\n\n#siithb #akademik #ithb #bandung",
    timestamp: "4 WEEKS AGO",
    permalink: "https://www.instagram.com/sistem.informasi.ithb/",
  },
  {
    id: "2",
    media_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    media_type: "CAROUSEL_ALBUM",
    caption: "Say Hi 👋 to our IS Class of 2026!\n\nIn the fall, all IS first-years are required to take SI-100, a course that specializes in showcasing IS related resources, panels, courses, and more! 🎓🔥\n\n#classof2026 #siithb #nextgeneration",
    timestamp: "4 WEEKS AGO",
    permalink: "https://www.instagram.com/sistem.informasi.ithb/",
  },
  {
    id: "3",
    media_url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    media_type: "VIDEO",
    caption: "Day in the life of a SI ITHB student! 🎬\n\nfeaturing YARI GONZALEZ\n\nEver wondered what a day in the life of an IS student looked like? 💭 Follow our mini-series where our students show us around for a day in the summer! ☀️\n\nMeet Yari: a rising sophomore. This summer, she's interning as an audience engagement and data analyst intern at Public Source. #dayinthelife #studentlife #magang #dataanalyst",
    timestamp: "10 JUL 2025",
    permalink: "https://www.instagram.com/sistem.informasi.ithb/",
  },
  {
    id: "4",
    media_url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80",
    media_type: "IMAGE",
    caption: "Thank you to everyone who came to our IS Kickoff event! 🎈\n\nHere, students from all years were able to connect and introduce themselves to each other through fun games and networking with the chance to win some swag! 🏆\n\nMentors and mentees were also able to meet, kicking off our new program the IS Sphere.\n\nThanks again for coming and we hope to see you at the next event! 🤝 #sikickoff #community #networking",
    timestamp: "5 WEEKS AGO",
    permalink: "https://www.instagram.com/sistem.informasi.ithb/",
  },
  {
    id: "5",
    media_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    media_type: "CAROUSEL_ALBUM",
    caption: "We have exciting news! 📢\n\nThe new Information Systems (IS) minor is now available to undergraduate students across ALL majors, beginning in Fall 2025. Students will have the opportunity to explore how technology intersects with organizations and society.\n\nApply with the link in our bio by May 30th! 📝✨ #magangSAP #erpsystem #siithb",
    timestamp: "15 MEI 2025",
    permalink: "https://www.instagram.com/sistem.informasi.ithb/",
  }
];

const getProfileImage = (username?: string) => {
  if (!username) return "/logo.png";
  
  // Mapping account usernames to their custom profile pictures in public/ folder
  const profilePics: Record<string, string> = {
    "sistem.informasi.ithb": "/logo.png",
    "hmsi.ithb": "/hmsi.ithb.jpg",    // Map to the uploaded hmsi.ithb.jpg file
  };
  
  return profilePics[username] || "/logo.png";
};

const getTruncatedCaption = (text: string) => {
  const lines = text.split('\n');
  if (lines.length > 15) {
    const firstLines = lines.slice(0, 15).join('\n');
    return firstLines.length > 800 ? firstLines.substring(0, 800) + '...' : firstLines + '...';
  }
  if (text.length > 800) {
    return text.substring(0, 800) + '...';
  }
  return text;
};

export function SocialHubSection() {
  const [posts, setPosts] = useState<InstagramPost[]>(mockPosts);
  const [visibleCount, setVisibleCount] = useState(8);
  const [expandedPosts, setExpandedPosts] = useState<Record<string, boolean>>({});
  const [profileStats, setProfileStats] = useState({
    followers: 1350,
    posts: 184,
    following: 92,
  });

  const activeUsername = posts[0]?.username || "hmsi.ithb";
  const activeInstagramUrl = `https://www.instagram.com/${activeUsername}/`;
  const isDifferentFromMain = activeUsername !== "sistem.informasi.ithb";

  const formatStatValue = (value: number) => {
    if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return value.toString();
  };

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const tokens = [
        process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN,
        process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN_2
      ].filter(Boolean) as string[];

      if (tokens.length === 0) return;

      try {
        // Fetch profile stats (followers, posts, following) from the first token
        try {
          const statsResponse = await fetch(
            `https://graph.instagram.com/me?fields=followers_count,media_count,follows_count&access_token=${tokens[0]}`
          );
          const statsData = await statsResponse.json();
          if (statsData && statsData.followers_count !== undefined) {
            setProfileStats({
              followers: statsData.followers_count,
              posts: statsData.media_count,
              following: statsData.follows_count,
            });
          }
        } catch (err) {
          console.error("Failed to fetch Instagram profile stats:", err);
        }

        const fetchPromises = tokens.map(async (token) => {
          try {
            const response = await fetch(
              `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${token}`
            );
            const data = (await response.json()) as InstagramApiResponse;
            return data.data || [];
          } catch (err) {
            console.error("Error fetching for token:", err);
            return [];
          }
        });

        const results = await Promise.all(fetchPromises);
        const combinedRawPosts = results.flat();

        if (combinedRawPosts.length > 0) {
          const formattedPosts = combinedRawPosts.map((item: RawInstagramPost) => {
            const date = new Date(item.timestamp);
            const timeDiff = Math.abs(new Date().getTime() - date.getTime());
            const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            let displayTime = item.timestamp;
            if (diffDays < 7) {
              displayTime = `${diffDays} DAYS AGO`;
            } else if (diffDays < 30) {
              displayTime = `${Math.floor(diffDays / 7)} WEEKS AGO`;
            } else {
              displayTime = date.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).toUpperCase();
            }
            return {
              id: item.id,
              media_url: item.media_type === "VIDEO" ? (item.thumbnail_url || item.media_url) : item.media_url,
              media_type: item.media_type,
              caption: item.caption || "",
              timestamp: displayTime,
              rawTimestamp: item.timestamp,
              permalink: item.permalink || "https://www.instagram.com/sistem.informasi.ithb/",
              username: item.username || "sistem.informasi.ithb",
            };
          });

          // Sort combined posts by rawTimestamp (latest first)
          formattedPosts.sort((a, b) => {
            const timeA = a.rawTimestamp ? new Date(a.rawTimestamp).getTime() : 0;
            const timeB = b.rawTimestamp ? new Date(b.rawTimestamp).getTime() : 0;
            return timeB - timeA;
          });

          setPosts(formattedPosts);
        }
      } catch (error) {
        console.error("Failed to fetch Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, posts.length));
  };

  const handleShare = (permalink: string) => {
    navigator.clipboard.writeText(permalink);
    toast.success("Link berhasil disalin ke clipboard!");
  };

  return (
    <section
      id="social"
      className="section-padding bg-card relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 border border-pink-500/20 text-pink-600 text-sm font-medium mb-4">
            <Instagram className="w-4 h-4 animate-pulse" />
            @{activeUsername}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Life at <span className="gradient-text">SI ITHB</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Ikuti perjalanan mahasiswa kami melalui momen-momen berharga di kampus
          </p>
        </div>

        <div className="flex flex-col items-center mb-16 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl">
            {/* Button 1: Active dynamic account */}
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-foreground/30 rounded-full px-8 py-6 font-semibold inline-flex items-center gap-2 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open(activeInstagramUrl, "_blank")}
            >
              <Instagram className="w-5 h-5 text-foreground group-hover:text-secondary-foreground" />
              Follow @{activeUsername}
              <ExternalLink className="w-4 h-4 text-foreground group-hover:text-secondary-foreground" />
            </Button>

            {/* Button 2: Also follow @sistem.informasi.ithb (only if active account is different) */}
            {isDifferentFromMain && (
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-foreground/20 rounded-full px-8 py-6 font-semibold inline-flex items-center gap-2 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300 w-full sm:w-auto text-muted-foreground"
                onClick={() => window.open("https://www.instagram.com/sistem.informasi.ithb/", "_blank")}
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                Follow juga @sistem.informasi.ithb
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-white" />
              </Button>
            )}
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 w-full max-w-xl border-t border-b border-border/50 py-6">
            {[
              { value: formatStatValue(profileStats.followers), label: "Followers" },
              { value: formatStatValue(profileStats.posts), label: "Posts" },
              { value: formatStatValue(profileStats.following), label: "Following" },
            ].map((stat, index) => (
              <div key={index} className="text-center min-w-[80px]">
                <div className="text-2xl md:text-3xl font-bold text-foreground font-space">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Masonry Layout Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {posts.slice(0, visibleCount).map((post) => (
            <div
              key={post.id}
              className="break-inside-avoid bg-card border border-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-pink-500/20 transition-all duration-300 flex flex-col mb-6"
            >
              {/* Media Container */}
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block overflow-hidden bg-muted cursor-pointer"
              >
                <Image
                  src={post.media_url}
                  alt="Instagram Post"
                  width={600}
                  height={600}
                  unoptimized
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Media Indicators */}
                {post.media_type === "VIDEO" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                )}
                {post.media_type === "CAROUSEL_ALBUM" && (
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                    <Layers className="w-4 h-4" />
                  </div>
                )}
                
                {/* External link indicator */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  {/* Account Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-[1.5px] flex items-center justify-center shrink-0">
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                        <Instagram className="w-3.5 h-3.5 text-pink-500" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      {post.username || "sistem.informasi.ithb"}
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                    <p className="whitespace-pre-line inline">
                      {post.caption.length > 800 || post.caption.split('\n').length > 15
                        ? (expandedPosts[post.id] ? post.caption : getTruncatedCaption(post.caption))
                        : post.caption}
                    </p>
                    {(post.caption.length > 800 || post.caption.split('\n').length > 15) && (
                      <button
                        onClick={() => setExpandedPosts(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                        className="text-pink-500 hover:text-pink-600 font-semibold text-xs ml-1.5 focus:outline-none inline-block align-baseline"
                      >
                        {expandedPosts[post.id] ? "Sembunyikan" : "Selengkapnya"}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <Image
                      src={getProfileImage(post.username)}
                      alt={post.username || "Instagram User"}
                      width={24}
                      height={24}
                      className="rounded-full object-cover border border-border"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/logo.png";
                      }}
                    />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-foreground leading-none">
                        @{post.username || "sistem.informasi.ithb"}
                      </span>
                      <span className="text-[8px] text-muted-foreground mt-0.5">
                        {post.timestamp}
                      </span>
                    </div>
                  </div>

                  {/* Share Link Button */}
                  <div className="shrink-0">
                    <button
                      onClick={() => handleShare(post.permalink)}
                      className="w-7 h-7 rounded bg-muted hover:bg-secondary hover:text-secondary-foreground flex items-center justify-center text-muted-foreground transition-all duration-300"
                      aria-label="Copy Link"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < posts.length && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-border hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 font-space text-sm"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
