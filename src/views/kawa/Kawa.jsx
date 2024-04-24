import { SubpageTitle } from "../../components/Title";
import mockup from "../../assets/images/landing-page/동물자유연대_mockup.jpg";
import styled from "@emotion/styled";
import { MdArrowOutward } from "react-icons/md";
import MovePage from "../../components/MovePage";
import SubpageFooter from "../../components/layout/SubpageFooter";
import DescLine from "../../components/DescLine";
import Desc from "../../components/Desc";
import DescLineInner from "../../components/DescLineInner";
import designGuide from "../../assets/images/kawa/동물자유연대_Style-Guide.jpg";
import Video from "../../components/Video";
import gnbVideo from "../../assets/videos/kawa/kawa-gnb.mov";
import mainVideo from "../../assets/videos/kawa/kawa-main-1.mov";
import sub1Video from "../../assets/videos/kawa/kawa-sub1-1.mov";
import sub2Video from "../../assets/videos/kawa/kawa-sub2-1.mov";

const Inner = styled.div`
  .mockup-box {
    width: calc(100% + 6.666vw);
    height: 100svh;
    position: relative;
    left: -3.333vw;
    background: #ffd599;
    -webkit-mmask-image: linear-gradient(#ffd599 100%, #ffd599 100%);
    mask-image: linear-gradient(#ffd599 100%, #ffd599 100%);
    overflow: hidden;
  }
  .mockup-img {
    width: 120%;
    height: 115%;
    background: url(${mockup}) no-repeat 0% 30% / 105%;
    transform: rotate(-16deg) translate(-130px, 20px);
    overflow-x: hidden;
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
  }
  .link:hover {
    color: var(--primary);
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

export default function Kawa() {
  return (
    <>
      <Inner>
        <SubpageTitle>동물자유연대</SubpageTitle>
        <div className="mockup-box">
          <div className="mockup-img"></div>
        </div>
        <div className="desc">
          <Desc title="intro">
            <ul className="intro-li">
              <li>Personal PROJECT </li>
              <li>작업기간 | 23.10 ( 4주 소요)</li>
              <li>
                <a
                  href="https://github.com/chkim9910/KAWA-Renewal"
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
                  href="https://www.figma.com/file/oGmHO1S6dBk6dJOjPv28mk/%EB%8F%99%EB%AC%BC%EC%9E%90%EC%9C%A0%EC%97%B0%EB%8C%80?type=design&node-id=0-1&mode=design&t=K6VMelMtl3o5qHrP-0"
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
              국내의 비영리단체 동물자유연대의 사이트를 리다지인한 개인
              프로젝트입니다.
              <br /> 기존의 단순하고 옛스러운 느낌에서 탈피하여 현대적이고
              시선을 집중시킬 수 있도록 다양한 인터렉션 요소를 배치하였습니다.
              <br />
              UI 인터페이스는 GSAP ScrollTrigger를 사용하여 스크롤에 따라
              역동적이면서도 자연스러운 움직임을 주었습니다.
              <br /> 또 슬라이드에 Swiper, Glide를 사용하여 자연스러운 넘김
              효과를 주었으며, Bootstrap을 활용하여 모바일 버전의 Gnb에
              자연스러운 드롭다운 효과를 주었습니다.
              <br />본 페이지는 그누보드로 제작하였으며, 사용자 환경에 반응할 수
              있도록 미디어 쿼리를 사용하여 반응형 웹페이지로 제작되었습니다.
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
                <li>gnu board</li>
                <li>GSAP</li>
                <li>Swiper.js</li>
                <li>Glide.js</li>
                <li>Bootstrap</li>
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
          <Desc title="details">
            <Video src={gnbVideo} width="83%" left="50.3%">
              <h2 className="title video-subtitle">gnb</h2>
              <p>
                gnb에 mouse hover 시 전체 메뉴가 보이도록 제작하였습니다.
                상위메뉴에는 상단 밑줄로, 하위 메뉴에는 color와 font weight의
                변화로 highlight을 주었습니다.
              </p>
            </Video>
            <Video src={mainVideo} width="83%" left="50.3%">
              <h2 className="title video-subtitle">main page</h2>
              <p>
                랜딩페이지는 메인 캠페인 소개 섹션을 시작으로 주요활동, 온센터,
                캠페인, 새소식, 뉴스레터, 후원하기 섹션으로 구성됩니다. 메인
                캠페인 소개와 주요활동, 온센터 갤러리, 캠페인 섹션은 Swiper.js
                라이브러리를 활용해 슬라이드로 구현하였습니다. GSAP
                라이브러리로는 다양한 scroll trigger 애니메이션을
                구현하였습니다.
              </p>
            </Video>
            <Video src={sub1Video} width="83%" left="50.3%">
              <h2 className="title video-subtitle">
                미션&비전 page (sub1 page)
              </h2>
              <p>
                미션&비전 페이지는 동물자유연대의 미션과 비전 섹션을 시작으로
                핵심 가치, 프로그램 별 미션과 비전 섹션으로 구성하였습니다.
                핵심가치 섹션은 GSAP을 활용해 인터랙티브하게 액션이 이루어지도록
                제작하였고, 상대적으로 텍스트가 많은 프로그램 별 미션과 비전
                섹션은 horizontal 슬라이드로 구현하여 가독성을 높였습니다.
              </p>
            </Video>
            <Video src={sub2Video} width="83%" left="50.3%">
              <h2 className="title video-subtitle">
                후원안내 page (sub2 page)
              </h2>
              <p>
                후원안내 페이지는 동물자유연대 후원 소개, 후원금 사용처 안내,
                후원 Q&A, 수입 및 지출 보고 섹션으로 구성하였습니다. 후원금
                사용처 안내 섹션은 Glide.js 라이브러리를 사용해 슬라이드를
                제작하였고, active된 이미지 슬라이드에 해당하는 안내글이
                보이도록 제작하였습니다. 후원 Q&A 섹션은 mouse hover 시 카드가
                flip 되면서, 뒷면에 있는 답변이 보이도록 제작하였습니다. Q&A
                섹션의 카드는 css, javascript로 구현하였습니다.
              </p>
            </Video>
          </Desc>
          <DescLine title="link to page">
            <LinkInner className="inner">
              <a
                href="http://chkim.dothome.co.kr/"
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
                href="http://chkim.dothome.co.kr/mission_vision.php"
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
                href="http://chkim.dothome.co.kr/donation.php"
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
          <MovePage left="국립발레단" right="x2y2"></MovePage>
          <SubpageFooter
            github="https://github.com/chkim9910/KAWA-Renewal"
            figma="https://www.figma.com/file/oGmHO1S6dBk6dJOjPv28mk/%EB%8F%99%EB%AC%BC%EC%9E%90%EC%9C%A0%EC%97%B0%EB%8C%80?type=design&node-id=0-1&mode=design&t=K6VMelMtl3o5qHrP-0"
          />
        </div>
      </Inner>
    </>
  );
}
