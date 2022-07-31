import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner2 from "../src/components/PageBanner2";
import { useForm } from "react-cool-form";
import useFetchData from '../src/components/customHooks/useFetchData'

import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

import {findWhere} from 'underscore'

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

const NewCustomer = () => {
  
  let sort = 6;
  //const token = '';
  const [token, setToken] = useState([]);
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);

  const { data } = useFetchData('https://gms-apis.herokuapp.com/api/v1/services/?page=1&page_size=100');
  console.log(data, "esr");

  const gymServices = [
    ];

    /**{ key: "au", label: "Australia" },
    { key: "ca", label: "Canada" },
    { key: "us", label: "USA" },
    { key: "pl", label: "Poland" },
    { key: "es", label: "Spain" },
    { key: "fr", label: "France" },
   */

    if(data && data.results && data.results.length > 0){
      data.results.forEach((service) => {
        service.label = service.service_name;
        service.key = Jservice.service_name//toString(service);
      })

      console.log(data, "errrrr");

    }


   




    const convertStringToObj = (selected) => {
     

    };

    
  useEffect(() => {
  //  token = localStorage.getItem('token');
    setToken(localStorage.getItem('token'))
  }, [active]);
  console.log(token)
  const { form, use ,  formState} = useForm({
    
    defaultValues: { first_name: "", last_name: "", mobile_number: "", age: "", services: gymServices },
    mode: "onChange",
    onSubmit: (values,e) => {
      if(values.services.length > 0){
        values.services.forEach(element => {
          element = JSON.parse(element);
          gymServices.push(element);
        });

        values.services = gymServices;
      }
      
    fetch('https://gms-apis.herokuapp.com/api/v1/customers/', {
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
       if(result.key){
        
        setState({redirect:true})
        window.location.href = '/customers';

       }
      },
      (error) => {
        console.log(error)

       
      }
    )}
      });

      const errors = use("errors");


  //https://gms-apis.herokuapp.com/api/v1/customers/

  
  return (
    <Layout bodyClass={["shop", "style"]}>
      <PageBanner2 pageName={"تسجيل عميلة جديدة"} />
      <section className="tf-section tf-register">
        <img
          src="assets/images/background/bg-register.png"
          alt="Image"
          className="feature-register"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-5">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <span className="inner-sub st-1">تسجيل عميلة جديدة</span>
                  <RightArrow />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div
                className="fl-register wow fadeInUp animated"
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
                      id="first_name"
                      name="first_name"
                      placeholder="الأسم الأول ......"
                      required 
                      error={errors.first_name}
                    />
                     <span className="error light">{errors.first_name && <span>الاسم الاول المستخدم مطلوب</span>}</span>
                  </div>
                  <div className="row-form st-1 mg-bt-20">
                    <input
                      type="text"
                      placeholder="الأسم الأخير ......"
                      id="last_name"
                      name="last_name"
                      required
                      error={errors.last_name}
                      />
                       <span className="error light">{errors.last_name && <span>الاسم الاخير المستخدم مطلوب</span>}</span>
                  
                  </div>
                  <div className="row-form st-1 mg-bt-20">
                    <input
                      type="text"
                      placeholder="رقم الجوال ..."
                      id="mobile_number"
                      required
                      name="mobile_number"
                      error={errors.mobile_number}
                      />
                       <span className="error light">{errors.mobile_number && <span>الاسم الاخير المستخدم مطلوب</span>}</span>
                    
                  </div>

                  <div className="row-form st-1 mg-bt-20">
                  
                    <select
                      placeholder=" العمر..."
                      id="age" required
                      error={errors.age}
                      
                      name="age">      
          <option value="">العمر...</option>
      <option value="4-7">من 4 الى 7 سنوات</option>
  
      <option value="7-10">من 7 الى 10 سنوات</option>
    
      <option value="10-12">من 10 الى 12 سنوات</option>
      <option value=">12">اكبر من 12 سنة</option>
    
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

                    <span className="error light">{errors.age && <span>عمر المستخدم مطلوب</span>}</span>

                  </div>


                  {data && data.results && data.results.length > 0 ? (
                    <>
                     <div className="row-form st-1 mg-bt-20 w-100">
                  <DropdownMultiselect
                    options={data.results}
                    name="services" 
                    placeholder="الخدمات ......"
                    selectDeselectLabel="جميع الخدمات"
                   
                    
                  />
                  </div>
                      </>
                  ) : (
                    <ul></ul>
                  )}
                 

                  <div className="row-form ml-auto mt-5 mr-auto">
                  

{errors.first_name || errors.last_name || errors.mobile_number || errors.age  ? (
                                <>
                                 <button className="fl-btn st-14" disabled>
                      <span className="inner" >حفظ بيانات العميلة</span>
                    </button>
                                </>) : (
                                <button className="fl-btn st-14">
                                <span className="inner">حفظ بيانات العميلة</span>
                              </button>
                              )}
                    
                  </div>
                </form>
              </div>
            </div>
          </div>        </div>
      </section>

    
    </Layout>
  );
};
export default NewCustomer;
