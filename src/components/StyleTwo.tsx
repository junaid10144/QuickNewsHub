"use client"
import "../../styles/StyleTwo.scss"
import HeadingTitle from "./HeadingTitle"

const StyleTwo = ({
  category,
  headingImg,
  title,
  Icon,
  headingAuthor,
  headingDate,
  headingExcept,
  image1,
  image2,
  image3,
  image4,
  image1Author,
  image2Author,
  image3Author,
  image4Author,
  image1Date,
  image2Date,
  image3Date,
  image4Date,
  image1Except,
  image2Except,
  image3Except,
  image4Except
}) => {
  return <div className="styleTwo">
    <HeadingTitle title={category}/>

    <div className="top">
      <img src={headingImg} alt="" />
      <a className="cat">{title}</a>
      <a className="icon">{Icon}</a>

      <div className="postInfo">
        <ul className="nav">
          <li>{headingAuthor}</li>
          <li>{headingDate}</li>
        </ul>
        <h3>{headingExcept}</h3>
      </div>
    </div>

    <div className="bottom">
      <div className="item">
        <div className="left">
          <img src={image1} alt="" />
        </div>
        <div className="right">
          <ul className="nav">
            <li>{image1Author}</li>
            <li>{image1Date}</li>
          </ul>
          <h3>{image1Except}</h3>
        </div>
      </div>
      <div className="item">
        <div className="left">
          <img src={image2} alt="" />
        </div>
        <div className="right">
          <ul className="nav">
            <li>{image2Author}</li>
            <li>{image2Date}</li>
          </ul>
          <h3>{image2Except}</h3>
        </div>
      </div>
      <div className="item">
        <div className="left">
          <img src={image3} alt="" />
        </div>
        <div className="right">
          <ul className="nav">
            <li>{image3Author}</li>
            <li>{image3Date}</li>
          </ul>
          <h3>{image3Except}</h3>
        </div>
      </div>
      <div className="item">
        <div className="left">
          <img src={image4} alt="" />
        </div>
        <div className="right">
          <ul className="nav">
            <li>{image4Author}</li>
            <li>{image4Date}</li>
          </ul>
          <h3>{image4Except}</h3>
        </div>
      </div>
    </div>
  </div>
}

export default StyleTwo
