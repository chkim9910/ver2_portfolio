import styled from "@emotion/styled";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Inner = styled.div`
  margin-top: 120px;
  display: flex;
  .box {
    flex: 1;
    display: flex;
    gap: 20px;
    position: relative;
  }
  .left:hover {
    animation: left 0.5s linear infinite alternate;
  }
  @keyframes left {
    0% {
      left: 0;
    }
    100% {
      left: -7px;
    }
  }
  .right {
    justify-content: flex-end;
  }
  .right:hover {
    animation: right 0.5s linear infinite alternate;
  }
  @keyframes right {
    0% {
      right: 0;
    }
    100% {
      right: -7px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 500;
    height: 32px;
  }
  .sub-text {
    font-size: 14px;
    width: fit-content;
  }
  .arr-icon {
    font-size: 42px !important;
  }
  .text-box {
    display: flex;
    flex-direction: column;
  }
  .left .text-box {
    align-items: flex-start;
  }
  .right .text-box {
    align-items: flex-end;
  }
`;

export default function MovePage(props) {
  return (
    <>
      <Inner className="inner">
        <Link to={props.lefturl} className="box left">
          <span className="arr-icon">
            <MdArrowBack />
          </span>
          <div className="text-box">
            <h3 className="title">{props.left}</h3>
            <span className="sub-text">Responsive website</span>
          </div>
        </Link>
        <Link to={props.righturl} className="box right">
          <div className="text-box">
            <h3 className="title">{props.right}</h3>
            <span className="sub-text">Responsive website</span>
          </div>
          <span className="arr-icon">
            <MdArrowForward />
          </span>
        </Link>
      </Inner>
    </>
  );
}
