import { SubpageTitle } from "../../components/Title";
import mockup from "../../assets/images/landing-page/v2_국립발레단_mockup.jpg";
import styled from "@emotion/styled";
import { MdArrowOutward } from "react-icons/md";
import MovePage from "../../components/MovePage";
import SubpageFooter from "../../components/layout/SubpageFooter";
import Desc from "../../components/Desc";
import DescLineInner from "../../components/DescLineInner";
import DescLine from "../../components/DescLine";
import designGuide from "../../assets/images/knb/국립발레단_Style-Guide.jpg";
import Video from "../../components/Video";
import gnbVideo from "../../assets/videos/knb/knb-gnb.mov";
import mainVideo from "../../assets/videos/knb/knb-main-1.mov";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Inner = styled.div`
  .mockup-img {
    height: 100svh;
    position: relative;
    left: -3.333vw;
    background: url(${mockup}) no-repeat 50% 30% /100%;
    width: 100vw;
    left: calc((100vw - 1280px) / -2);
    @media screen and (max-width: 1280px) {
      width: 100vw;
      left: -3.333vw;
    }
  }
  .intro-li {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .intro-desc {
    margin-top: 16px;
  }
  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
    transition: all 0.3s;
    position: relative;
  }
  .link::after {
    content: "";
    position: absolute;
    bottom: -4px;
    height: 2px;
    width: 100%;
    background: var(--primary);
    transform: scaleX(0);
    transform-origin: left left;
    transition: all 0.3s;
  }
  .link:hover::after {
    transform-origin: right right;
    transform: scaleX(1);
  }
  .arr-icon {
    font-size: 16px;
  }
  .video-subtitle {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }
`;
const LinkInner = styled.div`
  width: 100%;
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

export default function Knb() {
  // AOS
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Inner>
        <SubpageTitle>국립발레단</SubpageTitle>
        <div className="mockup-img"></div>
        <div
          className="desc"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <Desc title="intro">
            <ul className="intro-li">
              <li>Team PROJECT | 3명</li>
              <li>작업기간 | 23.11-12 (3주 소요)</li>
              <li>기여도 | 40%</li>
              <li>
                역할 및 핵심 임무 | PM, Github 총괄 관리, 웹접근성 준수를 위한
                코드 수정
              </li>
              <li>
                <a
                  href="https://github.com/chkim9910/KNB-Renewal"
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
                  href="https://www.figma.com/file/Cl8l0xViAvpO7k100UhVrT/%EA%B5%AD%EB%A6%BD%EB%B0%9C%EB%A0%88%EB%8B%A8?type=design&node-id=0-1&mode=design&t=9AgFraqeMWRqO0VX-0"
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
            <p className="intro-desc">
              국내외에 위상을 인정받는 국립발레단 사이트를 리다지인한 팀
              프로젝트입니다.
              <br /> 발레단의 화려한 이미지에 모던한 느낌을 더하기 위해 검정색을
              주조색으로 하여 빨강과 보라로 포인트를 주었습니다.
              <br />
              UI 인터페이스는 GSAP ScrollTrigger를 사용하여 자연스러운 스크롤
              효과를 주었으며, 아래서 위로 서로 겹쳐져 올라오는 슬라이드 효과를
              구현하였습니다.
              <br /> FullCalendar를 사용하여 캘린더의 디자인을 커스텀하고,
              캘린더가 동작될 수 있도록 하였습니다. 사용자 환경에 반응할 수
              있도록 미디어 쿼리를 사용하여 반응형 웹페이지로 제작되었습니다.본
              페이지는 팀 프로젝트로 진행되었으며, Sub page2를 담당하였습니다.
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
                <li>FullCalendar.js</li>
                <li>Swiper.js</li>
              </ul>
            </DescLineInner>
            <DescLineInner subtitle="TOOLING">
              <ul>
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Github</li>
                <li>Slack</li>
              </ul>
            </DescLineInner>
          </DescLine>
          <Desc title="design system">
            <img src={designGuide} alt="x2y2 design system" width={"1200px"} />
          </Desc>
          <Desc title="details">
            <Video src={gnbVideo} width="83%" left="50.3%">
              <h2 className="title video-subtitle">gnb</h2>
              <p>
                header 제작을 담당하였습니다. 메뉴에 mouse hover 시 하위 메뉴가
                나오도록 제작하였습니다. point color를 활용하여 메뉴에
                highlight을 주었습니다.
              </p>
            </Video>
            <Video src={mainVideo} width="83%" left="50.3%">
              <h2 className="title video-subtitle">
                공연정보 page (sub2 page)
              </h2>
              <p>
                공연정보 페이지는 공연정보 섹션을 시작으로 공연일정, 공연연보
                섹션 순으로 구성하였습니다. 공연정보 섹션은 아래서 위로 내용이
                슬라이드되도록 GSAP 라이브러리를 활용하였습니다. 슬라이드 전용
                라이브러리보다 구현하기 까다로웠으나, GSAP을 이해하고 활용하는
                능력을 기를 수 있는 좋은 경험이 되었습니다. 공연일정 섹션은
                FullCalendar.js 라이브러리로 제작하였으며, 공연연보는 GSAP과
                Swiper.js 라이브러리를 활용하여 각기 다른 느낌의 세부 섹션들을
                제작하였습니다.
              </p>
            </Video>
          </Desc>
          <DescLine title="link to page">
            <LinkInner className="inner">
              <a
                href="https://chkim9910.github.io/KNB-Renewal/"
                className="link-to-page link1"
                target="_blank"
                rel="noreferrer"
              >
                <p className="title">MAIN PAGE</p>
                <span className="arr-icon">
                  <MdArrowOutward />
                </span>
              </a>
              <a
                href="https://chkim9910.github.io/KNB-Renewal/sub1"
                className="link-to-page link2"
                target="_blank"
                rel="noreferrer"
              >
                <p className="title">SUB PAGE 1</p>
                <span className="arr-icon">
                  <MdArrowOutward />
                </span>
              </a>
              <a
                href="https://chkim9910.github.io/KNB-Renewal/sub2"
                className="link-to-page link3"
                target="_blank"
                rel="noreferrer"
              >
                <p className="title">SUB PAGE 2</p>
                <span className="arr-icon">
                  <MdArrowOutward />
                </span>
              </a>
            </LinkInner>
          </DescLine>
          <MovePage
            left="CHANEL 22 BAG"
            right="동물자유연대"
            lefturl="/chanel22bag"
            righturl="/kawa"
          ></MovePage>
          <SubpageFooter
            github="https://github.com/chkim9910/KNB-Renewal"
            figma="https://www.figma.com/file/Cl8l0xViAvpO7k100UhVrT/%EA%B5%AD%EB%A6%BD%EB%B0%9C%EB%A0%88%EB%8B%A8?type=design&node-id=0-1&mode=design&t=9AgFraqeMWRqO0VX-0"
          />
        </div>
      </Inner>
    </>
  );
}
