import styled from "@emotion/styled";
import macmockup from "../assets//images/comm/MacBook-mockup.png";

const Inner = styled.div`
  display: flex;
  margin-bottom: 100px;
  margin-top: 16px;
  .video-box {
    width: 100%;
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
    position: absolute;
    z-index: 9;
    height: 385px;
    top: 44px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default function Video(props) {
  return (
    <>
      <Inner className="video-inner main-box">
        <div className="video-desc">
          <p>{props.children}</p>
        </div>
        <div className="video-box main-video">
          <div className="mac-mockup"></div>
          <video src={props.src} loop muted autoPlay></video>
        </div>
      </Inner>
    </>
  );
}
