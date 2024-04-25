import styled from "@emotion/styled";
import Title from "./Title";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Inner = styled.div`
  margin-top: 80px;
  .cont-box {
    display: flex;
    width: 100%;
  }
`;

export default function DescLine(props) {
  // AOS
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Inner
      // data-aos="fade-up"
      // data-aos-duration="1200"
      // data-aos-easing="ease-in-out"
      // data-aos-delay="800"
      >
        <Title>{props.title}</Title>
        <div className="cont-box">{props.children}</div>
      </Inner>
    </>
  );
}
