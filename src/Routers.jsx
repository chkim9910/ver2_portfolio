// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Layout from "./components/layout/Layout";
import X2y2 from "./views/x2y2/X2y2";
import Chanel from "./views/chanel/Chanel";
import Knb from "./views/knb/Knb";
import Kawa from "./views/kawa/Kawa";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/x2y2" element={<X2y2 />} />
          <Route path="/CHANEL 22 BAG" element={<Chanel />} />
          <Route path="/국립발레단" element={<Knb />} />
          <Route path="/동물자유연대" element={<Kawa />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
