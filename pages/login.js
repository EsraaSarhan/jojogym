import { Nav, Tab } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import TfCounter from "../src/components/TfCounter";



const Login = () => {
  return (
    <Layout bodyClass={"about"}>
      <PageBanner pageName={"تسجيل الدخول"} />
      <TfCounter />
    </Layout>
  );
};
export default Login;

