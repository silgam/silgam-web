/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: "/appstore",
        destination:
          "https://apps.apple.com/us/app/실전-감각-실감/id1598576852",
        permanent: false,
      },
      {
        source: "/googleplay",
        destination:
          "https://play.google.com/store/apps/details?id=com.seunghyun.silgam",
        permanent: false,
      },
      {
        source: "/support",
        destination: "https://pf.kakao.com/_Vmxjxbxj",
        permanent: false,
      },
      {
        source: "/kakaotalk",
        destination: "https://pf.kakao.com/_Vmxjxbxj",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/silgam.app",
        permanent: false,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/SilgamOfficial",
        permanent: false,
      },
      {
        source: "/openchat",
        destination: "https://open.kakao.com/o/gS4s3HFe",
        permanent: false,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCCHxrRxmgv_hhgBEUCzpPXw",
        permanent: false,
      },
      {
        source: "/privacy",
        destination:
          "https://silgam.notion.site/b6696d4cb93c4ad48e212534c2c9bf74",
        permanent: false,
      },
      {
        source: "/terms",
        destination:
          "https://silgam.notion.site/7418b4c2f109487b895263830ae979d6",
        permanent: false,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
