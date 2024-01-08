"use client"
import { Technology, WorldNews } from "@/app/category"
import "../../styles/MainBody.scss"
import StyleOne from "./StyleOne"
import StyleTwo from "./StyleTwo"
import Widget from "./Widget"
import { FaRegEnvelopeOpen } from "react-icons/fa"
import { RiSendPlaneFill } from "react-icons/ri"

const MainBody = () => {
  return (
    <div className="mainBody">
      <div className="mainBodyWrapper">
        <div className="item">
          <StyleOne {...WorldNews} />
        </div>
        <div className="item">
          <StyleTwo {...Technology} />
        </div>
        <div className="item">
          <Widget />
        </div>
      </div>

      <div className="advertMiddleWrapper">
        <div className="advert">
          <a>
            <img src="assets/advertttt.gif" alt="Advertisement" />
          </a>
        </div>

        <div className="newsLetter">
          <div className="top">
            <h2>Get NewsLetter</h2>
            <FaRegEnvelopeOpen className="icon" />
          </div>
          <div className="bottom">
            <div className="bottomWrapeer">
              <div className="content">
                <p>
                  Subscribe to our newsletter to get latest news, popular news
                  and exclusive updates.
                </p>
              </div>
              <form>
                <div className="formInput">
                  <input type="email" name="email" placeholder="E-mail address" autoComplete="off" required className="formControl"/>
                  <button type="submit" className="button">
                    <RiSendPlaneFill style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody
