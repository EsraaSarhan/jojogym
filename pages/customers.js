import Link from "next/link";
import { useEffect, useState } from "react";
import PageBanner from "../src/components/PageBanner";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { getPagination, pagination } from "../src/utils";
import useFetchData from '../src/components/customHooks/useFetchData'


const Customers = () => {
  const token = '';
  const { data } = useFetchData('https://gym-mgmt-system-development.herokuapp.com/api/v1/customers/?page=1&page_size=10');
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

  // function deleteUser(id) {
  //   console.log(id, token)
   
       
  //   fetch('https://gym-mgmt-system-development.herokuapp.com/api/v1/customers/' + id, {
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
    <Layout bodyClass={"classes"}>
      <PageBanner pageName={"العميلات"} />

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
                    <th scope="col">الاشتراكات</th>
                    <th scope="col">العمر</th>
                    <th scope="col">تاريخ الالتحاق</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>

                  {data && (
                    data.map((user, index) => (
                      <tr key={user.id}>
                        <th scope="row">{index}</th>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.mobile_number}</td>
                        <td>{user.subscriptions}</td>
                        <td>{user.age}</td>
                        <td>{user.customer_created_a}</td>
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
export default Customers;
