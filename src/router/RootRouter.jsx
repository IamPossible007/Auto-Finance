import { Route, Routes } from "react-router-dom";
import { TopNavbar } from "../components/navbar/TopNavbar";
import Home from "../pages/Home";
import Loans from "../pages/Loans";

function RootRouter() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/loans' element={<Loans />} />
      </Routes>
    </>
  );
}

export default RootRouter;
