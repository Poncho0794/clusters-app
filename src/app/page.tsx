"use client";

import PublicNavabar from "@/components/Navbar/PublicNavbar";
import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return <>
  <PublicNavabar></PublicNavabar>
    <h1>Home</h1>

  </>
}