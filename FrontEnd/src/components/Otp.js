import React, { Component, useEffect } from 'react';
import OtpInput from "otp-input-react";
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast, Toaster } from 'react-hot-toast';
import { auth } from "../firebase-configure.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import LogINform1 from './LogINform1.js';
import { Card, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AdminLogin from './AdminLogin.js';
import { ToastContainer } from "react-toastify";
import { userLogin } from "../services/user-service.js";




const Otp = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);


  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }
  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }



  return (

    <section class="card border border-success" style={{ width: "30rem", height: "26rem", paddingTop: "0.8rem", paddingLeft: "3rem", paddingRight: "3rem" }}>
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <>
            <h2>OTP Verified successfully</h2><br></br>
            <center>
              <button className='btn btn-warning'><a href="/AddUser">User Login</a></button>&nbsp;
              <button className='btn btn-warning'><a href="/AdminLogin">Admin Login</a></button>
            </center>
            {/* add popup of login success */}

            {/* <Form>
                              <center><h4>User Login here</h4></center>
                              <Form.Label ><b>Name</b></Form.Label>
                              <Form.Control type='text' clas="border border-success"></Form.Control>
                              <Form.Label><b>PinCode</b></Form.Label>
                              <Form.Control type='number'></Form.Control>
                              <Form.Label><b>Mob. No:</b></Form.Label>
                              <Form.Control type='number'></Form.Control>
                              <Form.Label><b>Email</b>(Optional)</Form.Label>
                              <Form.Control type='Email'></Form.Control>
                              
                               */}
            {/* <center><a href="/AdminLogin" ><i style={{color:"blue"}}>Admin Login</i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-warning" ><Link to="/ScrapRates">Next</Link>

                              </button>
                              </center> */}

            {/* <center><Link to="/AdminLogin" style={{textDecoration:"none"}}>AdminLogin</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="btn btn-warning" ><Link to="/ScrapRates">Next</Link>
                              </button>
                              </center>


                            </Form> */}

          </>

        ) : (
          <div className='w-80 flex flex-col gap-4 rounded-lg p-4'>
            <h1 style={{ color: "green" }}>
              Schedule a Pickup
            </h1>
            {showOTP ? (
              <>
                <label
                  htmlFor='otp'
                  className='font-bold-text-2xl text-black text-center' style={{ color: "green" }}>
                  Enter your OTP
                </label>


                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autofocus className="opt-container">

                </OtpInput>
                <button onClick={onOTPVerify} className='bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-blue rounded btn btn-success'>
                  {/* {loading &&
                   }  */}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <label htmlFor=""
                  className="font-bold text-xl text-green " >
                  <h3>Enter your mobile number</h3><br></br>
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} /> <br></br>
                <button onClick={onSignup} className=" rounded btn btn-success btn-lg">
                  {/* {loading &&(
                       )} */}
                  <span style={{ color: "white" }}>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>

  );
};

export default Otp;