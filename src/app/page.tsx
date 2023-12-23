import Image from "next/image"
import styles from "../../styles/page.module.scss"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="home">
      <div className={styles.homeWrapper}>
        <Navbar />
      </div>
    </div>
  )
}
