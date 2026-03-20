"use client";

import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const instagramPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    likes: 234,
    comments: 18,
    caption: "Workshop Data Science 📊",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    likes: 456,
    comments: 32,
    caption: "Team collaboration ✨",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    likes: 189,
    comments: 12,
    caption: "Coding bootcamp 💻",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80",
    likes: 567,
    comments: 45,
    caption: "Award ceremony 🏆",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    likes: 321,
    comments: 28,
    caption: "Tech conference 🎤",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    likes: 412,
    comments: 36,
    caption: "Hackathon winners 🚀",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    likes: 278,
    comments: 21,
    caption: "Startup pitch day 💡",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
    likes: 543,
    comments: 42,
    caption: "Study abroad program 🌍",
  },
];

export function SocialHubSection() {
  return (
    <section
      id="social"
      className="section-padding bg-card relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10 border border-pink-500/20 text-pink-600 text-sm font-medium mb-4">
            <Instagram className="w-4 h-4" />
            @sistem.informasi.ithb
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Life at <span className="gradient-text">SI ITHB</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ikuti perjalanan mahasiswa kami melalui momen-momen berharga di
            kampus
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-dark-surface/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                {/* Stats */}
                <div className="flex items-center gap-6 mb-3">
                  <div className="flex items-center gap-2 text-dark-surface-foreground">
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark-surface-foreground">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">{post.comments}</span>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-dark-surface-foreground/80 text-sm text-center px-4">
                  {post.caption}
                </p>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="group border-2"
            onClick={() =>
              window.open(
                "https://www.instagram.com/sistem.informasi.ithb/",
                "_blank",
              )
            }
          >
            <Instagram className="w-5 h-5" />
            Follow @sistem.informasi.ithb
            <ExternalLink className="w-4 h-4 opacity-100 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "5.2K", label: "Followers" },
            { value: "1.8K", label: "Posts" },
            { value: "850", label: "Following" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground font-space">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
