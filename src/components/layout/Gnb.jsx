import styled from "@emotion/styled";

const Box = styled.div`
  background: var(--primary);
  position: fixed;
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
  height: 100%;
  left: 0;
  right: 0;
  transition: all 0.6s ease-in-out;
`;

export default function Gnb(props) {
  return (
    <>
      <Box className="gnb" isOpen={props.isOpen}></Box>
    </>
  );
}
