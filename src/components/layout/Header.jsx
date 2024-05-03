import styled from "@emotion/styled";
import logo from "../../assets/images/comm/logo.png";
import logoWhite from "../../assets/images/comm/logo-white.png";
import tw from "twin.macro";
import Gnb from "./Gnb";
import { useEffect, useState } from "react";
import { RefContext, useRefs } from "../../RefContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Box = styled.div`
  padding: 0 3.333vw;
  padding-top: 30px;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  @media screen and (min-width: 480px) and (max-width: 768px) {
    padding: 0 28px;
    padding-top: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    padding: 0 16px;
    padding-top: 30px;
  }
`;
const Inner = styled.div`
  z-index: 200;
  ${tw`flex items-center justify-between relative`}

  .logo-img {
    width: 120px;
    height: 40px;
    transition: all 0.6s ease-in-out;
    background: url(${logo}) no-repeat 0 0 / contain;
  }
  .logo-img.white {
    background-image: url(${logoWhite});
    transition: all 0.6s ease-in-out;
  }
`;
const Input = styled.input`
  ${tw`hidden`}
`;
const Label = styled.label`
  ${tw`cursor-pointer flex flex-col relative`}
  width: 36px;
  height: 22px;
`;
const Line = styled.div`
  width: 36px;
  height: 2px;
  position: absolute;
  background: ${(props) => (props.isOpen ? "#fff" : "#000")};
  transition: all 0.3s ease-in-out 0.2s;
  &:first-of-type {
    width: ${(props) => (props.isOpen ? "0%" : "36px")};
    top: ${(props) => (props.isOpen ? "10px" : "0px")};
    left: ${(props) => (props.isOpen ? "50%" : "0%")};
  }
  &:nth-of-type(2) {
    transform: rotate(${(props) => (props.isOpen ? "45deg" : "0deg")});
    top: 8px;
  }
  &:nth-of-type(3) {
    transform: rotate(${(props) => (props.isOpen ? "-45deg" : "0deg")});
    top: 8px;
  }
  &:nth-of-type(4) {
    width: ${(props) => (props.isOpen ? "0%" : "36px")};
    top: ${(props) => (props.isOpen ? "10px" : "16px")};
    left: ${(props) => (props.isOpen ? "50%" : "0%")};
  }
`;

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { aboutRef, projectRef, contactRef } = useRefs(RefContext);

  // AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Box
        className="header"
        // data-aos="fade-in"
        // data-aos-duration="800"
        // data-aos-easing="ease-in-out"
        // data-aos-delay="500"
      >
        <Inner className="header-inner">
          <Link to="/" className="logo">
            <div
              className={`logo-img ${isOpen ? "white" : ""}`}
              isOpen={isOpen}
            ></div>
          </Link>
          <Input
            type="checkbox"
            id="menu"
            className="menu-box"
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <Label htmlFor="menu">
            <Line className="line" isOpen={isOpen}></Line>
            <Line className="line" isOpen={isOpen}></Line>
            <Line className="line" isOpen={isOpen}></Line>
            <Line className="line" isOpen={isOpen}></Line>
          </Label>
        </Inner>
        <Gnb
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
      </Box>
    </>
  );
}
