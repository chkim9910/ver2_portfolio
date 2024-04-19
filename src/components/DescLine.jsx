import styled from "@emotion/styled";
import Title from "./Title";

const Inner = styled.div`
  margin-top: 80px;
  .cont-box {
    display: flex;
    width: 100%;
  }
`;

export default function DescLine(props) {
  return (
    <>
      <Inner>
        <Title>{props.title}</Title>
        <div className="cont-box">{props.children}</div>
      </Inner>
    </>
  );
}
