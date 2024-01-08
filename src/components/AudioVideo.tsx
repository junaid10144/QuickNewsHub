"use client"
import "../../styles/AudioVideo.scss"
import HeadingTitle from "./HeadingTitle"

const AudioVideo = () => {
  return (
    <div className="audioVideo">
      <div className="audioVideoWrapper">
        <HeadingTitle title="Audio &amp; Video" />

        <div className="body">
          <div className="videoWrapper">
            <video width="100%" controls autoPlay loop>
              <source src="/assets/newUpdate.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="listWrapper">
            <div className="list">
                <div className="item">
                    <div className="left">
                        <img src="assets/audio-video-02.jpg" alt="" />
                    </div>
                    <div className="right">
                        <ul className="nav">
                            <li>Cynthia C</li>
                            <li>16 Oct 2023</li>
                        </ul>
                        <h3>Long established fact that a reader will be distracted by he readable </h3>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <img src="assets/audio-video-03.jpg" alt="" />
                    </div>
                    <div className="right">
                        <ul className="nav">
                            <li>Augusta A</li>
                            <li>25 Oct 2023</li>
                        </ul>
                        <h3>Long established fact that a reader will be distracted by he readable </h3>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <img src="assets/audio-video-04.jpg" alt="" />
                    </div>
                    <div className="right">
                        <ul className="nav">
                            <li>Kevin U</li>
                            <li>07 June 2023</li>
                        </ul>
                        <h3>Long established fact that a reader will be distracted by he readable </h3>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <img src="assets/audio-video-05.jpg" alt="" />
                    </div>
                    <div className="right">
                        <ul className="nav">
                            <li>Vera I</li>
                            <li>30 Nov 2023</li>
                        </ul>
                        <h3>Long established fact that a reader will be distracted by he readable </h3>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioVideo
