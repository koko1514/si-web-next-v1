import { NextResponse } from "next/server";

export interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  caption: string;
  timestamp: string;
  permalink: string;
  username?: string;
}

export async function GET() {
  try {
    const beholdUrl = process.env.NEXT_PUBLIC_BEHOLD_URL;
    const igToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

    // 1. If Behold.so JSON URL is configured in .env.local, fetch dynamic real feed
    if (beholdUrl) {
      try {
        const beholdRes = await fetch(beholdUrl, { next: { revalidate: 1800 } });
        if (beholdRes.ok) {
          const data = await beholdRes.json();
          if (Array.isArray(data) && data.length > 0) {
            return NextResponse.json({
              success: true,
              profileStats: { followers: 573, posts: 570, following: 307 },
              posts: data.map((item: any) => ({
                id: item.id,
                media_url: item.mediaUrl || item.sizes?.large?.mediaUrl || item.media_url,
                media_type: item.mediaType || "IMAGE",
                caption: item.caption || "",
                timestamp: item.timestamp ? new Date(item.timestamp).toLocaleDateString("id-ID") : "LIVE",
                permalink: item.permalink || "https://www.instagram.com/hmsi.ithb/",
                username: "hmsi.ithb",
              })),
            });
          }
        }
      } catch (err) {
        console.warn("Behold fetch failed, trying direct Graph API:", err);
      }
    }

    // 2. If Instagram Graph API token is configured in .env.local, fetch live Graph API
    if (igToken) {
      try {
        const statsRes = await fetch(
          `https://graph.instagram.com/me?fields=followers_count,media_count,follows_count&access_token=${igToken}`,
          { next: { revalidate: 3600 } }
        );
        const statsData = await statsRes.json();

        const mediaRes = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${igToken}`,
          { next: { revalidate: 1800 } }
        );
        const mediaData = await mediaRes.json();

        if (mediaData && Array.isArray(mediaData.data) && mediaData.data.length > 0) {
          return NextResponse.json({
            success: true,
            profileStats: {
              followers: statsData?.followers_count || 573,
              posts: statsData?.media_count || 570,
              following: statsData?.follows_count || 307,
            },
            posts: mediaData.data.map((item: any) => ({
              id: item.id,
              media_url: item.media_type === "VIDEO" ? (item.thumbnail_url || item.media_url) : item.media_url,
              media_type: item.media_type,
              caption: item.caption || "",
              timestamp: new Date(item.timestamp).toLocaleDateString("id-ID"),
              permalink: item.permalink || "https://www.instagram.com/hmsi.ithb/",
              username: item.username || "hmsi.ithb",
            })),
          });
        }
      } catch (err) {
        console.warn("Graph API fetch failed, fallback active:", err);
      }
    }

    // 3. Fallback Posts matching real HMSI ITHB posts (AKSI 2026 CONNECT, etc.)
    const fallbackPosts: InstagramPost[] = [
      {
        id: "hmsi-aksi-2026",
        media_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        media_type: "IMAGE",
        caption: "AKSI 2026 CONNECT 🌐✨ (Connecting Data. Connecting People.)\n\nSave the date.txt\n📅 Date: Kamis, 08 Agustus 2026\n⏰ Time: 09.10 - 10.25 WIB\n📍 Location: B333\n\nIkuti keseruan sesi networking dan wawasan teknologi Sistem Informasi bersama HIMA SI ITHB!\n\n#hmsi #siithb #aksi2026 #connect #ithb #bandung",
        timestamp: "08 AGU 2026",
        permalink: "https://www.instagram.com/hmsi.ithb/",
        username: "hmsi.ithb",
      },
      {
        id: "hmsi-farewell-25",
        media_url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        media_type: "CAROUSEL_ALBUM",
        caption: "FAREWELL 25 🎓🎉\n\nMomen pelepasan dan apresiasi bagi kelulusan wisudawan Sistem Informasi ITHB! Terima kasih atas dedikasi dan pengabdian luar biasa bersama HMSI ITHB.\n\n#farewell25 #hmsi #siithb #alumniithb",
        timestamp: "12 JUL 2026",
        permalink: "https://www.instagram.com/hmsi.ithb/",
        username: "hmsi.ithb",
      },
      {
        id: "hmsi-sharing-kp-26",
        media_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        media_type: "IMAGE",
        caption: "SHARING KP 26 💼🚀\n\nSesi berbagi pengalaman Kerja Praktik (KP) & Magang Industri di perusahaan multinasional, implementasi SAP ERP & Enterprise Systems.\n\n#sharingkp26 #hmsi #siithb #magang",
        timestamp: "28 JUN 2026",
        permalink: "https://www.instagram.com/hmsi.ithb/",
        username: "hmsi.ithb",
      },
      {
        id: "hmsi-stugen-26",
        media_url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        media_type: "VIDEO",
        caption: "STUDGEN 26 🎬💡\n\nStudium Generale reguler bersama pimpinan industri dan pakar Sistem Informasi Enterprise Systems.\n\n#stuGen26 #hmsi #siithb #ithb",
        timestamp: "15 MEI 2026",
        permalink: "https://www.instagram.com/hmsi.ithb/",
        username: "hmsi.ithb",
      },
    ];

    return NextResponse.json({
      success: true,
      profileStats: {
        followers: 573,
        posts: 570,
        following: 307,
      },
      posts: fallbackPosts,
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
