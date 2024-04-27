import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Layout from "./components/layout/Layout";
import X2y2 from "./views/x2y2/X2y2";
import Chanel from "./views/chanel/Chanel";
import Knb from "./views/knb/Knb";
import Kawa from "./views/kawa/Kawa";

const Routers = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/x2y2" element={<X2y2 />} />
          <Route path="/chanel22bag" element={<Chanel />} />
          <Route path="/knb" element={<Knb />} />
          <Route path="/kawa" element={<Kawa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
