import styled from "@emotion/styled";
import { IoLogoGithub } from "react-icons/io";
import { GrDownload } from "react-icons/gr";
import { SiMinutemailer } from "react-icons/si";
import { SiKakaotalk } from "react-icons/si";
import arr from "../../assets/images/comm/arrow.png";
import illust from "../../assets/images/landing-page/illust.png";
import x2y2 from "../../assets/images//landing-page/x2y2_mockup.jpg";
import chanel from "../../assets/images//landing-page/chanel_mockup.jpg";
import knb from "../../assets/images//landing-page/국립발레단_mockup.jpg";
import kawa from "../../assets/images//landing-page/동물자유연대_mockup.jpg";
import Desc from "../../components/Desc";
import DescLine from "../../components/DescLine";
import DescLineInner from "../../components/DescLineInner";
import ProjectCard from "./components/ProjectCard";
// import { useRef } from "react";
import { useRefs } from "../../RefContext";

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

  .title {
    width: fit-content;
    height: 200px;
    font-size: 160px;
    font-weight: 300;
    letter-spacing: -2px;
    text-align: center;
  }
  .desc {
    width: 850px;
    font-weight: 300;
    word-break: keep-all;
  }
  span {
    color: var(--primary);
    font-weight: 400;
  }
  img {
    height: 100px;
    margin-top: 48px;
    position: relative;
    top: 0;
    animation: arrAni 0.8s linear infinite alternate;
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
const BottomBox = styled.div`
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  padding-bottom: 30px;
  /* padding: 0 3.333vw 30px; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .copyright {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
  }
  .icon-box {
    display: flex;
    gap: 24px;
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
  .illust {
    position: absolute;
    z-index: 10;
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
  .circle-small {
    width: 54px;
    height: 54px;
    border-radius: 100%;
    background: rgba(40, 151, 165, 0.3);
    position: absolute;
    top: 300px;
    right: 40px;
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
  .inner {
    display: flex;
    gap: 40px;
    width: 85%;
  }
`;
const Sect4Inner = styled.div`
  position: relative;
  left: -3.333vw;
  width: calc(100% + 6.666vw);
  .inner-box {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: white;
    background: var(--primary);
    padding: 120px 10%;
  }
  .title {
    font-size: 56px;
    font-weight: 500;
    height: 80px;
  }
  .sub-title {
    font-size: 16px;
    font-weight: 400;
    font-family: "Noto Sans KR", sans-serif;
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
  .main-text {
    font-size: 70px;
    height: 100px;
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
  }
  .addr:hover,
  .kakao:hover {
    color: var(--primary);
  }
`;
const FooterInner = styled.div`
  margin-top: 120px;
  padding-bottom: 30px;
  width: 100%;
  .copyright {
    font-size: 14px;
    font-weight: 400;
  }
`;

export default function Home() {
  // const aboutRef = useRef(null);
  // const projectRef = useRef(null);
  // const contactRef = useRef(null);
  const { aboutRef, projectRef, contactRef } = useRefs();
  return (
    <>
      <Wrap className="wrap">
        {/* section1 */}
        <section className="section1">
          <TopBox className="main-box">
            <h2 className="title">CHOHYANG</h2>
            <p className="desc">
              2024 포트폴리오는 퍼블리싱에 발을 내딛은 2023년 하반기부터 step by
              step으로 배우며 만든 프로젝트들을 정리한 결과물입니다. 현재는 개발
              블로그를 운영하며 사용자 관점의 ui/ux 디자인 공부와 프론트앤드
              개발 공부를 기록으로 남기고 있습니다. <br />
              <span>
                엉덩이 오래 붙드는 웹퍼블리셔 김초향의 성장 이야기를 들어보세요.
              </span>
            </p>
            <img src={arr} alt="화살표" />
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
          <div className="num">
            <p>01</p>
            <span className="num-line"></span>
          </div>
          <Sect2Inner className="inner">
            <h2 className="title">
              <span>FOR THE NEXT STEP</span>
              <span className="intro">
                집념과 책임감으로 <br />
                일하는 웹퍼블리셔 김초향입니다.
              </span>
            </h2>
            <div className="desc">
              <Desc title="experience" ftweight="500">
                원티드 프리온보딩 챌린지 ux design with duotone design agency
                참가 <br /> 웹디자인기능사 자격증 취득 <br /> UI/UX
                웹앱디자인&프론트앤드 과정 수료
              </Desc>
              <DescLine title="skill set">
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
              <Desc title="words">
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
              <DescLine title="interested in">
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
          <div className="num">
            <p>02</p>
            <span className="num-line"></span>
          </div>
          <Sect3Inner className="project-box">
            <div className="inner">
              <ProjectCard name="X2Y2" img={x2y2}>
                responsive website
              </ProjectCard>
              <ProjectCard name="CHANEL 22 BAG" img={chanel}>
                responsive website
              </ProjectCard>
            </div>
            <div className="inner">
              <ProjectCard name="국립발레단" img={knb}>
                responsive website
              </ProjectCard>
              <ProjectCard name="동물자유연대" img={kawa}>
                responsive website
              </ProjectCard>
            </div>
          </Sect3Inner>
        </section>
        {/* section4 */}
        <section className="section4">
          <Sect4Inner className="inner">
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
          <Sect5Inner className="inner">
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
        <footer>
          <FooterInner className="inner">
            <p className="title copyright">
              Copyright 2024 - chohyang kim, All rights reserved.
            </p>
          </FooterInner>
        </footer>
      </Wrap>
    </>
  );
}
