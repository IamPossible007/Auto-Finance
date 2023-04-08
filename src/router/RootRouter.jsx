import { Route, Routes } from "react-router-dom";
import { TopNavbar } from "../components/navbar/TopNavbar";
import Home from "../pages/Home";
import Loans from "../pages/Loans";
import { FooterSocial } from "../components/footer/FooterSocial";
import NotFound from "../pages/NotFound";

function RootRouter() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/loans' element={<Loans />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>
      <FooterSocial />
    </>
  );
}

export default RootRouter;
