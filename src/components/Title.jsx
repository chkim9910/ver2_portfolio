import styled from "@emotion/styled";
import tw from "twin.macro";

const Inner = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  .title {
    font-weight: 700;
    font-size: 28px;
    height: 30px;
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
