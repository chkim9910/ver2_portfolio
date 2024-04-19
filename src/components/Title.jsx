import styled from "@emotion/styled";
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
  height: 772px;
  .inner {
    width: fit-content;
  }
  .top {
    font-size: 24px;
    letter-spacing: 15px;
    font-weight: 400;
  }
  .title {
    font-size: 100px;
    /* font-weight: 300; */
    font-weight: ${(props) => (props.light ? 300 : 400)};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* height: 130px; */
  }
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
`;

export function SubpageTitle(props) {
  return (
    <>
      <SubpageInner className="title-box" light={props.light}>
        <div className="inner">
          <span className="top">RESPONSIVE</span>
          <p className="title">
            <span className="highlight">{props.highlight}</span>
            {props.children}
          </p>
          <span className="bottom">WEBSITE</span>
        </div>
      </SubpageInner>
    </>
  );
}
