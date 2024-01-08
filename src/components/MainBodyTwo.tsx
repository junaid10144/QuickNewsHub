"use client"
import { Finance, Sports } from "@/app/category"
import "../../styles/MainBodyTwo.scss"
import StyleOne from "./StyleOne"
import StyleTwo from "./StyleTwo"
import { FaRegNewspaper } from "react-icons/fa"

const MainBodyTwo = () => {
  return (
    <div className="mainBodyTwo">
      <div className="mainBodyTwoWrapper">
        <div className="styleOne1">
          <StyleTwo {...Finance} />
        </div>
        <div className="styleTwo2">
          <StyleOne {...Sports}/>
        </div>
        <div className="styleThree">
          <div className="widgets">
            <div className="widgetTitle">
              <h2>Featured News</h2>
              <FaRegNewspaper className="icon"/>
            </div>

            <div className="list">
              <div className="top">
                <ul>
                  <li><a className="hotNews">Hot News</a></li>
                  <li className="active"><a className="trendyNews">Trendy News</a></li>
                  <li><a className="mostWatched">Most Watched</a></li>
                </ul>
              </div>
              <div className="bottom">
                <div className="item">
                  <div className="left">
                    <img src="assets/news-widget-01.jpg" alt="" />
                  </div>
                  <div className="right">
                    <ul className="nav">
                      <li>Huntu Raya</li>
                      <li>20 Dec 2023</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe!</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="left">
                    <img src="assets/news-widget-02.jpg" alt="" />
                  </div>
                  <div className="right">
                    <ul className="nav">
                      <li>Huntu Raya</li>
                      <li>20 Dec 2023</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe!</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="left">
                    <img src="assets/news-widget-03.jpg" alt="" />
                  </div>
                  <div className="right">
                    <ul className="nav">
                      <li>Huntu Raya</li>
                      <li>20 Dec 2023</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe!</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="left">
                    <img src="assets/news-widget-04.jpg" alt="" />
                  </div>
                  <div className="right">
                    <ul className="nav">
                      <li>Huntu Raya</li>
                      <li>20 Dec 2023</li>
                    </ul>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBodyTwo
