"use client";
import { MdFlashOn } from "react-icons/md";
import "../../styles/MainContent.scss";

const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="col">
        <div className="row">
          <img src="assets/usUkraine.jpg" alt="" />
          <a className="cat">Politics</a>
          <a className="icon">
            <MdFlashOn style={{ fontSize: "20px" }} />
          </a>
          <div className="postInfo">
            <ul className="nav">
              <li>Molly Nagal</li>
              <li>30 December 2023</li>
            </ul>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              explicabo molestias.
            </h3>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="assets/banner-02.jpg" alt="" />
              <a className="cat">Travel</a>
              <a className="icon">
                <MdFlashOn style={{ fontSize: "20px" }} />
              </a>
              <div className="postInfo">
                <ul className="nav">
                  <li>Molly Nagal</li>
                  <li>30 December 2023</li>
                </ul>
                <h3>Lorem ipsum dolor sit</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="assets/banner-03.jpg" alt="" />
              <a className="cat">Education</a>
              <a className="icon">
                <MdFlashOn style={{ fontSize: "20px" }} />
              </a>
              <div className="postInfo">
                <ul className="nav">
                  <li>Molly Nagal</li>
                  <li>30 December 2023</li>
                </ul>
                <h3>Lorem ipsum dolor sit.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="assets/banner-04.jpg" alt="" />
          <a className="cat">Election</a>
          <a className="icon">
            <MdFlashOn style={{ fontSize: "20px" }} />
          </a>
          <div className="postInfo">
            <ul className="nav">
              <li>Molly Nagal</li>
              <li>30 December 2023</li>
            </ul>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui
              reiciendis, placeat asperiores eveniet id cupiditate voluptatum!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;