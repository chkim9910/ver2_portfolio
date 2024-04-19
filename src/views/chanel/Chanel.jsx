import { SubpageTitle } from "../../components/Title";
import mockup from "../../assets/images/landing-page/chanel_mockup.jpg";
import styled from "@emotion/styled";
import { MdArrowOutward } from "react-icons/md";
import MovePage from "../../components/MovePage";
import SubpageFooter from "../../components/layout/SubpageFooter";
import Desc from "../../components/Desc";
import DescLineInner from "../../components/DescLineInner";
import DescLine from "../../components/DescLine";
import designGuide from "../../assets/images/chanel/chanel_Style-Guide.jpg";

const Inner = styled.div`
  .mockup-img {
    width: calc(100% + 6.666vw);
    height: 80svh;
    position: relative;
    left: -3.333vw;
    background: url(${mockup}) no-repeat 50% 40% /120%;
  }
  .intro-li {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    transition: all 0.3s;
  }
  .link:hover {
    color: var(--primary);
  }
  .arr-icon {
    font-size: 16px;
  }
`;
const LinkInner = styled.div`
  margin-top: 16px;
  display: flex;
  .space {
    flex: 1;
  }
  .link-to-page {
    flex: 1;
    border-top: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 8px 30px;
    transition: all 0.3s;
    position: relative;
  }
  .link-to-page:hover {
    color: white;
    background-size: 100%;
    transform-origin: right;
  }
  .link-to-page::after {
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s;
  }
  .link-to-page:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  .title {
    margin-top: 0;
    position: relative;
    z-index: 2;
  }
  .arr-icon {
    font-size: 20px;
    position: relative;
    z-index: 2;
  }
`;

export default function Chanel() {
  return (
    <>
      <Inner>
        <SubpageTitle>CHANEL 22 BAG</SubpageTitle>
        <div className="mockup-img"></div>
        <div className="desc">
          <Desc title="intro">
            <ul className="intro-li">
              <li>Personal PROJECT </li>
              <li>작업기간 | 24.01 (1주 소요)</li>
              <li>
                <a
                  href="https://github.com/chkim9910/Chanel22bag-Renewal"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                  <span className="arr-icon">
                    <MdArrowOutward />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/file/U40tBrD4nOVaZRgRGRpkDD/CHANEL-22-bag?type=design&node-id=0%3A1&mode=design&t=mC9Tuda9RpjkOlUP-1"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Figma
                  <span className="arr-icon">
                    <MdArrowOutward />
                  </span>
                </a>
              </li>
            </ul>
            <p>
              CHANEL 22 BAG 캠페인 페이지를 리다지인한 개인 프로젝트입니다.
              <br />
              4명의 CHANEL 앰버서드의 영상과 이미지를 최대로 활용하여 화보집과
              같은 분위기를 연출하였습니다.
              <br />
              UI 인터페이스는 GSAP ScrollTrigger와 parallax.js, aos.js를
              사용하여 다양하고 역동적이고 인터렉션 요소를 배치하였습니다.
              사이트는 캠페인 페이지의 성격에 맞게 원페이지로 제작하였습니다.
            </p>
          </Desc>
          <DescLine title="skill set">
            <DescLineInner subtitle="Programing Languages">
              <ul>
                <li>JavaScript(ES6)</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
              </ul>
            </DescLineInner>
            <DescLineInner subtitle="Framework/ Library">
              <ul>
                <li>GSAP</li>
                <li>Parallax.js</li>
                <li>aos.js</li>
              </ul>
            </DescLineInner>
            <DescLineInner subtitle="TOOLING">
              <ul>
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Github</li>
              </ul>
            </DescLineInner>
          </DescLine>
          <Desc title="design system">
            <img src={designGuide} alt="x2y2 design system" width={"1200px"} />
          </Desc>
          <Desc title="demo video"></Desc>
          <Desc title="link to page">
            <LinkInner className="inner">
              <a
                href="https://chkim9910.github.io/Chanel22bag-Renewal/"
                className="link-to-page link1"
                target="_blank"
                rel="noreferrer"
              >
                <p className="title">MAIN PAGE</p>
                <span className="arr-icon">
                  <MdArrowOutward />
                </span>
              </a>
              <div className="space"></div>
              <div className="space"></div>
            </LinkInner>
          </Desc>
          <MovePage left="x2y2" right="국립발레단"></MovePage>
          <SubpageFooter
            github="https://github.com/chkim9910/Chanel22bag-Renewal"
            figma="https://www.figma.com/file/U40tBrD4nOVaZRgRGRpkDD/CHANEL-22-bag?type=design&node-id=0%3A1&mode=design&t=mC9Tuda9RpjkOlUP-1"
          />
        </div>
      </Inner>
    </>
  );
}
