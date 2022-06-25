import { useEffect } from "react";
import Layout from "../src/layouts/Layout";
import { activeNavMenu } from "../src/utils";
import PageBanner from "../src/components/PageBanner";
import TfCounter from "../src/components/TfCounter";


const Index = () => {
  useEffect(() => {
    activeNavMenu();
  }, []);

  return (
    <Layout bodyClass={"about"}>
      <PageBanner pageName={"تسجيل الدخول"} />
      <TfCounter />
    </Layout>
  );
};
export default Index;
