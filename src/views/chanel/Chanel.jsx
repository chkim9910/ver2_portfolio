import { SubpageTitle } from "../../components/Title";
import mockup from "../../assets/images/landing-page/chanel_mockup.jpg";
import styled from "@emotion/styled";

const Inner = styled.div`
  .mockup-img {
    width: 110%;
    height: 80svh;
    position: relative;
    left: -3.333vw;
    background: url(${mockup}) no-repeat 50% 40% /120%;
  }
`;

export default function Chanel() {
  return (
    <>
      <Inner>
        <SubpageTitle>CHANEL 22 BAG</SubpageTitle>
        <div className="mockup-img"></div>
      </Inner>
    </>
  );
}
