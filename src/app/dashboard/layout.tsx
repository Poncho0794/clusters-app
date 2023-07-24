import Navbar from "@/components/Navbar"
import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation';

export default async function Layout({ children }: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  if(!session) redirect('/');
  const { user } = session
  return <Navbar user={user}>
    {children}
  </Navbar>
}
