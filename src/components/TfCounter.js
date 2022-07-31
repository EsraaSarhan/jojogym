import  React, {setState, setPosts, useEffect} from 'react';
import { useForm } from "react-cool-form";
//import Cookies from 'universal-cookie';
import Cookies from 'js-cookie';




const TfCounter = ({ nonst }) => {
//  const { formErrors, isLoaded, loginErrors } = this.state;
//  const navigate = useNavigate();
//  const state = {
//   redirect: false
// }

  const { form, use } = useForm({
    defaultValues: { username: "", password: "" },
    onSubmit: (values) => 
    fetch('https://gms-apis.herokuapp.com/api/v1/auth/login/', {
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
      },
      (error) => {
        console.log(error)

       
      }
    )
      });
  const errors = use("errors");

  //const { redirect } = state;

 
    return (
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
                    {/* <div className="row-form st-1 mg-bt-20">
                      <input
                        type="email" required
                        placeholder="البريد الالكتروني"
                        id="Email"
                        name="email"
                        error={errors.email}
                      />
                    <span className="error">{errors.email && <span> البريد الالكتروني مطلوب مثال (example@example.com)</span>}</span>
                    </div> */}
                    <div className="row-form st-1 mg-bt-20">
                      <input
                        type="password" required
                        placeholder="كلمة المرور"
                        id="Password"
                        name="password"
                        error={errors.password}
                      />
                    <span className="error">{errors.password && <span>كلمةالمرور مطلوبة</span>}</span>
                    </div>
                    <div className="row-form">
                      <button className="fl-btn st-14">
                        <span className="inner">تسجيل الدخول</span>
                      </button>
                    </div>
                  </form>

                  <div className='mt-3'>
                    <p className='fa-2x'>مستخدم جديد ؟ </p>
                  <a className="fa-2x" href="./register">تسجيل مستخدم جديد</a>
                  </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  
};
export default TfCounter;
