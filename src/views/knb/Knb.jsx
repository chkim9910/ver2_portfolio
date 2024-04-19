import { SubpageTitle } from "../../components/Title";
import mockup from "../../assets/images/landing-page/v2_국립발레단_mockup.jpg";
import styled from "@emotion/styled";

const Inner = styled.div`
  .mockup-img {
    width: 110%;
    height: 80svh;
    position: relative;
    left: -3.333vw;
    background: url(${mockup}) no-repeat 50% 30% /100%;
  }
`;

export default function Knb() {
  return (
    <>
      <Inner>
        <SubpageTitle>국립발레단</SubpageTitle>
        <div className="mockup-img"></div>
      </Inner>
    </>
  );
}
