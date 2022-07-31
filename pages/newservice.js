import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner2 from "../src/components/PageBanner2";
import { useForm } from "react-cool-form";
import {
  LeftArrow,
  LeftArrowWhite,
  RightArrow,
  RightArrowWhite,
} from "../src/Icons";
import Layout from "../src/layouts/Layout";
const RangeSlider = dynamic(() => import("../src/components/RangeSlider"), {
  ssr: false,
});

const NewService = () => {
  let sort = 6;
  //const token = '';
  const [token, setToken] = useState([]);
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
  //  token = localStorage.getItem('token');
    setToken(localStorage.getItem('token'))
  }, [active]);
  console.log(token)
  const { form, use } = useForm({
    
    defaultValues: { service_name: "", service_type: "", service_status: "", service_cost: "", sessions_count: 0 },
    onSubmit: (values) => 
    
    fetch('https://gms-apis.herokuapp.com/api/v1/services/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      },
      body: JSON.stringify(values, undefined, 2)
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
       // console.log(result.non_field_errors[0]);
       // this.setState({ datastore: items })        
       if(result.id){
        
        // setState({redirect:true})
        window.location.href = '/services';

       }
      },
      (error) => {
        console.log(error)

       
      }
    )
      });

  //https://gms-apis.herokuapp.com/api/v1/customers/

  
  return (
    <Layout bodyClass={["shop", "style"]}>
      <PageBanner2 pageName={"تسجيل عميلة جديدة"} />
      <section className="tf-section tf-newservice">
        
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-5">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">اضافة خدمة جديدة</span>
                  <RightArrow />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="animated fadeInUp m-auto w-50 wow"
                data-wow-delay="0.3ms"
                data-wow-duration="1000ms"
              >
                <form
                  ref={form} noValidate
                  method="post"
                  id="registercustomerform"
                  className="registercustomerform"
                >
                  <div className="row-form st-1 mg-bt-20">
                    <input
                      type="text"
                      id="service_name"
                      name="service_name"
                      placeholder="اسم الخدمة"
                    />
                  </div>

                  <div className="row-form st-1 mg-bt-20 position-relative">
                  
                    <select
                      placeholder=" نوع الخدمة"
                      id="service_type"
                      name="service_type">
                        <option>نوع الخدمة</option>                    
            <option value="SS">اشتراك</option>
          <option value="CS">حملات</option>
          <option value="PS">حفلات</option>
                    </select>
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={21}
                      height={17}
                      viewBox="0 0 21 17"
                    >
                      <g data-name={2}>
                        <image
                          width={21}
                          height={17}
                          xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABa0lEQVQ4jaXUTUtVURTG8d+9xI2cSGMnzvwC0bgmDmwUODAJbJLOblJaRNMigoIgJ7twEKSlzqpP0EAQ/AIS5UAcNImoIOhFZdW+trl4jm/P5OznrLP/a+299j6N7fFxx1JK/2dPTDTiceJ4xF3YKdxDG9NR6UlcxBL+HAHZg7c4j20MNNGHl3iF1iGBrQIYei6l9wHdwCcM403OfFDNFsCPefkC+gudbg1i8YAV38TlPA7GqJS+daCh139L/6cLeIpGDXAI9wt/XUorHdMsAu28DaEx3KoA9uNFMXdBSjPlByX0K24XPo7IuS5gK5+S09l/wNXurM0uH1uwWsSiot4ifhdn8vg3Rjr7WAfdwrXCx3F7jLO4hKkidqcooBYaWsZc4a8gmjBfNO8dHu4FrILKTfpREfueE20dFrqJRxWxG1ivAtZBQwH93PUulv2sDrgf9AseFP5nvnnx0zgyNPQkNy6u4STW9gPCDvM8S/1q2ASSAAAAAElFTkSuQmCC"
                        />
                      </g>
                    </svg>
                  </div>

                  <div className="row-form st-1 mg-bt-20 position-relative">
                  
                  <select
                    placeholder=" حالة الخدمة"
                    id="service_status"
                    name="service_status">
                      <option>حالة الخدمة</option>
                     <option value="1">مفعلة</option>
          
      
          
          <option value="0">غير مفعلة</option>
                  </select>
                  <svg
                    className="icon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={21}
                    height={17}
                    viewBox="0 0 21 17"
                  >
                    <g data-name={2}>
                      <image
                        width={21}
                        height={17}
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABa0lEQVQ4jaXUTUtVURTG8d+9xI2cSGMnzvwC0bgmDmwUODAJbJLOblJaRNMigoIgJ7twEKSlzqpP0EAQ/AIS5UAcNImoIOhFZdW+trl4jm/P5OznrLP/a+299j6N7fFxx1JK/2dPTDTiceJ4xF3YKdxDG9NR6UlcxBL+HAHZg7c4j20MNNGHl3iF1iGBrQIYei6l9wHdwCcM403OfFDNFsCPefkC+gudbg1i8YAV38TlPA7GqJS+daCh139L/6cLeIpGDXAI9wt/XUorHdMsAu28DaEx3KoA9uNFMXdBSjPlByX0K24XPo7IuS5gK5+S09l/wNXurM0uH1uwWsSiot4ifhdn8vg3Rjr7WAfdwrXCx3F7jLO4hKkidqcooBYaWsZc4a8gmjBfNO8dHu4FrILKTfpREfueE20dFrqJRxWxG1ivAtZBQwH93PUulv2sDrgf9AseFP5nvnnx0zgyNPQkNy6u4STW9gPCDvM8S/1q2ASSAAAAAElFTkSuQmCC"
                      />
                    </g>
                  </svg>
                </div>
                  <div className="row-form st-1 mg-bt-20 mg-bt-20">
                    <input
                      type="number"
                      placeholder="تكلفة الخدمة"
                      id="service_cost"
                      name="service_cost"
                    />
                  
                  </div>
                  <div className="row-form st-1 mg-bt-20">
                    <input
                      type="number"
                      placeholder="عدد الجلسات"
                      id="sessions_count"
                      name="sessions_count"
                    />
                    
                  </div>

                  

                  <div className="row-form ml-auto mt-5 mr-auto">
                    <button className="fl-btn st-14">
                      <span className="inner">حفظ</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default NewService;
