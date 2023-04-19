import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "@/components/common/Layout";
import { URLS } from "@/consts/routes";

export default function Page() {
  const router = useRouter();

  const getOS = () => {
    const userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"];

    let os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = "Mac OS";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = "iOS";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = "Windows";
    } else if (/Android/.test(userAgent)) {
      os = "Android";
    } else if (!os && /Linux/.test(platform)) {
      os = "Linux";
    }

    return os;
  };

  useEffect(() => {
    const os = getOS();
    if (os == "iOS" || os == "Mac OS") {
      router.replace(URLS.APP_STORE);
    } else {
      router.replace(URLS.GOOGLE_PLAY);
    }
  }, [router]);

  return <Layout hideHeader hideFooter />;
}
