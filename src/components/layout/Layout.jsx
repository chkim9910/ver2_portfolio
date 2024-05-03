import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "@emotion/styled";
import { useRef } from "react";
import { RefContext } from "../../RefContext";

const Box = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    padding: 0 3.333vw;
    overflow: hidden;
  }
  @media screen and (min-width: 480px) and (max-width: 768px) {
    overflow-x: hidden;
    padding: 0 28px;
  }
  @media screen and (max-width: 480px) {
    overflow-x: hidden;
    padding: 0 16px;
  }
`;

export default function Layout() {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <RefContext.Provider value={{ aboutRef, projectRef, contactRef }}>
        <div className="wrap">
          <Header />
          <Box className="main">
            <Outlet />
          </Box>
        </div>
      </RefContext.Provider>
    </>
  );
}
