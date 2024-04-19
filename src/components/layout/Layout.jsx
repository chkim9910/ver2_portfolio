import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "@emotion/styled";
import { useRef } from "react";
import { RefContext } from "../../RefContext";

const Box = styled.div`
  padding: 0 3.333vw;
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
