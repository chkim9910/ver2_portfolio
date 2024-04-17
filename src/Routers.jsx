import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Layout from "./components/layout/Layout";
// import Moreview1 from "./views/moreview1/Moreview1";
// import Moreview2 from "./views/moreview2/Moreview2";

const Routers = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/moreview1" element={<Moreview1 />} />
        <Route path="/moreview2" element={<Moreview2 />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
