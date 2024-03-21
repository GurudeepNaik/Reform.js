"use client";
import { useSession } from "@/hooks/useSession";
import { logger } from "@/lib/utils";

const Page = () => {
  const { session, loading } = useSession();
  // logger(session, loading);
  return <div>Dashboard</div>;
};

export default Page;
