import { useEffect } from "react";
// import TfCounter from "../src/components/TfCounter";
import {
  LeftArrow,
  LeftArrowWhite,
  RightArrow,
  RightArrowWhite,
} from "../src/Icons";
import Footer2 from "../src/layouts/Footer2";
import Header1 from "../src/layouts/header/Header1";
import Layout from "../src/layouts/Layout";
import { fourSlider, heroSlider } from "../src/SliderProps";
import { activeNavMenu } from "../src/utils";

const Index = () => {
  useEffect(() => {
    activeNavMenu();
  }, []);

  return (
    <Layout noFooter noHeader bodyClass={"main"}>
      <Header1 />
    
     
      <Footer2 />
    </Layout>
  );
};
export default Index;
