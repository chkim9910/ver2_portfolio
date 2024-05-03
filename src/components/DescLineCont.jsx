import styled from "@emotion/styled";
import tw from "twin.macro";

const Text = styled.div`
  ${tw`mt-2 [word-break: keep-all] [font-weight: 400]`}
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export default function DescLineCont(props) {
  return (
    <>
      <Text>{props.children}</Text>
    </>
  );
}
