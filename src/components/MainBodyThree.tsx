"use client"
import { HealthFitness, LifeStyle } from "@/app/category"
import "../../styles/MainBodyThree.scss"
import StyleOne from "./StyleOne"
import StyleTwo from "./StyleTwo"

const MainBodyThree = () => {
  return <div className="mainBodyThree">
    <div className="mainBodyThreeWrapper">
        <div className="item">
            <StyleOne {...HealthFitness}/>
        </div>
        <div className="item">
            <StyleTwo {...LifeStyle}/>
        </div>
        <div className="item"></div>
    </div>
  </div>
}

export default MainBodyThree
