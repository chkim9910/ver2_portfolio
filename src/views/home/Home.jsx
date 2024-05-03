import styled from "@emotion/styled";
import { IoLogoGithub } from "react-icons/io";
import { GrDownload } from "react-icons/gr";
import { SiMinutemailer } from "react-icons/si";
import { SiKakaotalk } from "react-icons/si";
import arr from "../../assets/images/comm/arrow.png";
import illust from "../../assets/images/landing-page/illust.png";
import x2y2 from "../../assets/images//landing-page/x2y2_mockup.jpg";
import chanel from "../../assets/images//landing-page/chanel_mockup.jpg";
import knb from "../../assets/images//landing-page/knb_mockup.jpg";
import kawa from "../../assets/images//landing-page/kawa_mockup.jpg";
import title from "../../assets/images/comm/title.png";
import Desc from "../../components/Desc";
import DescLine from "../../components/DescLine";
import DescLineInner from "../../components/DescLineInner";
import ProjectCard from "./components/ProjectCard";
// import { useRef } from "react";
import { useRefs } from "../../RefContext";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  section {
    width: 100%;
    position: relative;
    padding-top: 150px;
  }
  .section1 {
    height: 100svh;
    padding-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .section3 {
    margin-top: 120px;
  }
  .section4 {
    margin-top: 120px;
  }
  @media screen and (max-width: 768px) {
    .section4 {
      margin-top: 60px;
    }
  }
  .num {
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
    color: var(--primary);
  }
  .num-line {
    display: block;
    width: 140px;
    height: 1px;
    background: var(--primary);
  }
  footer {
    width: 100%;
  }
`;
const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding-top: 120px;
  .tablet-mobile-title {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .tablet-mobile-title {
      display: block;
      width: 710px;
      height: 130px;
      font-size: 130px;
      font-weight: 300;
      letter-spacing: -2px;
      text-align: center;
      -webkit-text-stroke: 2px;
    }
  }
  @media screen and (max-width: 767px) {
    .tablet-mobile-title {
      display: block;
      width: 450px;
      height: 90px;
      font-size: 84px;
      font-weight: 300;
      letter-spacing: -2px;
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
    .tablet-mobile-title {
      display: block;
      width: 340px;
      height: 70px;
      font-size: 60px;
      font-weight: 300;
      letter-spacing: -2px;
      text-align: center;
    }
  }
  .desc {
    width: 850px;
    font-weight: 300;
    word-break: keep-all;
  }
  @media screen and (max-width: 1024px) {
    .desc {
      width: 700px;
    }
  }
  @media screen and (max-width: 767px) {
    .desc {
      width: 450px;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 480px) {
    .desc {
      width: 330px;
      font-size: 12px;
    }
  }

  .highlight-text {
    color: var(--primary);
    font-weight: 400;
  }
  .arr {
    height: 100px;
    margin-top: 48px;
    position: relative;
    top: 0;
    animation: arrAni 0.8s linear infinite alternate;
  }
  @media screen and (max-width: 1024px) {
    .arr {
      height: 90px;
    }
  }
  @media screen and (max-width: 768px) {
    .arr {
      height: 70px;
    }
  }
  @media screen and (max-width: 480px) {
    .arr {
      height: 60px;
    }
  }
  @keyframes arrAni {
    0% {
      top: 0;
    }
    100% {
      top: 16px;
    }
  }
`;
const SVG = styled.svg`
  /* font-size: 160px; */
  display: flex;
  justify-content: center;
  align-items: center;
  text {
    font-family: "MADE Evolve Sans", sans-serif;
    font-size: 190px;
    /* font-size: 166px; */
    font-weight: 300;
    letter-spacing: -2px;
    text-anchor: middle;
    /* alignment-baseline: middle; */
    transform: translate(50%, 50%);
    fill: black;
    /* fill: transparent; */
    stroke: black;
    /* stroke: var(--primary); */
    stroke-dasharray: 1000px;
    stroke-width: 2px;
    animation: stroke 5s linear;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @keyframes stroke {
    0% {
      stroke-dashoffset: 1000px;
      fill: transparent;
    }
    73% {
      stroke-dashoffset: 0px;
      fill: transparent;
    }
    100% {
      fill: black;
    }
  }
`;
const BottomBox = styled.div`
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  padding-bottom: 30px;
  /* padding: 0 3.333vw 30px; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: absolute;
  width: 100vw;
  padding: 0 3.33vw 30px;

  .copyright {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
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
    gap: 18px;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    .icon-box {
      gap: 10px;
    }
  }
  .github-icon {
    font-size: 36px;
    position: relative;
    top: 0;
    transition: all 0.3s;
    width: fit-content;
    height: fit-content;
  }
  @media screen and (max-width: 767px) {
    .github-icon {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 480px) {
    .github-icon {
      gap: 30px;
    }
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
  @media screen and (max-width: 767px) {
    .blog-icon {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    .blog-icon {
      font-size: 18px;
    }
  }
  .blog-icon:hover {
    top: -4px;
    border-radius: 10px;
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 12px 0 rgba(0, 0, 0, 0.19); */
  }
`;
const Sect2Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 110px;
  .title {
    font-size: 40px;
    color: var(--primary);
    font-weight: 300;
    line-height: 130%;
    word-break: keep-all;
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 480px) {
    .title {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 360px) {
    .title {
      font-size: 24px;
    }
  }
  .intro {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
  }
  span {
    display: block;
  }
`;
const Sect2IllustBox = styled.div`
  position: absolute;
  top: 198px;
  right: 0;
  width: 420px;
  @media screen and (max-width: 976px) {
    width: 370px;
    right: -40px;
  }
  @media screen and (max-width: 480px) {
    width: 330px;
    top: 108px;
  }
  @media screen and (max-width: 360px) {
    display: none;
  }
  .illust {
    position: absolute;
    z-index: 10;
  }
  @media screen and (max-width: 976px) {
    .illust {
      display: none;
    }
  }
  .circle-big {
    width: 270px;
    height: 270px;
    border-radius: 100%;
    background: rgba(40, 151, 165, 0.4);
    position: absolute;
    top: 70px;
    left: -40px;
    z-index: 1;
  }
  @media screen and (max-width: 976px) {
    .circle-big {
      width: 220px;
      height: 220px;
      left: 42px;
      top: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    .circle-big {
      width: 130px;
      height: 130px;
      left: 102px;
      top: 50px;
    }
  }
  .circle-medium {
    width: 160px;
    height: 160px;
    border-radius: 100%;
    background: rgba(40, 151, 165, 0.2);
    position: absolute;
    top: 0px;
    right: 60px;
    z-index: 0;
  }
  @media screen and (max-width: 976px) {
    .circle-medium {
      width: 110px;
      height: 110px;
      top: -10px;
      right: 50px;
    }
  }
  @media screen and (max-width: 480px) {
    .circle-medium {
      width: 70px;
      height: 70px;
      top: 45px;
      right: 50px;
    }
  }
  .circle-small {
    width: 54px;
    height: 54px;
    border-radius: 100%;
    background: rgba(40, 151, 165, 0.3);
    position: absolute;
    top: 300px;
    right: 40px;
  }
  @media screen and (max-width: 976px) {
    .circle-small {
      top: 240px;
    }
  }
  @media screen and (max-width: 976px) {
    .circle-small {
      width: 30px;
      height: 30px;
      top: 170px;
    }
  }
`;
const Sect3Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 120px;
  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    gap: 0px;
  }
  .inner {
    display: flex;
    gap: 40px;
    width: 85%;
  }
  @media screen and (max-width: 1024px) {
    .inner {
      margin-top: 16px;
      flex-direction: column;
      width: 100%;
      gap: 16px;
    }
  }
`;
const Sect4Inner = styled.div`
  position: relative;
  background: var(--primary);
  width: 100vw;
  left: calc((100vw - 1280px) / -2);
  @media screen and (max-width: 1280px) {
    left: -3.333vw;
    width: calc(100% + 6.666vw);
  }
  @media screen and (max-width: 768px) {
    left: -28px;
    width: 100vw;
  }
  @media screen and (max-width: 480px) {
    left: -16px;
    width: 100vw;
  }
  .inner-box {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: white;
    position: relative;
    margin: 0 auto;
    max-width: 1280px;
    padding: 120px;
  }
  @media screen and (max-width: 768px) {
    .inner-box {
      gap: 16px;
      padding: 120px 3.333vw;
    }
  }
  @media screen and (max-width: 480px) {
    .inner-box {
      gap: 12px;
    }
  }
  .title {
    font-size: 56px;
    font-weight: 500;
    height: 80px;
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 48px;
      height: 60px;
    }
  }
  @media screen and (max-width: 480px) {
    .title {
      font-size: 36px;
      height: 45px;
    }
  }
  .sub-title {
    font-size: 16px;
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;
  }
  @media screen and (max-width: 768px) {
    .sub-title {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 480px) {
    .sub-title {
      font-size: 12px;
    }
  }
  .pdf-box {
    width: 184px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
  }
  .pdf-text {
    font-size: 20px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    .pdf-text {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    .pdf-text {
      font-size: 14px;
    }
  }
  .download-icon {
    font-size: 20px;
  }
`;
const Sect5Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 260px;
  .sub-text {
    font-size: 16px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    .sub-text {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 480px) {
    .sub-text {
      font-size: 12px;
    }
  }
  .main-text {
    font-size: 70px;
    height: 100px;
  }
  @media screen and (max-width: 768px) {
    .main-text {
      font-size: 56px;
      height: 80px;
    }
  }
  @media screen and (max-width: 480px) {
    .main-text {
      font-size: 36px;
      height: 55px;
    }
  }
  .addr,
  .kakao {
    font-size: 20px;
    font-weight: 400;
    font-family: "MADE Evolve Sans", sans-serif;
    display: flex;
    gap: 8px;
    align-items: center;
    position: relative;
    top: 0;
    transition: all 0.3s;
    position: relative;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 768px) {
    .addr,
    .kakao {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    .addr,
    .kakao {
      font-size: 15px;
    }
  }
  .addr::after,
  .kakao::after {
    content: "";
    position: absolute;
    bottom: -2px;
    height: 1.5px;
    width: 100%;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: left left;
    transition: all 0.3s;
  }
  .addr:hover::after,
  .kakao:hover::after {
    transform-origin: right right;
    transform: scaleX(1);
  }
`;
const Footer = styled.footer`
  position: relative;
  width: 100vw !important;
`;
const FooterInner = styled.div`
  padding: 120px 3.33vw 30px;
  /* width: 100%; */
  .copyright {
    font-size: 14px;
    font-weight: 400;
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
`;

export default function Home() {
  const { aboutRef, projectRef, contactRef } = useRefs();
  // AOS
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Wrap className="wrap">
        {/* section1 */}
        <section
          className="section1"
          // data-aos="fade-in"
          // data-aos-duration="500"
          // data-aos-easing="ease-in-out"
          // data-aos-delay="200"
        >
          <TopBox className="main-box">
            <h2
              className="title tablet-mobile-title"
              // data-aos="fade-in"
              // data-aos-duration="1400"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="100"
            >
              {/* CHOHYANG */}
              <img
                src={title}
                alt="chohyang"
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-delay="500"
              />
            </h2>
            <SVG
              width="890px"
              height="180px"
              viewBox="0 0 890 200"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              {/* <text>CHOHYANG</text> */}
              <text x="-51%" y="10%" alignment-baseline="middle">
                C
              </text>
              <text x="-36%" y="10%" alignment-baseline="middle">
                H
              </text>
              <text x="-21%" y="10%" alignment-baseline="middle">
                O
              </text>
              <text x="-6%" y="10%" alignment-baseline="middle">
                H
              </text>
              <text x="8%" y="10%" alignment-baseline="middle">
                Y
              </text>
              <text x="17.5%" y="10%" alignment-baseline="middle">
                A
              </text>
              <text x="31%" y="10%" alignment-baseline="middle">
                N
              </text>
              <text x="45.5%" y="10%" alignment-baseline="middle">
                G
              </text>
            </SVG>

            <p
              className="desc"
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-delay="2000"
            >
              2024 포트폴리오는 퍼블리싱에 발을 내딛은 2023년 하반기부터 step by
              step으로 배우며 만든 프로젝트들을 정리한 결과물입니다.
              {/* <p>
              현재는 개발 블로그를 운영하며 사용자 관점의 ui/ux 디자인 공부와
              프론트앤드 개발 공부를 기록으로 남기고 있습니다.
            </p> */}
              <span className="highlight-text">
                &nbsp; 엉덩이 오래 붙드는 웹퍼블리셔 김초향의 성장 이야기를
                들어보세요.
              </span>
            </p>

            <img
              src={arr}
              className="arr"
              alt="화살표"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-easing="linear"
              data-aos-delay="3000"
            />
          </TopBox>
          <BottomBox className="bottom-box">
            <p className="font-made-upper copyright">
              Copyright 2024 - chohyang kim, All rights reserved.
            </p>
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
          </BottomBox>
        </section>
        {/* section2 */}
        <section className="section2" ref={aboutRef} id="about">
          <div
            className="num"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p>01</p>
            <span className="num-line"></span>
          </div>
          <Sect2Inner
            className="inner"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <h2
              className="title"
              // data-aos="fade-right"
              // data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              // data-aos-delay="100"
            >
              <span>FOR THE NEXT STEP</span>
              <span className="intro">
                집념과 책임감으로 <br />
                일하는 웹퍼블리셔 김초향입니다.
              </span>
            </h2>
            <div className="desc">
              <Desc
                title="experience"
                ftweight="500"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
              >
                원티드 프리온보딩 챌린지 ux design with duotone design agency
                참가 <br /> 웹디자인기능사 자격증 취득 <br /> UI/UX
                웹앱디자인&프론트앤드 과정 수료
              </Desc>
              <DescLine
                title="skill set"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
              >
                <DescLineInner subtitle="Programing Languages">
                  JavaScript(ES6)
                  <br /> HTML5
                  <br /> CSS3
                  <br /> SASS
                </DescLineInner>
                <DescLineInner subtitle="Programing Languages">
                  JQuery
                  <br /> React
                  <br /> tailwind CSS
                  <br /> Emotion
                  <br /> CSS
                  <br /> GSAP
                </DescLineInner>
                <DescLineInner subtitle="TOOLING">
                  Figma
                  <br /> Adobe Illustrator
                  <br /> Adobe Photoshop
                  <br /> Github
                  <br /> Slack
                  <br /> CodePen
                  <br /> Codesandbox
                </DescLineInner>
              </DescLine>
              <Desc
                title="words"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
              >
                꼼꼼하게 코드를 분석하고 이해하는 과정에서 다양한 UI 인터렉션
                요소 및 라이브러리들을 찾고 적용하는 것에 재미를 발견하고
                있습니다. <br /> codepen, github, codesandbox를 적극 활용하여
                요소들을 커스텀하고 프로젝트에 직접 적용해보며 활용능력을 길러
                나가고 있습니다. 프로그래밍을 하는 과정에서 발생하는 오류들은
                구글링과 chatgpt를 활용해 적극적으로 해결하고 있으며, 특히 UI/UX
                웹앱디자인&프론트앤드 과정을 수강하면서 팀원들과의 소통을 통해
                해결해나가는 시간들에서 큰 보람과 가치를 느꼈습니다.
                <br />
                당장에 완벽하지 않더라도 그것을 향해 한 발자국 더 나아가는
                퍼블리셔가 되는 것을 목표로 부지런히 정진하고 있습니다.
              </Desc>
              <DescLine
                title="interested in"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
              >
                <DescLineInner subtitle="YOGA / WALK">
                  생각이 많고, 마음이 복잡할 때 몸과 마음을 이완시킬 수 있는
                  요가를 합니다. 생각과 마음을 refresh할 수 있는 산책도 즐겨
                  합니다.
                </DescLineInner>
                <DescLineInner subtitle="NATURE">
                  시골에 가면 느낄 수 있는 자연의 향과 풍경을 좋아합니다.
                </DescLineInner>
                <DescLineInner subtitle="BOOK">
                  관심분야가 생기면 책을 찾아 읽습니다. 읽은 후의 생각과 감상을
                  남기기 위해 종종 네이버의 BRUNCH에 기록하고 있습니다.
                </DescLineInner>
              </DescLine>
            </div>
          </Sect2Inner>
          <Sect2IllustBox className="illust-box">
            <div className="illust">
              <img src={illust} alt="illustration" width={"420px"} />
            </div>
            <div className="circle-big"></div>
            <div className="circle-medium"></div>
            <div className="circle-small"></div>
          </Sect2IllustBox>
        </section>
        {/* section3 */}
        <section className="section3" ref={projectRef} id="project">
          <div
            className="num"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p>02</p>
            <span className="num-line"></span>
          </div>
          <Sect3Inner className="project-box">
            <div className="inner">
              <ProjectCard name="X2Y2" img={x2y2} url="/x2y2">
                responsive website
              </ProjectCard>
              <ProjectCard name="CHANEL 22 BAG" img={chanel} url="/chanel22bag">
                responsive website
              </ProjectCard>
            </div>
            <div className="inner">
              <ProjectCard name="국립발레단" img={knb} url="/knb">
                responsive website
              </ProjectCard>
              <ProjectCard name="동물자유연대" img={kawa} url="/kawa">
                responsive website
              </ProjectCard>
            </div>
          </Sect3Inner>
        </section>
        {/* section4 */}
        <section className="section4">
          <Sect4Inner
            className="inner"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            // data-aos-delay="50"
          >
            <div className="inner-box">
              <div className="text-box">
                <h2 className="title">resume</h2>
                <p className="sub-title">더 많은 정보를 확인해보세요.</p>
              </div>
              <a href="/" download="resume.pdf" className="pdf-box">
                <span className="pdf-text">PDF Download</span>
                <span className="download-icon">
                  <GrDownload />
                </span>
              </a>
            </div>
          </Sect4Inner>
        </section>
        {/* section5 */}
        <section className="section5" ref={contactRef} id="contact">
          <Sect5Inner
            className="inner"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            // data-aos-delay="50"
          >
            <p className="title sub-text">let’s work together!</p>
            <h3 className="title main-text">get in touch</h3>
            <a href="mailto:chohyang9910@gmail.com" className="addr">
              chohyang9910@gmail.com
              <span>
                <SiMinutemailer />
              </span>
            </a>
            <a
              href="https://open.kakao.com/me/chohyang"
              className="kakao"
              target="_blank"
              rel="noreferrer"
            >
              kakaotalk open chat
              <span>
                <SiKakaotalk />
              </span>
            </a>
          </Sect5Inner>
        </section>
        {/* footer */}
        <Footer className="footer">
          <FooterInner className="inner">
            <p className="title copyright">
              Copyright 2024 - chohyang kim, All rights reserved.
            </p>
          </FooterInner>
        </Footer>
      </Wrap>
    </>
  );
}
