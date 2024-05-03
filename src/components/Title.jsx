import styled from "@emotion/styled";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import tw from "twin.macro";

const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  .title {
    font-weight: 700;
    font-size: 24px;
    height: 30px;
    color: var(--primary);
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 22px;
      height: 25px;
    }
  }
  @media screen and (max-width: 480px) {
    .title {
      font-size: 20px;
      height: 22px;
    }
  }
`;
const Line = styled.span`
  ${tw`w-5 h-px`}
  background: var(--primary)
`;

export default function Title(props) {
  return (
    <>
      <Inner>
        <span className="title">{props.children}</span>
        <Line></Line>
      </Inner>
    </>
  );
}

const SubpageInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100svh;
  /* @media screen and (max-width: 768px) {
    height: 100svh;
  } */
  .inner {
    width: fit-content;
  }
  .top {
    font-size: 24px;
    letter-spacing: 15px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    .top {
      font-size: 14px;
      letter-spacing: 10px;
    }
  }
  @media screen and (max-width: 480px) {
    .top {
      font-size: 10px;
      letter-spacing: 6px;
    }
  }
  .title {
    font-size: 100px;
    /* font-weight: 300; */
    font-weight: ${(props) => (props.light ? 300 : 400)};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    white-space: nowrap;
    /* height: 130px; */
  }
  @media screen and (max-width: 1279px) {
    .title {
      font-size: 80px;
    }
  }
  @media screen and (max-width: 1070px) {
    .title {
      font-size: 70px;
    }
  }
  @media screen and (max-width: 893px) {
    .title {
      font-size: 60px;
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 56px;
    }
  }
  @media screen and (max-width: 560px) {
    .title {
      font-size: 48px;
    }
  }
  @media screen and (max-width: 480px) {
    .title {
      font-size: 32px;
    }
  }
  /* 
  @media screen and (max-width: 768px) {
    .title {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 648px) {
    .title {
      font-size: 38px;
    }
  }
  @media screen and (max-width: 510px) {
    .title {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 410px) {
    .title {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 380px) {
    .title {
      font-size: 26px;
    }
  } */
  .highlight {
    font-weight: 500;
  }
  .bottom {
    font-size: 24px;
    letter-spacing: 20px;
    font-weight: 400;
    /* width: 100%; */
    display: flex;
    justify-content: flex-end;
    transform: translateX(13px);
  }
  @media screen and (max-width: 768px) {
    .bottom {
      font-size: 14px;
      letter-spacing: 12px;
    }
  }
  @media screen and (max-width: 480px) {
    .bottom {
      font-size: 10px;
      letter-spacing: 8px;
    }
  }
`;

export function SubpageTitle(props) {
  // AOS
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <SubpageInner className="title-box" light={props.light}>
        <div
          className="inner"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="linear"
          data-aos-delay="100"
          /* data-aos-offset="50" */
        >
          <span
            className="top"
            /* data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="100" */
          >
            RESPONSIVE
          </span>
          <p className="title">
            <span className="highlight">{props.highlight}</span>
            {props.children}
          </p>
          <span
            className="bottom"
            /* data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-delay="100" */
          >
            WEBSITE
          </span>
        </div>
      </SubpageInner>
    </>
  );
}
