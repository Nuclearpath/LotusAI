import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { store } from "../lib/store";

import React, { useEffect } from "react";

function Chatlist() {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) {
      if (session.user.role == "mod") {
      } else {
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }, [session]);
  return <div>chatlist</div>;
}

export default Chatlist;
