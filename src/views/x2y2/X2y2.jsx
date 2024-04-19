import { SubpageTitle } from "../../components/Title";
import mockup from "../../assets/images/landing-page/x2y2_mockup.jpg";
import styled from "@emotion/styled";

const Inner = styled.div`
  .mockup-img {
    width: 110%;
    height: 80svh;
    position: relative;
    left: -3.333vw;
    background: url(${mockup}) no-repeat 30% 54% /136%;
  }
`;

export default function X2y2() {
  return (
    <>
      <Inner>
        <SubpageTitle highlight="X2Y2" light>
          &nbsp;NFT MARKETPLACE
        </SubpageTitle>
        <div className="mockup-img"></div>
      </Inner>
    </>
  );
}
