"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token) router.push("/login");
  }, [token]);

  if (!token) return <p className="text-center mt-10">Redirecting...</p>;
  return <>{children}</>;
}
