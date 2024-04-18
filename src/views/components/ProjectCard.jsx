import styled from "@emotion/styled";
import { MdArrowForward } from "react-icons/md";

const Inner = styled.div`
  max-height: 530px;
  flex: 1;
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
  top: 0;
  transition: top 0.3s;
  will-change: transform;
  &:hover {
    top: -20px;
  }
  .inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
  }
  .text-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .name {
    font-size: 26px;
    font-weight: 500;
  }
  .arr-icon {
    font-size: 36px;
  }
  .desc {
    font-size: 14px;
  }
  .img {
    background: url(${(props) => props.img}) no-repeat 43% 50% / cover;
    height: 445px;
  }
`;

export default function ProjectCard(props) {
  return (
    <>
      <Inner img={props.img}>
        <a href={"/" + props.name} className="inner">
          <div className="img"></div>
          <div className="text-box">
            <div className="text-top">
              <h3 className="name">{props.name}</h3>

              <span className="arr-icon">
                <MdArrowForward />
              </span>
            </div>
            <p className="desc">{props.children}</p>
          </div>
        </a>
      </Inner>
    </>
  );
}
