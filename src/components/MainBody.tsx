"use client"
import { WorldNews } from "@/app/category"
import "../../styles/MainBody.scss"
import StyleOne from "./StyleOne"
import StyleTwo from "./StyleTwo"
import Widget from "./Widget"

const MainBody = () => {
  return <div className="mainBody">
    <div className="mainBodyWrapper">
        <div className="item">
          <StyleOne { ...WorldNews } />
        </div>
        <div className="item">
          <StyleTwo />
        </div>
        <div className="item">
          <Widget />
        </div>
    </div>
  </div>
}

export default MainBody
