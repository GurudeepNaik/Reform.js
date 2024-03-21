import { getSessionData } from "@/actions/auth";
import { useEffect, useState } from "react";

export const useSession = () => {
  const [session, setSession] = useState({
    loading: true,
    session: null,
  });
  const getSession = async () => {
    setSession({
      loading: false,
      session: await getSessionData(),
    });
  };

  useEffect(() => {
    getSession();
  }, []);

  return session;
};
