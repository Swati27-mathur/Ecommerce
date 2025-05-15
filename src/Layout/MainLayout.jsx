import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
     <NavBar/>
      <Outlet /> {/* This will render the child route component */}
      <Footer/>
    </>
  );
};

export default MainLayout;