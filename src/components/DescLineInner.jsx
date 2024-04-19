import styled from "@emotion/styled";
import DescLineCont from "./DescLineCont";

const ContInner = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;

  .content {
    flex: 1;
  }
  .cont-title {
    font-size: 18px;
    font-weight: 600;
    border-top: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
    padding: 2px 0;
    color: var(--primary);
  }
`;

export default function DescLineInner(props) {
  return (
    <>
      <ContInner className="cont-box">
        <div className="content">
          <h3 className="title cont-title">{props.subtitle}</h3>
          <DescLineCont>{props.children}</DescLineCont>
        </div>
      </ContInner>
    </>
  );
}
