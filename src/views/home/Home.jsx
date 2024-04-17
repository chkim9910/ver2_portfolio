import styled from "@emotion/styled";
import { IoLogoGithub } from "react-icons/io";
import arr from "../../assets/images/comm/arrow.png";

const Wrap = styled.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-top: 155px; */

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
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 3.333vw 30px;
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

export default function Home() {
  return (
    <>
      <Wrap>
        <TopBox className="top-box">
          <h2 className="title">CHOHYANG</h2>
          <p className="desc">
            2024 포트폴리오는 퍼블리싱에 발을 내딛은 2023년 하반기부터 step by
            step으로 배우며 만든 프로젝트들을 정리한 결과물입니다. 현재는 개발
            블로그를 운영하며 사용자 관점의 ui/ux 디자인 공부와 프론트앤드 개발
            공부를 기록으로 남기고 있습니다. <br />
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
      </Wrap>
    </>
  );
}
