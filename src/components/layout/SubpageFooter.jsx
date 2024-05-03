import styled from "@emotion/styled";
import { IoLogoGithub } from "react-icons/io";
import { FaFigma } from "react-icons/fa";

const Inner = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: calc((100vw - 1280px) / -2);
  width: 100vw;
  padding: 0 3.333vw 30px;
  @media screen and (max-width: 1280px) {
    width: 100%;
    left: 0;
    padding: 0 0 30px;
  }
  .copyright {
    font-size: 14px;
    font-weight: 400;
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    .copyright {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 480px) {
    .copyright {
      font-size: 10px;
    }
  }
  .icon-box {
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 36px;
    @media screen and (max-width: 768px) {
      gap: 16px;
    }
    @media screen and (max-width: 480px) {
      gap: 12px;
    }
  }
  .icon {
    position: relative;
    top: 0;
    transition: all 0.3s;
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  }
  .icon:hover {
    top: -4px;
  }
  .figma-icon {
    font-size: 32px;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
    @media screen and (max-width: 480px) {
      font-size: 28px;
    }
  }
`;

export default function SubpageFooter(props) {
  return (
    <>
      <Inner className="inner">
        <p className="title copyright">
          Copyright 2024 - chohyang kim, All rights reserved.
        </p>
        <div className="icon-box">
          <a
            href={props.github}
            target="_blank"
            className="icon github-icon"
            rel="noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            href={props.figma}
            target="_blank"
            className="icon figma-icon"
            rel="noreferrer"
          >
            <FaFigma />
          </a>
        </div>
      </Inner>
    </>
  );
}
