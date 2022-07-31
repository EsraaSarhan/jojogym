import  React, {setState, setPosts, useEffect, useState} from 'react';
import { useForm } from "react-cool-form";
//import Cookies from 'universal-cookie';
import Cookies from 'js-cookie';
import Layout from "../src/layouts/Layout";
import PageBanner2 from "../src/components/PageBanner2";






const Register = ({ nonst }) => {
//  const { formErrors, isLoaded, loginErrors } = this.state;
//  const navigate = useNavigate();
//  const state = {
//   redirect: false
// }

const [errorsList,setErrorsList] = useState([]);
  const { form, use } = useForm({
    defaultValues: { username: "", password1: "", password2: "", email: "" },
    onSubmit: (values) => 
    fetch('https://gms-apis.herokuapp.com/api/v1/auth/registration/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values, undefined, 2)
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
       // this.setState({ datastore: items })        
       if(result.key){
       // localStorage.setItem('token', result.key)
        localStorage.setItem('token', result.key);
        localStorage.setItem('loggedUserName', values.username);
        window.location.href = '/customers';

       }
       else{
        setErrorsList(result);
       }
      },
      (error) => {
        console.log(error)

       
      }
    )
      });
  const errors = use("errors");

  //const { redirect } = state;

  
  return (
    <Layout bodyClass={["shop", "style"]}>
      <PageBanner2 pageName={"تسجيل عميلة جديدة"} />
      <section className={`tf-section tf-counter background-light`}>
        <img
          src="assets/images/pattern/fun-fact-1.png"
          alt="Image"
          className="fun-fact1 wow fadeInLeft animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        />
        <img
          src="assets/images/pattern/fun-fact-2.png"
          alt="Image"
          className="fun-fact2 wow fadeInRight animated"
          data-wow-delay="0.3ms"
          data-wow-duration="1200ms"
        />
  
  {/* {loginErrors}  */}
  
        <div className="container">
          <div className="row">
            <div className="col-11 m-auto">
            <form ref={form} noValidate
                    method="post"
                    id="loginform"
                    className="comment-form"
                  >
                    <div className="row-form st-1 mg-bt-20">
                      <input
                        type="text" required
                        id="Username"
                        name="username"
                        placeholder="اسم المستخدم"
                        error={errors.username}
                      />
                        <span className="error">{errors.username && <span>اسم المستخدم مطلوب</span>}</span>
                    </div>
                    <div className="row-form st-1 mg-bt-20">
                      <input
                        type="email" required
                        placeholder="البريد الالكتروني"
                        id="Email"
                        name="email"
                        error={errors.email}
                      />
                    <span className="error">{errors.email && <span> البريد الالكتروني مطلوب مثال (example@example.com)</span>}</span>
                    </div>
                    <div className="row-form st-1 mg-bt-20">
                      <input
                        type="password" required
                        placeholder="كلمة المرور"
                        id="Password"
                        name="password1"
                        error={errors.password1}
                      />
                    <span className="error">{errors.password1 && <span>كلمةالمرور مطلوبة</span>}</span>
                    </div>
                    <div className="row-form st-1 mg-bt-20">
                      <input
                        type="password" required
                        placeholder="تأكيد كلمة المرور "
                        id="Password"
                        name="password2"
                        error={errors.password2}
                      />
                    <span className="error">{errors.password2 && <span>كلمةالمرور مطلوبة</span>}</span>
                    </div>

                    <span className="error d-block">
{errorsList.username}
                    </span>
                    <span className="error d-block">
{errorsList.email}
                    </span>
                    <span className="error d-block">
{errorsList.password1}
                    </span>
                    <span className="error d-block">
{errorsList.password2}
                    </span>
                    <div className="row-form">
                      <button className="fl-btn st-14">
                        <span className="inner">تسجيل</span>
                      </button>
                    </div>
            </form>

            <div className='mt-3'>
                  <a className="fa-2x" href="./login">تسجيل الدخول</a>
                  </div>
            </div>
            
          </div>
        </div>
      </section>

    
    </Layout>
  );
};
export default Register;
