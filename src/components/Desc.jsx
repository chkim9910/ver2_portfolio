import styled from "@emotion/styled";
import Title from "./Title";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Inner = styled.div`
  margin-top: 80px;
  .inner {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    /* gap: 16px; */
    font-family: "Noto Sans KR", sans-serif;
    font-weight: ${(props) => (props.ftweight === "500" ? 500 : 400)};
    word-break: keep-all;
  }
`;

export default function Desc(props) {
  // AOS
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Inner
        ftweight={props.ftweight}
        // data-aos="fade-up"
        // data-aos-duration="1200"
        // data-aos-easing="ease-in-out"
        // data-aos-delay="800"
      >
        <Title>{props.title}</Title>
        <div className="inner">{props.children}</div>
      </Inner>
    </>
  );
}
