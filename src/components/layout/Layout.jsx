import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "@emotion/styled";

const Box = styled.div`
  padding: 0 3.333vw;
`;

export default function Layout() {
  return (
    <>
      <div className="wrap">
        <Header />
        <Box className="main">
          <Outlet />
        </Box>
      </div>
    </>
  );
}
