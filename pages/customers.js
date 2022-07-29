import Link from "next/link";
import { useEffect, useState, React, useRef } from "react";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-cool-form";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Toast from 'react-bootstrap/Toast';



import useFetchData from '../src/components/customHooks/useFetchData'


const Customers = () => {

  const { data } = useFetchData('http://jms-apis.herokuapp.com/api/v1/customers/?page=1&page_size=100');
  console.log(data);

  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  const [token, setToken] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isUserExist, setisUserExist] = useState(false);
  const nodeRef = useRef(null);


  const [showDeletedToast, setshowDeletedToast] = useState(false);
  const [showLinkedToast, setshowLinkedToast] = useState(false);
  const [showUnLinkedToast, setshowUnLinkedToast] = useState(false);

  //isUserExist


  useEffect(() => {

    setToken(localStorage.getItem('token'));
    // pagination(".single-product__", sort, active);
    // let list = document.querySelectorAll(".single-product__");
    // setstate(getPagination(list.length, sort));
  }, [active]);


  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

//  setShowToast(true);


  const handleClose = () => setShow(false);

  //http://jms-apis.herokuapp.com/api/v1/customers/

  const { form, use } = useForm({
    defaultValues: { first_name: selectedUser.first_name, last_name: selectedUser.last_name, mobile_number: selectedUser.mobile_number, age: selectedUser.age },
    onSubmit: (values) =>

      fetch('http://jms-apis.herokuapp.com/api/v1/customers/' + selectedUser.id + '/', {
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
            // console.log(result.non_field_errors[0]);
            // this.setState({ datastore: items })        
            if (result.key) {

              setState({ redirect: true })
              window.location.href = '/customers';

            }
          },
          (error) => {
            console.log(error)


          }
        )
  });

  const handleShow = (userId) => {

    fetch("http://jms-apis.herokuapp.com/api/v1/customers/" + userId + "/", {
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
          setSelectedUser(res);
          setisUserExist(true)
        }


        setShow(true);

      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteUser = (userId) => {
    fetch('http://jms-apis.herokuapp.com/api/v1/customers/' + userId + '/', {
      method: 'DELETE',
      headers:{
        'Authorization': 'Token ' + token
      }

    })
    .then(res => console.log(res))
    .then(
      (result) => {
        setShowToast(true);
        setInterval(() => {
          window.location = "./customers"
        }, 1000);
        //data = useFetchData('http://jms-apis.herokuapp.com/api/v1/customers/?page=1&page_size=10');
      },
      (error) => {
        console.log(error)


      }
    )
  };

  const fingerPrintSettings = (user) => {
    if (user.service_profile_status === "1") {
      fetch('http://jms-apis.herokuapp.com/api/v1/customers/' + user.id + '/delete_user_fingerprint_profile/', {
        method: 'DELETE',
        headers: {
          'Authorization': 'Token ' + token
        }

      })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            if (result.id) {
              setshowUnLinkedToast(true);
              user.fingerprint_profile_status = "2";
              setInterval(() => {
                window.location = "./customer"
              }, 1000);
            }
            else {
              setshowUnLinkedToast(false)
            }

          },
          (error) => {
            console.log(error)
            setshowUnLinkedToast(false)

          }
        )
    }
    else {
      fetch('http://jms-apis.herokuapp.com/api/v1/customers/' + user.id + '/add_user_fingerprint_profile/', {
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
              setshowLinkedToast(true)
              user.fingerprint_profile_status = "1";
              setInterval(() => {
                window.location = "./customers"
              }, 1000);
            }
            else {
              setshowLinkedToast(false)
            }

          },
          (error) => {
            console.log(error)
            setshowLinkedToast(false)

          }
        )
    }


  };



  return (
    <Layout bodyClass={"classes"}>
      
      <PageBanner pageName={"العميلات"} />
        
       <Toast nodeRef={nodeRef} onClose={() => setshowDeletedToast(false)} show={showDeletedToast} autohide delay={1500} bg="success" className="bg-success toast-container top-0 start-0 p-3">
          <Toast.Body className="Dark text-white">
            <h6 ref={nodeRef}>تم حذف العميلة بنجاح</h6>
          </Toast.Body>
        </Toast>

        <Toast nodeRef={nodeRef} onClose={() => setshowLinkedToast(false)} show={showLinkedToast} autohide delay={1500} bg="success" className="bg-success toast-container top-0 start-0 p-3">
          <h6 ref={nodeRef}>تم ربط العميلة بجهاز البصمة</h6>
          <Toast.Body className="Dark text-white">
          </Toast.Body>
        </Toast>

        <Toast nodeRef={nodeRef} onClose={() => setshowLinkedToast(false)} show={showLinkedToast} autohide delay={1500} bg="success" className="bg-success toast-container top-0 start-0 p-3">
          <h6 ref={nodeRef}>تم ازالة
            ربط الخدمة بجهاز البصمة</h6>
          <Toast.Body className="Dark text-white">
          </Toast.Body>
        </Toast>
      <section className="tf-section tf-program-details">
        <img src="assets/images/pattern/program_details1.png" alt="" className="bg1" />
        <img src="assets/images/pattern/program_details2.png" alt="" className="bg2" />
     
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                  <LeftArrow />
                  <h2 className="inner-sub st-1">قائمة العميلات</h2>
                  <RightArrow />
                </div>
              </div>
            </div>
            <div className="col-12">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">الأسم الأول</th>
                    <th scope="col">الأسم الثاني</th>
                    <th scope="col">رقم الجوال </th>
                    
                    <th scope="col">العمر</th>
                    <th scope="col">الخدمات</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>


             

                  {data && data.results && (
                    data.results.map((user, index) => (
                      <tr key={user.id}>
                        <th scope="row">{index}</th>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.mobile_number}</td>
                        <td>{user.age}</td>
                        <td>
                        {/* {user.services &&
                            (user.services.map((service, i) = (
                              <span key={i}>
                              <span>test</span>
                            </span>
                              ))
                              )} */}

{user.services &&

user.services.map((service) => {


  return (

      <li key={service.id}>

        {service.service_name}

      </li>

  );


})

}
                        </td>
                        
                        <td>
                        {user && user.fingerprint_profile_status === "1" ? (
                                <>
                                  <button className="btn btn-action" title="ازالة العميلة من جهاز البصمة" onClick={event => fingerPrintSettings(user)}>
                                    <i className="fas fa-minus-circle">

                                    </i><i className="fas fa-fingerprint"></i>
                                  </button>
                                </>) : (
                                <button className="btn btn-action" title="اضافة العميلة الى جهاز البصمة" onClick={event => fingerPrintSettings(user)}>
                                  <i className="fas fa-plus-circle">

                                  </i><i className="fas fa-fingerprint"></i>
                                </button>
                              )}
                          <button className="btn btn-action" onClick={event => handleShow(user.id)}><i className="fas fa-edit"></i></button>
                          <button className="btn btn-action" onClick={event => deleteUser(user.id)}><i className="fas fa-trash"></i></button>
                        </td>
                      </tr>

                    ))
                  )}


                </tbody>

              </table>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>تعديل بيانات العميلة</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {isUserExist ? (
            <>
              <form 
                ref={form} noValidate
                method="put"
                id="registercustomerform"
                className="registercustomerform"
              >
                <div className="row-form st-1 mg-bt-20">
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    defaultValue={selectedUser.first_name}
                    placeholder="الأسم الأول ......"
                  />
                </div>
                <div className="row-form st-1 mg-bt-20">
                  <input
                    type="text"
                    placeholder="الأسم الأخير ......"
                    defaultValue={selectedUser.last_name}
                    id="last_name"
                    name="last_name"
                  />

                </div>
                <div className="row-form st-1 mg-bt-20">
                  <input
                    type="text"
                    placeholder="رقم الجوال ..."
                    id="mobile_number"
                    defaultValue={selectedUser.mobile_number}
                    name="mobile_number"
                  />

                </div>

                <div className="row-form st-1 mg-bt-20 position-relative">

                <select
                      placeholder=" العمر..."
                      id="age" defaultValue={selectedUser.age}
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
                </div>
                <div className="row-form st-1 mg-bt-20">
                  <DropdownMultiselect
                    options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
                    name="countries"
                  />
                </div>

                <div className="row-form ml-auto mt-5 mr-auto">
                  <button className="fl-btn st-14">
                    <span className="inner">حفظ بيانات العميلة</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="alert alert-danger" role="alert">
              عذرا حدث خطأ في ارجاع معلومات العميل
            </div>
          )}
        </Modal.Body>

      </Modal>


      
    </Layout>
  );
};
export default Customers;
