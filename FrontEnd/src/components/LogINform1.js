import React from 'react'
import AdminLogin from './AdminLogin'




function LogINform1() {
    return (
        <div>
            <div class="card p-3 mb-5 bg-white rounded $enable-shadows svg-shadow shadow-success shadow-intensity-lg  " style={{width:"30rem", height:"31rem",backgroundColor:" rgb(58, 179, 74)", margin:"20px", top:0,left:0}}>
  
            <div class="card-body" style={{marginTop:"20px"}}>
            <div class="form-floating mb-3">
            <input type="name" class="form-control" id="floatingInput" placeholder="abc xyz"/>
            <label for="floatingInput">Name</label>
          </div>

          <div class="form-floating">
            <input type="number" class="form-control" id="floatingPincode" placeholder="PinCode"/>
            <label for="pincode">PinCode</label>
          </div>

          <br></br>
          <div class="form-floating">
            <input type="Number" class="form-control" id="floatingNumber" placeholder="Number"/>
            <label for="Number">Mob. Number</label>
          </div>

          <br></br>
          <div class="form-floating">
            <input type="Email" class="form-control" id="floatingEmail" placeholder="Email"/>
            <label for="Email">Email(optional)</label>
          </div>

            <div>
              <ul>
            <li><a href="/AdminLogin" >AdminLogin</a></li>
            </ul>
            </div>
            <div class="d-grid gap-2 mx-auto" style={{marginTop:"40px"}}>

            {/* <div class="d-grid gap-2 col-6 mx-auto" style={{marginTop:"40px"}}> */}
              <button class="btn btn-success" type="button"><b>Next</b></button>

            </div>
                </div> 
              </div>
            
        </div>
    )
}

export default LogINform1
