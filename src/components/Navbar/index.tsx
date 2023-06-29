import styles from "./styles.module.css"
import Image from 'next/image'

export default function Navbar({ children, user }: {
  children: React.ReactNode,
  user: any
}) {
  return (
    <div className={styles.container}>
      <nav className={styles["navbar-container"]}>
        <header>
          <Image
            src={user.image}
            alt="profile image"
            width={70}
            height={70}
            className={styles["profile-image"]}
          />
          <h2>{user.name}</h2>
        </header>
        <div>
          <ul>
            <li> Casas </li>
            <li> Reservas </li>
          </ul>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>

  )
}