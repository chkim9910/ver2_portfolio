import styled from "@emotion/styled";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const Inner = styled.div`
  max-height: 530px;
  flex: 1;
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
  top: 0;
  transition: all 0.3s;
  /* will-change: transform; */
  &:hover {
    top: -20px;
  }
  &:active {
    top: -20px;
    transform: scale(0.95);
  }
  .inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
  }
  .text-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .name {
    font-size: 26px;
    font-weight: 500;
  }
  .arr-icon {
    font-size: 36px;
  }
  .desc {
    font-size: 14px;
  }
  .img {
    background: url(${(props) => props.img}) no-repeat 43% 50% / cover;
    height: 445px;
  }
`;

export default function ProjectCard(props) {
  // AOS
  useEffect(() => {
    Aos.init();
  }, []);

  const scrollToTopAndReload = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.location.href = props.url; // 새로운 URL로 이동하여 페이지 새로고침
  };
  return (
    <>
      <Inner
        img={props.img}
        onClick={scrollToTopAndReload}
        // data-aos="fade-up"
        // data-aos-duration="1200"
        // data-aos-easing="linear"
      >
        <Link to={`${props.url}`} className="inner">
          <div className="img"></div>
          <div className="text-box">
            <div className="text-top">
              <h3 className="name">{props.name}</h3>

              <span className="arr-icon">
                <MdArrowForward />
              </span>
            </div>
            <p className="desc">{props.children}</p>
          </div>
        </Link>
      </Inner>
    </>
  );
}
