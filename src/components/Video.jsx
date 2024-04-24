import styled from "@emotion/styled";
import macmockup from "../assets//images/comm/MacBook-mockup.png";

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 16px;
  .video-desc {
    flex: 1;
  }
  .video-box {
    flex: 1;
    height: 500px;
    position: relative;
  }
  .mac-mockup {
    position: absolute;
    background: url(${macmockup}) no-repeat 50% 50% / contain;
    z-index: 10;
    height: 500px;
    width: 100%;
  }
  video {
    /* height: 385px; */
    height: 79%;
    width: 82%;
    position: absolute;
    z-index: 9;
    /* top: 44px; */
    top: -30%;
    left: 50%;
    transform: translate(-50%, 48%);
  }
`;

export default function Video(props) {
  return (
    <>
      <Inner className="video-inner main-box">
        <div className="video-desc">
          <div>{props.children}</div>
        </div>
        <div className="video-box main-video">
          <div className="mac-mockup"></div>
          <video src={props.src} loop muted autoPlay></video>
        </div>
      </Inner>
    </>
  );
}

export function Videoright(props) {
  return (
    <>
      <Inner className="video-inner main-box">
        <div className="video-box main-video">
          <div className="mac-mockup"></div>
          <video src={props.src} loop muted autoPlay></video>
        </div>
        <div className="video-desc">
          <p>{props.children}</p>
        </div>
      </Inner>
    </>
  );
}
