import React, { Fragment, useState } from "react";
import Navbar from "../../navbar";
import EmailImage from "../../assests/images/siarhei-plashchynski-M8uqeRT_Vh8-unsplash.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const SignInForm = () => {
  function validateSignIn(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  }
  const SigninInfo = (validate) => {
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validate(values))
      if(Object.keys(errors).length === 0 && errors.constructor === Object){
          console.log(values);
          post();    
      }
    };

    return { handleChange, handleSubmit, values, errors };
  };

  const { handleChange, handleSubmit, values, errors } =
    SigninInfo(validateSignIn);


    // async function post(url, data = {}) {
    //     const response = await fetch(url, {
    //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //       headers: {
    //         'Accept':'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(data) 
    //     });
    //     console.log(response);
    //   }


      //axios postman
     async  function post(){
      var data = JSON.stringify(values);
      
      var config = {
        method: 'post',
        url: 'https://webhook.site/4aae5f02-1305-4def-8c1e-cd84f39ff319',
        headers: { 
          'Content-Type': 'application/json', 
        },
        data : data
      };
      
     await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
     

  return (
    <Fragment>
      <Navbar
        msg={"Don't have Just Mail Account yet ?"}
        buttonInput={"Create Account"}
        link="/register"
      />
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 col-sm-6  shadow-lg
          p-3
          mb-5
          bg-body
          rounded "
          >
            <div>
              <h1 className="fw-bold">Create Just Mail Account</h1>
              <h5 className="text-muted">
                Sign up by easily and get access to the services
              </h5>
            </div>
            <div className="img-fluid">
              <img
                src={EmailImage}
                alt=""
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
          <div
            className="
          col-md-6 col-sm-6 col-xs-12 col-sm-12
          shadow-lg
          p-3
          mb-5
          bg-body
          rounded
        "
          >
            <div className="mx-5 my-5">
              <form
                className="row g-3"
                onSubmit={handleSubmit}
                method="POST"
                noValidate
              >
                <h1>Sign In</h1>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="error-p">{errors.email}</p>}
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <p className="error-p">{errors.password}</p>
                  )}
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg col-12"
                  >
                    Sign In
                  </button>
                </div>
                <p className="px-5 text-muted alreadySignIn">
                  Don't have Just Mail Account yet ?{" "}
                  <Link to="/register" className="text-decoration-none mt-3">
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignInForm;
