import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import useFetchData from '../src/components/customHooks/useFetchData'


const Services = () => {
  const token = '';
  const { data } = useFetchData('https://gym-mgmt-system-development.herokuapp.com/api/v1/services/?page=1&page_size=10');
  console.log(data);
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    token = localStorage.getItem('token');
    pagination(".single-product__", sort, active);
    let list = document.querySelectorAll(".single-product__");
    setstate(getPagination(list.length, sort));
  }, [active]);

  // function deleteservice(id) {
  //   console.log(id, token)
   
       
  //   fetch('https://gym-mgmt-system-development.herokuapp.com/api/v1/Services/' + id, {
  //     method: 'DELETE',
  //     headers:{
  //       'Authorization': 'Token ' + token
  //     }
     
  //   })
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       console.log(result);
       
  //     },
  //     (error) => {
  //       console.log(error)

       
  //     }
  //   )
  // }

  return (
    <Layout bodyClass={"services"}>
      <PageBanner pageName={"الخدمات"} />

      <section className="tf-section tf-servicesList">
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
                          <button className="btn btn-action"><i className="fas fa-edit"></i></button>
                          <button className="btn btn-action" ><i className="fas fa-trash"></i></button>
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
    </Layout>
  );
};
export default Services;
