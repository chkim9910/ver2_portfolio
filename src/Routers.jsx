import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Home from "./views/home/Home";
// import X2y2 from "./views/x2y2/X2y2";
// import Chanel from "./views/chanel/Chanel";
// import Knb from "./views/knb/Knb";
// import Kawa from "./views/kawa/Kawa";
import ScrollToTop from "./components/layout/ScrollToTop";
import React, { Suspense } from "react";
import { PulseLoader } from "react-spinners";
import tw from "twin.macro";

// Lazy loading the components
const Home = React.lazy(() => import("./views/home/Home"));
const X2y2 = React.lazy(() => import("./views/x2y2/X2y2"));
const Chanel = React.lazy(() => import("./views/chanel/Chanel"));
const Knb = React.lazy(() => import("./views/knb/Knb"));
const Kawa = React.lazy(() => import("./views/kawa/Kawa"));

const SpinnerBox = tw.div`
flex justify-center items-center
`;

const Routers = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Suspense
        fallback={
          <SpinnerBox className="loading-spinner">
            <PulseLoader color="#2897A5" />
          </SpinnerBox>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/x2y2" element={<X2y2 />} />
            <Route path="/chanel22bag" element={<Chanel />} />
            <Route path="/knb" element={<Knb />} />
            <Route path="/kawa" element={<Kawa />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
