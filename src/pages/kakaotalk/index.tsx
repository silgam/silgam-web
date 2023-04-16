import { useRouter } from "next/router";
import { useEffect } from "react";

import { ROUTES } from "@/consts/routes";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace(ROUTES.SUPPORT);
  }, [router]);

  return <></>;
}
