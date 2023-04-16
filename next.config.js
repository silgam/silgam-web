/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  async rewrites() {
    return [
      {
        source: "/products/pass2024",
        destination: "/static/html/pass2024.html",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/appstore",
        destination:
          "https://apps.apple.com/us/app/실전-감각-실감/id1598576852",
        permanent: true,
      },
      {
        source: "/googleplay",
        destination:
          "https://play.google.com/store/apps/details?id=com.seunghyun.silgam",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://pf.kakao.com/_Vmxjxbxj",
        permanent: true,
      },
      {
        source: "/kakaotalk",
        destination: "https://pf.kakao.com/_Vmxjxbxj",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/silgam.app",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/SilgamOfficial",
        permanent: true,
      },
      {
        source: "/openchat",
        destination: "https://open.kakao.com/o/gS4s3HFe",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCCHxrRxmgv_hhgBEUCzpPXw",
        permanent: true,
      },
      {
        source: "/privacy",
        destination:
          "https://silgam-app.notion.site/b6696d4cb93c4ad48e212534c2c9bf74",
        permanent: true,
      },
      {
        source: "/terms",
        destination:
          "https://silgam-app.notion.site/7418b4c2f109487b895263830ae979d6",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
