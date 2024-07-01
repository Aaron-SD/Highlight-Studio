import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './layout.css'
const Homelayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Homelayout;
