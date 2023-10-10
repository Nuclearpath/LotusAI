import React, { useEffect } from "react";
import { store } from "../lib/store";
import { useSession } from "next-auth/react";

function Unauth() {
  const { name, getAuth } = store();
  const { data: session } = useSession();
  // console.log(session);
  useEffect(() => {
    if (session) {
      getAuth(session);
    }
  }, [session]);
  return (
    <div>
      {name}
      <button
        onClick={(e) => {
          e.preventDefault();
          login("satya");
        }}
      >
        st
      </button>
    </div>
  );
}

export default Unauth;
