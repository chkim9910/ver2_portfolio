import styled from "@emotion/styled";
import { useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { RefContext, useRefs } from "../../RefContext";
import { Link, useLocation } from "react-router-dom";

const Box = styled.div`
  background: var(--primary);
  position: fixed;
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
  /* height: 100%; */
  height: ${(props) => (props.isOpen ? "100svh" : "100%")};
  left: 0;
  right: 0;
  transition: all 0.6s ease-in-out;
  padding: 0 3.333vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .inner {
    height: 490px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .left {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    /* align-items: center; */
  }
  .name {
    font-weight: 400;
    /* font-weight: 700; */
    color: white;
    font-size: 116px;
    line-height: 110px;
    letter-spacing: -2px;
    /* letter-spacing: -1px; */
  }
  .line {
    width: 1px;
    height: 140px;
    /* height: 150px; */
    margin-left: 23px;
    background: white;
  }
  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    gap: 24px;
    width: fit-content;
  }
  .github-icon {
    font-size: 36px;
    position: relative;
    top: 0;
    transition: all 0.3s;
    width: fit-content;
    height: fit-content;
  }
  .github-icon:hover {
    top: -4px;
    border-radius: 100%;
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 12px 0 rgba(0, 0, 0, 0.19); */
  }
  .blog-icon {
    font-size: 24px;
    text-transform: lowercase;
    position: relative;
    top: 0;
    padding: 0 5px;
    transition: all 0.3s;
    height: fit-content;
  }
  .blog-icon:hover {
    top: -4px;
    border-radius: 10px;
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 12px 0 rgba(0, 0, 0, 0.19); */
  }
`;
const GnbBox = styled.div`
  display: flex;
  flex-direction: column;
  li {
    height: 90px;
    /* height: 100px; */
    text-align: right;
    font-size: 78px;
    /* font-size: 86px; */
    font-weight: 700;
    color: transparent;
    /* text-shadow: -1.5px -1.5px 0 white, 1.5px -1.5px 0 white,
      -1.5px 1.5px 0 white, 1.5px 1.5px 0 white; */
    background: linear-gradient(to right, white, white) no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
    letter-spacing: -1px;
    background-size: 0%;
    transition: all 0.8s cubic-bezier(0.1, 0.5, 0.5, 1);
  }
  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    -webkit-text-stroke: 1px white;
  }
  li:hover {
    background: linear-gradient(to right, white, white) no-repeat;
    background-clip: text;
    background-size: 100%;
  }
  span {
    color: white;
    font-size: 16px;
    -webkit-text-stroke: 0px white;
    font-family: "Noto Sans KR", sans-serif;
  }
  .inner-line {
    height: 1px;
    width: 0px;
    background: white;
    transform: scale(0);
    transform-origin: right;
    transition: all 0.6s;
  }
  li:hover .inner-line {
    transform: scale(1);
    width: 240px;
  }
  .arr-icon {
    color: white;
    font-size: 48px;
    padding-bottom: 28px;
  }
`;

export default function Gnb(props) {
  const { aboutRef, projectRef, contactRef } = useRefs(RefContext);
  const location = useLocation();
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (location.hash === "#about") {
      scrollToSection(aboutRef);
    } else if (location.hash === "#project") {
      scrollToSection(projectRef);
    } else if (location.hash === "#contact") {
      scrollToSection(contactRef);
    }
  }, [location.hash, aboutRef, projectRef, contactRef]);

  const closed = () => {
    props.setIsOpen(false);
  };
  return (
    <>
      <Box
        className="gnb"
        isOpen={props.isOpen}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      >
        <div className="inner">
          <div className="left">
            <h2 className="font-made-upper name">
              ChoHyang
              <br />
              kim.
            </h2>
            <div className="line"></div>
            <div className="icon-box">
              <a
                href="https://github.com/chkim9910"
                target="_blank"
                className="github-icon"
                rel="noreferrer"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://stillverde.tistory.com/"
                target="_blank"
                rel="noreferrer"
                className="font-made blog-icon"
              >
                blog
              </a>
            </div>
          </div>
          <GnbBox className="right" onClick={closed}>
            <ul className="font-made-upper">
              <li>
                <Link to="/#about">
                  <span>01</span>
                  <span className="inner-line"></span>ABOUT
                </Link>
              </li>
              <li>
                <Link to="/#project">
                  <span>02</span>
                  <span className="inner-line"></span>PROJECT
                </Link>
              </li>
              <li>
                <Link to="/#contact">
                  <span>03</span>
                  <span className="inner-line"></span>CONTACT
                </Link>
              </li>
              <li>
                <a href="/" download="resume.pdf">
                  RESUME
                  <span className="arr-icon">
                    <MdArrowOutward />
                  </span>
                </a>
              </li>
            </ul>
          </GnbBox>
        </div>
      </Box>
    </>
  );
}
