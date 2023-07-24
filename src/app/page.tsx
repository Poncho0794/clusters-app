"use client";

import PublicNavabar from "@/components/Navbar/PublicNavbar";
import { signIn, signOut } from "next-auth/react";
import styles from './page.module.css'
import { useHouses } from "@/helpers/fetcher";
import Loading from "@/components/Loading";
import HouseItem from "@/components/HouseItem";
import { House } from "./dashboard/houses/page";
export default function Home() {
  const { houses, error, isLoading } = useHouses()

   console.log(houses)
  return <>
  <PublicNavabar></PublicNavabar>
  <div className={styles["houses-container"]}>
   {isLoading && <Loading />}
   {(!isLoading && houses.length > 0) && houses.map((house: House) => (
    <HouseItem key={house.id} {...house}/>

   ))}
  </div>

  </>
}