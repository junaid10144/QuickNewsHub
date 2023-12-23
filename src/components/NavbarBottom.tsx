"use client"
import { useState } from "react"
import "../../styles/NavbarBottom.scss"
import { FaSearch } from "react-icons/fa"
import { MdKeyboardArrowDown, MdNavigateNext } from "react-icons/md"

const NavbarBottom = () => {
  const [dropDownOne, setDropDownOne] = useState(false)

  const handleDropdownOne = (e) => {
    setDropDownOne(!dropDownOne)
  }

  return (
    <div className="navbarBottom">
      <div className="navbarBottomWrapper">
        <div className="item" onClick={handleDropdownOne}>
          <span>Home</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
          {dropDownOne && (
            <div className="dropDownMenu1">
              <span>
                <a>Home Default</a>
              </span>
              <span className="active">
                <a>Home Boxed</a>
              </span>
              <span>
                <a>Home RTL</a>
              </span>
              <span>
                <a>Home RTL Boxed</a>
              </span>
              <span>
                <a>
                  Home Versions
                  <MdNavigateNext style={{ fontSize: "20px" }} />
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="item">
          <span>National</span>
        </div>
        <div className="item">
          <span>Financial</span>
        </div>
        <div className="item">
          <span>Entertainment</span>
        </div>
        <div className="item">
          <span>LifeStyle</span>
        </div>
        <div className="item">
          <span>Technology</span>
        </div>
        <div className="item">
          <span>Travel</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
        </div>
        <div className="item">
          <span>Technology</span>
        </div>
        <div className="item">
          <span>Sports</span>
        </div>
        <div className="item">
          <span>Category</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
        </div>
        <div className="item">
          <span>Pages</span>
          <MdKeyboardArrowDown style={{ fontSize: "20px" }} />
        </div>
        <div className="item">
          <FaSearch style={{ fontSize: "15px" }} />
        </div>
      </div>
    </div>
  )
}

export default NavbarBottom
