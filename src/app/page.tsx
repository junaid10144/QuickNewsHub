import Image from "next/image"
import styles from "../../styles/page.module.scss"
import NavbarTop from "@/components/NavbarTop"
import AdvertTop from "@/components/AdvertTop"
import NavbarBottom from "@/components/NavbarBottom"

export default function Home() {
  return (
    <div className="home">
      <div className={styles.homeWrapper}>
        <NavbarTop />
        <AdvertTop />
        <NavbarBottom />
      </div>
    </div>
  )
}
