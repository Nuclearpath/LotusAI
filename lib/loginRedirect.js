import { useRouter } from "next/router";
import { useEffect } from "react";

export default function loginRedirect(session) {
  const router = useRouter();
  useEffect(() => {
    if (session) {
    } else {
      router.push("/");
    }
  }, [session]);
}
