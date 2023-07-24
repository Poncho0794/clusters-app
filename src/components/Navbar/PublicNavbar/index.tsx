import { signIn } from "next-auth/react"
import styles from "./styles.module.css"
import Image from 'next/image'

export default function PublicNavabar() {
  return (
    <nav className={styles["navbar-container"]}>
      <div className={styles["logo-container"]}>
        <Image 
        src="/clusters_logo.svg"
        width={56}
        height={48}
        alt="Clusters logo" 
        />
      </div>
      <div className={styles["signin-container"]}>
        <button
        style={{ marginRight: 10 }}
        onClick={() => signIn('auth0', { callbackUrl: '/dashboard' })}
      >
        Sign in
      </button>
      </div>
    </nav>
  )
}