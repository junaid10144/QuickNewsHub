"use client"
import { useState } from "react"
import "../../styles/NavbarBottom.scss"
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch } from "react-icons/fa"
import {
    MdFavoriteBorder,
  MdFlashOn,
  MdKeyboardArrowDown,
  MdNavigateNext,
  MdStarBorder,
  MdVisibility,
} from "react-icons/md"
import {HiViewGrid} from "react-icons/hi"	

const NavbarBottom = () => {
  const [dropDownOne, setDropDownOne] = useState(false)
  const [dropDownTwo, setDropDownTwo] = useState(false)

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
          {dropDownTwo && (
            <div className="dropDownMenu2">
              <div className="dropDownMenu2Wrapper">
                <div className="left">
                  <div className="item">
                    <span>All</span>
                    <MdNavigateNext style={{ fontSize: "20px" }} />
                  </div>
                  <div className="item">
                    <span>Latin America</span>
                    <MdNavigateNext
                      className="fa"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <div className="item">
                    <span>Africa</span>
                    <MdNavigateNext
                      className="fa"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <div className="item">
                    <span>Middle East</span>
                    <MdNavigateNext
                      className="fa"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <div className="item">
                    <span>Europe</span>
                    <MdNavigateNext
                      className="fa"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="rightTop">
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="assets/post-01.jpg" alt="" />
                        </a>
                        <a className="cat">Beach</a>
                        <a className="icon">
                          <MdVisibility style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </a>
                    </div>
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="assets/post-02.jpg" alt="" />
                        </a>
                        <a className="cat">News</a>
                        <a className="icon">
                          <MdStarBorder style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </a>
                    </div>
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="assets/post-03.jpg" alt="" />
                        </a>
                        <a className="cat">Ice Hiking</a>
                        <a className="icon">
                          <MdFlashOn style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </a>
                    </div>
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="assets/post-03.jpg" alt="" />
                        </a>
                        <a className="cat">Ice Hiking</a>
                        <a className="icon">
                          <MdFlashOn style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </a>
                    </div>
                    <div className="item">
                      <div className="img">
                        <a className="thumb">
                          <img src="assets/post-04.jpg" alt="" />
                        </a>
                        <a className="cat">Mountain</a>
                        <a className="icon">
                          <MdFavoriteBorder style={{ fontSize: "20px" }} />
                        </a>
                      </div>
                      <a className="title">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </a>
                    </div>
                  </div>
                  <div className="rightBottom">
                    <a className="prev" title="Previous">
                        <FaLongArrowAltLeft style={{ fontSize: "20px" }} />
                    </a>
                    <a className="all" title="View All">
                        <HiViewGrid style={{ fontSize: "18px" }} />
                    </a>
                    <a className="next" title="Next">
                        <FaLongArrowAltRight style={{ fontSize: "18px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
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
