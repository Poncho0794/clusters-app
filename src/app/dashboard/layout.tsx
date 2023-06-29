import Navbar from "@/components/Navbar"
import { GetServerSideProps } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from 'next/navigation';

export default async function Layout({ children }: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  if(!session) redirect('/');
  const { user } = session
  console.log(user)
  return <Navbar user={user}>
    {children}
  </Navbar>
}
