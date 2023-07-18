import { Outlet } from "react-router-dom";
import GeneralFooter from "./GeneralFooter";
import Nav from "./Nav";

const SharedLayouts = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <GeneralFooter />
    </>
  );
};

export default SharedLayouts;
