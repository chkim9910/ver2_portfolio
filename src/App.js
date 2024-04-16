import styled from "@emotion/styled";
import React from "react";
import tw from "twin.macro";

const Box = styled.div`
  ${tw`p-10 bg-red-400 text-white font-bold text-3xl hover:bg-red-500`}
  transition: all 0.3s
`;

function App() {
  return (
    <>
      <Box>
        <p>hello</p>
      </Box>
    </>
  );
}
export default App;
