import { SubpageTitle } from "../../components/Title";
import mockup from "../../assets/images/landing-page/x2y2_mockup.jpg";
import designGuide from "../../assets/images/x2y2/x2y2_Style-Guide.jpg";
import mainVideo from "../../assets/videos/x2y2/x2y2-main.mov";
import sub1Video from "../../assets/videos/x2y2/x2y2-sub1.mov";
import sub2Video from "../../assets/videos/x2y2/x2y2-sub2.mov";
import styled from "@emotion/styled";
import Desc from "../../components/Desc";
import { MdArrowOutward } from "react-icons/md";
import DescLine from "../../components/DescLine";
import DescLineInner from "../../components/DescLineInner";
import MovePage from "../../components/MovePage";
import SubpageFooter from "../../components/layout/SubpageFooter";
import Video from "../../components/Video";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Inner = styled.div`
  .mockup-img {
    height: 100svh;
    position: relative;
    left: -3.333vw;
    background: url(${mockup}) no-repeat 30% 48% /120%;
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

export default function X2y2() {
  // AOS
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Inner>
        <SubpageTitle highlight="X2Y2" light>
          &nbsp;NFT MARKETPLACE
        </SubpageTitle>
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
              <li>Personal PROJECT </li>
              <li>작업기간 | 24.01-02(1주 반 소요)</li>
              <li>
                <a
                  href="https://github.com/chkim9910/x2y2-Renewal"
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
                  href="https://www.figma.com/file/HGUUNmASp6wjTSMuonrRk4/X2Y2?type=design&node-id=0%3A1&mode=design&t=ThEXa9JAJPcw0LsM-1"
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
              국내 NFT 사이트 x2y2를 리다지인한 개인 프로젝트입니다.
              <br /> 정보성 사이트의 지루하고 복잡한 느낌을 없애기 위해 효율적인
              접근성을 고려하여 UI 요소를 배치하였고, 심플 모던한 레이아웃을
              제작하였습니다. <br /> react로 제작하여 코드 관리를 용이하게
              하였고, motion framer, gsap 등의 다양한 인터렉션 요소를
              배치하였습니다.  모바일, 태블릿 등 사용자 환경을 고려하여 반응형
              웹페이지로 제작되었습니다.
            </p>
          </Desc>
          <DescLine title="skill set">
            <DescLineInner subtitle="Programing Languages">
              <ul>
                <li>JavaScript(ES6)</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </DescLineInner>
            <DescLineInner subtitle="Framework/ Library">
              <ul>
                <li>React</li>
                <li>Styeld Component </li>
                <li>Chakra UI</li>
                <li>Motion Framer</li>
                <li>GSAP</li>
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
            <img src={designGuide} alt="x2y2 design system" width={"850px"} />
          </Desc>
          <Desc title="details">
            <Video src={mainVideo}>
              <h2 className="title video-subtitle">main page</h2>
              <p>
                랜딩페이지는 Swiper.js로 구현한 nft 상품을 소개하는 슬라이드로
                시작합니다. Explore Collection 버튼을 클릭하면 collection의
                상세페이지로 이동합니다. 이후 table 태그로 제작한 Hot
                Collections 섹션, ETH의 시세를 한 눈에 파악하기 쉽게 배치한
                Market, NFT Loan 섹션으로 이어집니다. mouse hover 기능을 적극
                활용한 Spotlight 섹션에서는 현재 주목받는 nft 및 작가 소개를
                하고, layout의 깔끔함을 유지하기 위해 슬라이드로 제작한 광고
                섹션으로 마무리됩니다.
              </p>
            </Video>
            <Video src={sub1Video}>
              <h2 className="title video-subtitle">Collection page</h2>
              <p>
                작가에 대한 소개와 작품의 시세를 확인할 수 있는 미니 table을
                상단에 배치하였습니다. 필터는 좌측 레이아웃에 배치하였으나 phone
                size와 tablet size에서는 상단에 배치되도록 하였습니다. motion
                framer를 활용해 작품을 hover 했을 때의 애니메이션을 구현하였으며
                작품을 클릭하면 작품 상세 페이지로 이동합니다.
              </p>
            </Video>
            <Video src={sub2Video}>
              <h2 className="title video-subtitle">details page</h2>
              <p>
                작품의 상세 정보를 담고 있는 페이지입니다. 하단에 More from this
                collection 섹션은 작가의 다른 작품들을 소개하는 섹션으로
                슬라이드로 구현하였습니다.
              </p>
            </Video>
          </Desc>
          <DescLine title="link to page">
            <LinkInner className="inner">
              <a
                href="https://chkim9910.github.io/x2y2-Renewal"
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
                href="https://chkim9910.github.io/x2y2-Renewal/moreview1"
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
                href="https://chkim9910.github.io/x2y2-Renewal/moreview2"
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
            left="동물자유연대"
            right="CHANEL 22 BAG"
            lefturl="/kawa"
            righturl="/chanel22bag"
          ></MovePage>
          <SubpageFooter
            github="https://github.com/chkim9910/x2y2-Renewal"
            figma="https://www.figma.com/file/HGUUNmASp6wjTSMuonrRk4/X2Y2?type=design&node-id=0%3A1&mode=design&t=ThEXa9JAJPcw0LsM-1"
          />
        </div>
      </Inner>
    </>
  );
}
