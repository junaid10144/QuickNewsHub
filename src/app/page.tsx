import Image from "next/image"
import styles from "../../styles/page.module.scss"
import NavbarTop from "@/components/NavbarTop"
import AdvertTop from "@/components/AdvertTop"
import NavbarBottom from "@/components/NavbarBottom"
import HotLinks from "@/components/HotLinks"
import MainContent from "@/components/MainContent"
import MainBody from "@/components/MainBody"
import MainBodyTwo from "@/components/MainBodyTwo"
import MainBodyThree from "@/components/MainBodyThree"

export default function Home() {
  return (
    <div className="home">
      <div className={styles.homeWrapper}>
        <NavbarTop />
        <AdvertTop />
        <NavbarBottom />
        <HotLinks/>
        <MainContent/>
        <MainBody/>
        <MainBodyTwo/>
        <MainBodyThree/>
      </div>
    </div>
  )
}
