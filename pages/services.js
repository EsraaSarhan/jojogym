import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import PagginationFuntion from "../src/components/PagginationFuntion";
import { getPagination, pagination } from "../src/utils";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-cool-form";
import useFetchData from '../src/components/customHooks/useFetchData';
import Toast from 'react-bootstrap/Toast';



const Services = () => {
  const [token, setToken] = useState([]);
  const nodeRef = useRef(null);


  const { data } = useFetchData('https://gym-mgmt-system-development.herokuapp.com/api/v1/services/?page=1&page_size=10');
  console.log(data);
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    token = localStorage.getItem('token');
    pagination(".single-product__", sort, active);
    let list = document.querySelectorAll(".single-product__");
    setstate(getPagination(data.length, sort));
  }, [active]);


  const [selectedService, setSelectedService] = useState([]);
  const [isServiceExist, setisServixeExist] = useState(false);
  const [isServiceSaved, setisServiceSaved] = useState(false);


  //isServiceExist


  useEffect(() => {

    setToken(localStorage.getItem('token'))
    pagination(".single-product__", sort, active);
    let list = document.querySelectorAll(".single-product__");
    setstate(getPagination(list.length, sort));
  }, [active]);


  const [show, setShow] = useState(false);
  const [showDeletedToast, setshowDeletedToast] = useState(false);
  const [showLinkedToast, setshowLinkedToast] = useState(false);
  const [showUnLinkedToast, setshowUnLinkedToast] = useState(false);
  const handleClose = () => setShow(false);
  const { form, use } = useForm({
    defaultValues: {
      service_name: selectedService.service_name,
      service_type: selectedService.service_type,
      service_status: selectedService.service_status,
      service_cost: selectedService.service_cost,
      sessions_count: selectedService.service_count
    },
    onSubmit: (values) =>

      fetch('https://gym-mgmt-system-development.herokuapp.com/api/v1/services/' + selectedService.id + '/', {
        method: 'Put',
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
            if (result.id) {
              setisServiceSaved(true);
              setInterval(() => {
                window.location = "./services"
              }, 1000);

            }
          },
          (error) => {
            console.log(error)


          }
        )
  });


  const handleShow = (serviceId) => {

    fetch("https://gym-mgmt-system-development.herokuapp.com/api/v1/services/" + serviceId + "/", {
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json",
        'Authorization': 'Token ' + token
      }
    })
      .then(response => response.json())
      .then(res => {

        console.log(res, "edit");
        if (res.id) {
          setisServixeExist(true);
          setSelectedService(res);
        }


        setShow(true);

      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteService = (serviceId) => {
    fetch('https://gym-mgmt-system-development.herokuapp.com/api/v1/services/' + serviceId + '/', {
      method: 'DELETE',
      headers: {
        'Authorization': 'Token ' + token
      }

    })
      .then(res => console.log(res))
      .then(
        (result) => {
          setshowDeletedToast(true);
          setInterval(() => {
            window.location = "./services"
          }, 1000);
          //data = useFetchData('https://gym-mgmt-system-development.herokuapp.com/api/v1/customers/?page=1&page_size=10');
        },
        (error) => {
          console.log(error)


        }
      )
  };

  const fingerPrintSettings = (serviceId) => {
    //https://gym-mgmt-system-development.herokuapp.com/api/v1/services/5/add_fingerprint_service/'

    fetch('https://gym-mgmt-system-development.herokuapp.com/api/v1/services/' + serviceId + '/add_fingerprint_service/', {
      method: 'POST',
      headers: {
        'Authorization': 'Token ' + token
      }

    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if (result.id) {
            setshowDeletedToast(true)
          }
          else {
            setshowDeletedToast(false)
          }

        },
        (error) => {
          console.log(error)
          setshowDeletedToast(false)

        }
      )
  };
  return (
    <Layout bodyClass={"services"}>
      <PageBanner pageName={"الخدمات"} />

      <section className="tf-section tf-servicesList">
        <Toast nodeRef={nodeRef} onClose={() => setshowDeletedToast(false)} show={showDeletedToast} delay={5000} bg="success" className="bg-success toast-container top-0 start-0 p-3">
          <Toast.Body className="Dark text-white">
            <h6 ref={nodeRef}>تم حذف الخدمة بنجاح</h6>
          </Toast.Body>
        </Toast>

        <Toast nodeRef={nodeRef} onClose={() => setshowLinkedToast(false)} show={showLinkedToast} delay={2000} bg="success" className="bg-success toast-container top-0 start-0 p-3">
          <h6 ref={nodeRef}>تم ربط الخدمة بجهاز البصمة</h6>
          <Toast.Body className="Dark text-white">
          </Toast.Body>
        </Toast>

        <Toast nodeRef={nodeRef} onClose={() => setshowLinkedToast(false)} show={showLinkedToast} delay={2000} bg="success" className="bg-success toast-container top-0 start-0 p-3">
          <h6 ref={nodeRef}>تم ازالة
            ربط الخدمة بجهاز البصمة</h6>
          <Toast.Body className="Dark text-white">
          </Toast.Body>
        </Toast>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <h2 className="inner-sub st-1">قائمة الخدمات</h2>
                  <RightArrow />
                </div>
              </div>
            </div>
            <div className="col-12">
            {data && data.length>0 ? (
            <>
                  <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">اسم الخدمة</th>
                    <th scope="col">نوع الخدمة</th>
                    <th scope="col">حالة الخدمة</th>
                    <th scope="col">تكلفة الخدمة</th>
                    <th scope="col">عدد الجلسات</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>

                  {data && (
                    data.map((service, index) => (
                      <tr key={service.id}>
                        <th scope="row">{service.id}</th>
                        <td>{service.service_name}</td>
                        <td>{service.service_type}</td>
                        <td>{service.service_status}</td>
                        <td>{service.service_cost}</td>
                        <td>{service.sessions_count}</td>
                        <td>
                          <button className="btn btn-action" title="اضافة الخدمةالى جهاز البصمة" onClick={event => fingerPrintSettings(service.id)}> <i className="fas fa-plus-circle"></i><i className="fas fa-fingerprint"></i>
                          </button>
                          <button className="btn btn-action" title="تعديل الخدمة" onClick={event => handleShow(service.id)}><i className="fas fa-edit"></i></button>
                          <button className="btn btn-action" title="مسح الخدمة" onClick={event => deleteService(service.id)}><i className="fas fa-trash"></i></button>
                        </td>
                      </tr>

                    ))
                  )}


                </tbody>

              </table>
            </>) : (
            <div className="alert alert-danger" role="alert">

            <h6>
              حدث خطأ اثناء استرجاع البيانات الرجاء المحاولة لاحقا            </h6>          </div>
          )}
              
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>تعديل بيانات العميلة</Modal.Title>
        </Modal.Header>/
        <Modal.Body>
          {isServiceSaved ? (
            <>
              <div className="alert alert-success" role="alert">

                <h6>
                  تم حفظ التعديلات
                </h6>          </div>
            </>) : (
            <span></span>
          )}

          {isServiceExist ? (
            <>
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
                    defaultValue={selectedService.service_name}
                  />
                </div>

                <div className="row-form st-1 mg-bt-20 position-relative">

                  <select
                    placeholder=" نوع الخدمة"
                    id="service_type"
                    name="service_type"
                    defaultValue={selectedService.service_type}
                  >
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
                    name="service_status"
                    defaultValue={selectedService.service_status}
                  >
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
                    defaultValue={selectedService.service_cost}

                  />

                </div>
                <div className="row-form st-1 mg-bt-20">
                  <input
                    type="number"
                    placeholder="عدد الجلسات"
                    id="sessions_count"
                    name="sessions_count"
                    defaultValue={selectedService.sessions_count}
                  />

                </div>



                <div className="row-form ml-auto mt-5 mr-auto">
                  <button className="fl-btn st-14">
                    <span className="inner">حفظ التعديلات</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="alert alert-danger" role="alert">
              عذرا حدث خطأ في ارجاع معلومات الخدمة
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Layout>
  );
};
export default Services;
