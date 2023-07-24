"use client"
import { signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Page() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });
  if (status === "loading") {
    return "Loading"
  }
  return <>
    <h1>Dashboard page</h1>
    <button style={{ marginRight: 10 }} onClick={() => signOut({ callbackUrl: '/' })}>
        Sign Out
      </button>
  </>
  
}