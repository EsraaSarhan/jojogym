import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LatestProgramSlider from "../src/components/LatestProgramSlider";
import PhotoGallerySlider from "../src/components/PhotoGallerySlider";
import TestimonialSlider from "../src/components/TestimonialSlider";
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
