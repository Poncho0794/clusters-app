import styles from "./styles.module.css"
export default function Navbar({ children }: {
  children: React.ReactNode
}) {
  console.log(styles)
  return (
    <div className={styles.container}>
      <nav className={styles["navbar-container"]}>
        <header>
          <img />
          <h2>User Name</h2>
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