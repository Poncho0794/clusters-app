"use client";

import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return <>
    <h1>Home</h1>
    <button
      style={{ marginRight: 10 }}
      onClick={() => signIn('auth0', { callbackUrl: '/dashboard' })}
    >
      Sign in
    </button>
  </>
}