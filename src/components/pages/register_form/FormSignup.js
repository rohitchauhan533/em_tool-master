import React, { Fragment } from "react";
import useForm from "./useForm";
import EmailImage from "../../assests/images/siarhei-plashchynski-M8uqeRT_Vh8-unsplash.jpg";
import "../../../css/style.css";
import Navbar from "../../navbar";
import { Link } from "react-router-dom";


const FormSignup = () => {
    //validation
  function validateInfo(values) {
    let errors = {};

    if (!values.first_name.trim()) {
      errors.first_name = "Firstname required";
    } else if (!/^[A-Za-z]+/.test(values.first_name.trim())) {
      errors.first_name = "Enter a valid first name";
    }
    if (!values.last_name.trim()) {
      errors.last_name = "Lastname required";
    } else if (!/^[A-Za-z]+/.test(values.last_name.trim())) {
      errors.last_name = "Enter a valid last name";
    }

    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.password) {
      errors.password = "Password required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }

    if (!values.password2) {
      errors.password2 = "Password required";
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passwords do not match";
    }
    if(errors==null){

    }
    let condition =(Object.keys(errors).length === 0 && errors.constructor === Object);
//    console.log(condition);
    return { errors, condition };

  }

  //importing methods from useForm 

  const { handleChange, handleSubmit, values, errors } = useForm(validateInfo);

//   posting for

  return (
    <Fragment>
      <Navbar msg={"Already a user ?"} buttonInput={"Sign In"} link="/" />
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
                noValidate
                method="POST"
              >
                <h1>Create Account</h1>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="First Name"
                    id="first_name"
                    name="first_name"
                    value={values.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.first_name && (
                    <p className="error-p">{errors.first_name}</p>
                  )}
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Last Name"
                    id="last_name"
                    name="last_name"
                    value={values.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.last_name && (
                    <p className="error-p">{errors.last_name}</p>
                  )}
                </div>
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
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Confirm Password"
                    id="password2"
                    name="password2"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.password2 && (
                    <p className="error-p">{errors.password2}</p>
                  )}
                  <p className="text-muted">
                    Use 8 or more characters for Password
                  </p>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg col-12" 
                  >
                    Create Account
                  </button>
                </div>
                <p className="px-5 text-muted alreadySignIn ">
                  Already have an account?{" "}
                  <Link to="/" className="text-decoration-none ">
                    Sign in
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

export default FormSignup;
