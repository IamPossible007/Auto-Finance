import { Route, Routes } from "react-router-dom";
import { TopNavbar } from "../components/navbar/TopNavbar";
import Home from "../pages/Home";

function RootRouter() {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default RootRouter;
