import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPickup } from '../services/pickup-service';
// import axios from 'axios';




const Pickup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    date: "",
    mobileNumber: "",
    time: "",
    remarks: "",
    pickupAddress: "",
    estimatedWeight: "",
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
      date: "",
      mobileNumber: "",
      time: "",
      remarks: "",
      pickupAddress: "",
      estimatedWeight: "",
    });
  };
  //   sumbmiting the form

  const submitForm = (event) => {
    event.preventDefault();

    console.log(data);
    console.log("Hii");

    if (data.date.length === 0) {
      toast.error("Please enter Date");
    } else if (data.mobileNumber.length === 0) {
      toast.error("Please enter Mobile Number");
    } else if (data.time.length === 0) {
      toast.error("Please enter Time");
    } else if (data.pickupAddress.length === 0) {
      toast.error("Please enter Address For Pickup");
    } else if (data.estimatedWeight.length === 0) {
      toast.error("Please Select Weight");
    } else if (data.remarks.length === 0) {
      toast.error("Please enter Remarks");
    } else {
      addPickup(data)
        .then((resp) => {
          console.log(resp);
          resetData();
          console.log("success log");
          toast.success("Pickup Schedule sucessfully with id " + resp.id);
          navigate("/Confirmation");
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

      // const response = axios.post("/pickup",data);
      

    }
  };





  return (
    <>
      <div >
        <center>
          <div className="card border border-success shadow p-3 mb-5 bg-white rounded $enable-shadows svg-shadow shadow-success shadow-intensity-lg " style={{ width: "30rem", height: "38rem", backgroundColor: " rgb(58, 179, 74)", marginTop: "10px" }}>

            <div className="card-body" style={{ marginTop: "20px", width: "20rem ", height: "23rem" }}>

              <form className="row g-2 needs-validation"  onSubmit={submitForm} >
                <table>
                  <tr>

                    <tr>
                      <td><b className="text-secondary ">Select Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></td>
                      <td><b className="text-secondary"> Select Time:</b></td>
                    </tr>

                    <tr>
                      <td><input type="Date" style={{ color: "green", width: "9rem", height: "2.4rem" }} id="date" className="border border-success rounded" required   onChange={(e) => handleChange(e, "date")}
                value={data.date}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td>
                        {/* <select class="form-select border  col-auto border border-success"  style={{width:"9rem"}} required>
              <option selected disabled style={{color:"green"}} ><b>Select time</b></option>
              <option style={{color:"green"}}>10 to 3</option>
              <option style={{color:"green"}}>3 to 7</option>
             </select> */}

                        <input type={'time'} id="time" required  onChange={(e) => handleChange(e, "time")}
                value={data.time} />
                      </td>
                    </tr>
                    <br></br>
                  </tr>




                  <tr>
                    <label className="text-secondary"><b>Select an Address</b></label>
                    <textarea className="form-control border border-success" id="pickupAddress" rows="2" cols="25" required  onChange={(e) => handleChange(e, "pickupAddress")}
                value={data.pickupAddress}></textarea>  <br></br>
                  </tr>


                  <tr>
                    <label className="text-secondary"><b>Mob. Number:</b></label><br></br>
                    <input type={Text} class='border border-success rounded' style={{ width: "11rem", height: "2rem" }} id='mobileNumber'   required  onChange={(e) => handleChange(e, "mobileNumber")}
                value={data.mobileNumber}></input>
                    <br></br>

                  </tr>

                  <tr>
                    <br></br>
                    <label className="text-secondary"><b>Estimated Weight</b></label>
                    <select className="form-select border border-success col-auto border border-success" style={{ width: "11rem" }} required  id='estimatedWeight' onChange={(e) => handleChange(e, "estimatedWeight")}
                value={data.estimatedWeight}>
                      <option selected disabled><b>Select Weight</b></option>
                      <option  >Less than 20kg </option>
                      <option >20-50kg</option>
                      <option >50-100kg</option>
                      <option >100-700kg</option>
                      <option >More than 700kg</option>

                    </select>
                    <br></br>
                  </tr>
                  <tr>
                    <label className="text-secondary "><b >Remarks</b> (Optional)</label><br></br>
                    <textarea rows={2} style={{ width: "25rem" }} class="border border-success rounded" id='remarks'  onChange={(e) => handleChange(e, "remarks")}
                value={data.remarks} />
                  </tr>

                  <tr>
                    <br></br>

                    {/* <strong><input type="submit" class="btn btn-success btn-lg" value={"Schedule a Pickup"}></input></strong>  */}
                    <button onClick={submitForm} type="submit" class="btn btn-success" style={{ marginTop: "10px" }}>
                       {/* <a href="/Confirmation" style={{ textDecoration: "none", color: "white" }}>Schedule a Pickup</a> */}
                       Schedule a Pickup
                       </button>
                  </tr>

                </table>

              </form>
              <br></br>


            </div>


            {/* #3AB34A" */}
          </div>
        </center>
      </div>


    </>
  );
};

export default Pickup;
