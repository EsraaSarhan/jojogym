import { useEffect } from "react";
import VideoPopup from "../components/VideoPopup";
import { activeNavMenu, animation, stickyNav } from "../utils";
import Footer from "./Footer";
import Header2 from "./header/Header2";
import MobileMenu from "./header/MobileMenu";
import ScrollTop from "./ScrollTop";

const Layout = ({ children, noHeader, noFooter, bodyClass }) => {
  useEffect(() => {
    animation();
    stickyNav();
    if (typeof bodyClass === "object") {
      document.querySelector("body").classList.add(...bodyClass);
    } else {
      console.log(typeof bodyClass);
      document.querySelector("body").classList.add(bodyClass);
    }
    activeNavMenu();
  }, []);

  return (
    <div id="wrapper">
      <VideoPopup />
      <div id="page" className="clearfix">
        {!noHeader && <Header2 />}
        <MobileMenu /> {children} {!noFooter && <Footer />}
      </div>
      <ScrollTop />
    </div>
  );
};
export default Layout;
