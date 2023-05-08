import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup'


const Signup = () => {
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),
  });

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cPassword: ''
    },

    // onSubmit:(values)=>{alert(values);}
    onSubmit: async (values) => {
      console.log(values);
      //making request to backend
      //1.what us address?
      //2.reqest method
      //3.data
      //4.data format

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),                     //by default it is get but here we  are   chning to post ..
        //to know abut get and post see in ppt
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      console.log(await res.text())

      console.log('form submitted');
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Nice',
          text: 'User Registered sucessfully'
        });

        //navigate to login page
        navigate('/main/Login')

      } else {
        Swal.fire({
          icon: 'error',
          title: 'oops',
          text: 'something went wrong!'

        });
      }
    },

    validationSchema: SignupSchema
  });
  return (<div>
    <section className="vh-100" >
      <div className="col-md-10 mx-auto h-100">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-4 col-lg-4 col-xl-4 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="text"
                        id="name"
                        value={signupForm.values.name}
                        onChange={signupForm.handleChange}
                        className={"form-control " + (signupForm.errors.name ? "border-danger" : '')}
                        placeholder='your name'
                      />
                      <span style={{ color: "red", fontSize: 10 }}>{signupForm.errors.name}</span>

                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        value={signupForm.values.email}
                        onChange={signupForm.handleChange}
                        className="form-control"
                        placeholder='email'
                      />

                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="password"
                        id='password'
                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                        className="form-control"
                        placeholder='passowrd'
                      />

                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className=" flex-fill mb-0">
                      <input
                        type="password"
                        id="cPassword"
                        value={signupForm.values.cPassword}
                        onChange={signupForm.handleChange}
                        className="form-control"
                        placeholder='repeat password'
                      />

                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                </form>
              </div>

              <div className='col-md-8'>
                <div style={{ backgroundImage: "url('https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1536/https://www.iimtindia.net/Blog/wp-content/uploads/2021/05/Blogging-1536x864.jpg')", height: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  )
}

export default Signup