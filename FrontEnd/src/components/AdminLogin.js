import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminLogin } from '../services/admin-service';




const AdminLogin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    adminNameFirst: "",
    adminNameLast: "",
    adminPassword: "",
    adminLastLogin: "",
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
      adminNameFirst: "",
      adminNameLast: "",
      adminPassword: "",
      adminLastLogin: "",
    });
  };
  //   sumbmiting the form

  const submitForm = (event) => {
    event.preventDefault();

    console.log(data);

    if (data.adminNameFirst.length === 0) {
      toast.error("Please enter First Name");
    } else if (data.adminNameLast.length === 0) {
      toast.error("Please enter Last Name");
    } else if (data.adminLastLogin.length === 0) {
      toast.error("Please enter Pincode");
    }
    else if (data.adminPassword.length === 0) {
      toast.error("Please enter Password:");
    }
    else {
      adminLogin(data)
        .then((resp) => {
          console.log(resp);
          resetData();
          console.log("success log");
          toast.success("Admin registerd sucessfully with id " + resp.id);
          navigate("/AdminRights");
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
      <div><center>
        <div class="card border border-success shadow p-3 mb-5
bg-white rounded $enable-shadows svg-shadow shadow-success
shadow-intensity-lg " style={{
            width: "20rem",
            height: "32rem", backgroundColor: " rgb(58, 179, 74)", margin: "20px"
          }}>
        
          <div class="card-body" style={{ marginTop: "20px" }}>

            <form class="needs-validation" >
              <h3 class="text-secondary">Admin Login</h3>
              <br></br>
              <div class="form-floating mb-3 n">
                <input type="name" class="form-control" id="adminNameFirst"
                  placeholder="first name" required onChange={(e) => handleChange(e, "adminNameFirst")}
                value={data.adminNameFirst}/>
                <label for="floatingInput">First Name</label>
              </div>
              <div class="form-floating mb-3 n">
                <input type="name" class="form-control" id="adminNameLast"
                  placeholder="last name" onChange={(e) => handleChange(e, "adminNameLast")}
                value={data.adminNameLast} required />
                <label for="floatingInput1">Last Name</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="adminPassword"
                  placeholder="Password" onChange={(e) => handleChange(e, "adminPassword")}
                value={data.adminPassword} required />
                <label for="Password">Password</label>
              </div><br></br>
              <div class="form-floating mb-3 n">
                <input type="date" class="form-control" id="adminLastLogin"
                  placeholder="last login" onChange={(e) => handleChange(e, "adminLastLogin")}
                value={data.adminLastLogin} required />
                <label for="floatingInput2">Date</label>
              </div>
              <div class="d-grid gap-2 mx-auto" style={{ marginTop: "40px" }}>
                <button onClick={submitForm}  class="btn btn-success" type="Submit"><b>Next</b></button>

              </div>
            </form>
          </div>
        </div>
      </center>
      </div>
    </>
  );
};

export default AdminLogin;
