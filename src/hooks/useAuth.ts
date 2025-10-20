"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

export const useAuth = () => {
  const [isAuthenticated, setAuth] = useState(false);
  const [myInfo, setMyInfo] = useState({});
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setAuth(true);
    setMyInfo(user);
  }, []);

  const logout = async () => {
    const res = await axiosPublic.post(
      `/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    console.log("logout clicked", res);

    localStorage.removeItem("user");
    setAuth(false);
    setMyInfo({});
    router.push("/login");
  };

  return { isAuthenticated, logout, myInfo };
};
