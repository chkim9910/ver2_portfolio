import styled from "@emotion/styled";
import { IoLogoGithub } from "react-icons/io";
import { FaFigma } from "react-icons/fa";

const Inner = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
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
  }
  .icon-box {
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 36px;
  }
  .icon {
    position: relative;
    top: 0;
    transition: all 0.3s;
  }
  .icon:hover {
    top: -4px;
  }
  .figma-icon {
    font-size: 32px;
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
