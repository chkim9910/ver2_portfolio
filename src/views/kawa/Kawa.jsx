import { SubpageTitle } from "../../components/Title";
import mockup from "../../assets/images/landing-page/동물자유연대_mockup.jpg";
import styled from "@emotion/styled";

const Inner = styled.div`
  .mockup-box {
    width: calc(100% + 6.666vw);
    height: 80svh;
    position: relative;
    left: -3.333vw;
    background: #ffd599;
    -webkit-mmask-image: linear-gradient(#ffd599 100%, #ffd599 100%);
    mask-image: linear-gradient(#ffd599 100%, #ffd599 100%);
    overflow: hidden;
  }
  .mockup-img {
    width: 120%;
    height: 115%;
    background: url(${mockup}) no-repeat 0% 30% / 105%;
    transform: rotate(-16deg) translate(-130px, 20px);
    overflow-x: hidden;
  }
`;

export default function Kawa() {
  return (
    <>
      <Inner>
        <SubpageTitle>동물자유연대</SubpageTitle>
        <div className="mockup-box">
          <div className="mockup-img"></div>
        </div>
      </Inner>
    </>
  );
}
