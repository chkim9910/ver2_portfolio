import styled from "@emotion/styled";
import Title from "./Title";

const Inner = styled.div`
  margin-top: 80px;
  p {
    margin-top: 16px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: ${(props) => (props.ftweight === "500" ? 500 : 400)};
    word-break: keep-all;
  }
`;

export default function Desc(props) {
  return (
    <>
      <Inner ftweight={props.ftweight}>
        <Title>{props.title}</Title>
        <p>{props.children}</p>
      </Inner>
    </>
  );
}
