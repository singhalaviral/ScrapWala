import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogin } from '../services/user-service';




const UserLogin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    mobileNumber: "",
    pincode: "",
    email: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      mobileNumber: "",
      pincode: "",
      email: "",
    });
  };
  //   sumbmiting the form

  const submitForm = (event) => {
    event.preventDefault();

    console.log(data);

    if (data.name.length === 0) {
      toast.error("Please enter Name");
    } else if (data.mobileNumber.length === 0) {
      toast.error("Please enter Mobile Number");
    } else if (data.pincode.length === 0) {
      toast.error("Please enter Pincode");
    } else if (data.email.length === 0) {
      toast.error("Please enter Email Id");
    } else {
      userLogin(data)
        .then((resp) => {
          console.log(resp);
          resetData();
          console.log("success log");
          toast.success("User registerd sucessfully with id " + resp.id);
          navigate("/ScrapRates");
        })
        .catch((e) => {
          console.log(e);
          console.log("error log");
          //error handling
          setError({
            errors: e,
            isError: true,
          });
        });
    }
  };



  return (
    <>
    <center>  
          <div>
        <form>
        <div class="card border border-success shadow p-3 mb-5
bg-white rounded $enable-shadows svg-shadow shadow-success
shadow-intensity-lg  " style={{
            width: "20rem",
            height: "31rem", backgroundColor: " rgb(58, 179, 74)", margin: "20px"
          }}>
          <h2>User Login </h2>
          <div class="card-body" style={{ marginTop: "20px" }}>
            <div class="form-floating mb-3">
              
              <input type="name" class="form-control" id="name"
                placeholder="abc xyz" onChange={(e) => handleChange(e, "name")}
                value={data.name}/>
              <label for="floatingInput">Name</label>
            </div>

            <div class="form-floating">
              <input type="number" class="form-control"
                id="pincode" placeholder="pinCode" onChange={(e) => handleChange(e, "pincode")}
                value={data.pincode}/>
              <label for="pincode">PinCode</label>
            </div>

            <br></br>
            <div class="form-floating">
              <input type="Number" class="form-control"
                id="mobileNumber" placeholder="Number" onChange={(e) => handleChange(e, "mobileNumber")}
                value={data.mobileNumber} />
              <label for="Number">Mob. Number</label>
            </div>

            <br></br>
            <div class="form-floating">
              <input type="Email" class="form-control"
                id="email" placeholder="Email" onChange={(e) => handleChange(e, "email")}
                value={data.email} />
              <label for="Email">Email(optional)</label>
            </div>

            {/* <div>
              <p class="font-weight-light font-italic "><a href="#" >
                <br /><i style={{ color: "blue" }}>Admin Login</i></a></p>
            </div> */}
            <div class="d-grid gap-2 mx-auto" style={{ marginTop: "40px" }}>

              {/* <div class="d-grid gap-2 col-6 mx-auto"
style={{marginTop:"40px"}}> */}
              <button onClick={submitForm} class="btn btn-success" type="button"><b>Next</b></button>

            </div>
          </div>
        </div>
        </form>
      </div></center>

    </>
  );
};

export default UserLogin;