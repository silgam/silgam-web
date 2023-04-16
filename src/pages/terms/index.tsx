import { useRouter } from "next/router";
import { useEffect } from "react";

import { URLS } from "@/consts/routes";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace(URLS.TERMS_OF_USE);
  }, [router]);

  return <></>;
}
