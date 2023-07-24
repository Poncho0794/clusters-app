import { signIn } from "next-auth/react"
import styles from "./styles.module.css"
import Image from 'next/image'
import IconButton from "@mui/material/IconButton"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
        <IconButton
        color="info"
        style={{ marginRight: 10 }}
        onClick={() => signIn('auth0', { callbackUrl: '/dashboard' })}
      >
          <AccountCircleIcon fontSize="inherit" />

      </IconButton>
      </div>
    </nav>
  )
}