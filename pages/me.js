import React, { useEffect } from "react";
import { store } from "../lib/store";
import { useSession } from "next-auth/react";
import MainHeader from "../components/MainHeader";

function Me() {
  const { email, name, getAuth } = store();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      getAuth(session);
    }
  }, [session]);
  return (
    <div>
      <MainHeader></MainHeader>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}

export default Me;
