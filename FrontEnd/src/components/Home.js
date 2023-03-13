import React from "react";
import { Link } from "react-router-dom";
import bg from "./images/bg.png";
import "./Home.css";
import map from "./images/map2.jpg";
import plastic from "./images/plastic1.jpg";
import metals from "./images/metals.jpg";
import paper from "./images/paper.png";
import { Card } from "react-bootstrap";
import { Component } from 'react'
import { Container } from "react-bootstrap";
import './Blogs.js'
import ScrapRates from "./ScrapRates";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Otp from "./Otp.js";



function Home()
{
    return(
        <>
  
        {/* <section id="mysection" class="section-bg"> */}
  
        {/* <Navbar />  */}
              <div className="home">
            <div className="headerContainer" id="home" style={{backgroundImage:`url(${bg})`}} >
           
            {/* <div className="headerContainer" style="background: url(./)"> */}
            </div>
      
             </div> 
        {/* </section> */}
        <br></br>
             <br></br>  
             <br></br>  
             <div className="container" >
              <div className="row">
              <div className="col-2" style={{marginLeft:"80px", color:"green" , width:"20rem"}}><br></br><br></br><br></br>
                <h1 style={{fontSize:"55px"}}> "Sell your scrap online with Scrap<span style={{color:"green"}}>वाला"</span></h1>
               </div> 
               <div className="col-2" style={{ marginLeft:"200px"}}>


{/* 
              <div class="card border border-success shadow p-3 mb-5 bg-white rounded "
               style={{marginLeft:"450px",marginTop:"10px",width:"20rem", height:"17rem",backgroundColor:" rgb(58, 179, 74)"}}>
                
                <div class="card-body">
                  <h5 class="card-title card-text">Schedule a Pickup</h5>
                 
                  <form>
                  <p class="card-text">MOBILE:<br></br>
                               <table cellPadding={5}>
                                   
                                   <tr>
                                       <td><div><span style={{width:"2rem"}}>+91</span> <input type="number" name="number" maxLength={12}/></div><br></br></td>
                                   </tr>
                  <a href="#" class="btn btn-success btn-lg">&nbsp;&nbsp;&nbsp;&nbsp;<label>Next</label>&nbsp;&nbsp;&nbsp;&nbsp; </a>
                  </table>
                  </p>
                 
                  <p class="font-weight-light font-italic "><i>Facing Problems? Call us at</i> <a href="tel:+91 1234567890" style={{color:"green"}}> <br></br><i style={{color:"green"}}>+911234567890</i></a></p>
                           </form> 
                           
                
                </div>
                </div> */}


                <Otp/>
              </div>
              </div>
              </div>
              
             <br></br>
             <br></br> 
             <br></br>  
             <br></br>            

   {/* How It works */}

<div class="container text-center">
<h2 class="how_works_title">How it works</h2>
<div class="row"><div class="col-lg-4 col-md-6">
<div class="how_works_col"><h4 style={{color:"white"}}>Schedule a pickup</h4>
<img src="https://ik.imagekit.io/y8s2vhk66ef/undraw_Online_calendar_re_wk3t_1_SHrgqjm1w6l.png?updatedAt=1628624813421" alt=""/></div></div>
<div class="col-lg-4 col-md-6">
<div class="how_works_col"><h4 style={{color:"white"}}>Pickup at your address</h4>
<img src="https://ik.imagekit.io/y8s2vhk66ef/undraw_Street_food_re_uwex_1_tHCc3auJgJY.png?updatedAt=1628624814853" alt=""/></div></div>
<div class="col-lg-4 col-md-6">
<div class="how_works_col"><h4 style={{color:"white"}}>Receive payment</h4><img src="https://ik.imagekit.io/y8s2vhk66ef/undraw_Credit_card_payments_re_qboh_1_Sop8u3hvUiX.png?updatedAt=1628624812461" alt=""/>
</div></div></div></div>
<br></br> 
<br></br>
  
{/* presence accross nation */}


<section><div class="container h-100 d-flex flex-column justify-content-center"><h1 class="pt-10 d-block d-lg-none text-center">Our <span class="fg-success-2">Presence</span> Across Nation</h1>
        <br></br>
        <div class="row align-items-center">
            <div class="col-12 col-lg-6 order-lg-1 order-2"><h1 class="d-none d-lg-block" style={{color:"green"}}>Our <span class="fg-success-2">Presence</span> Across Nation</h1>
            <br></br><br></br>
                <div class="py-6 body-lg text-center text-lg-start">
                   <h5> The<span style={{color:'green'}}> ScrapWala</span> has established its services in <span class="fg-success-2"> Major city of Maharashtra </span> and is now expanding its reach in other parts of the state.</h5>
                </div><br></br>
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">
                    
                
                <br></br>
           
                    <div class=" container-bg-warning-2 rounded-3 text-center">
                    <button type="button" class="btn btn-success">Pune</button>&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-warning" style={{width:"8rem"}}>Ahmednagar</button>
                       <div class="body-sm fg-warning-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coming soon </div></div>
                    <div class=" container-bg-warning-2 rounded-3 text-center">
                    <button type="button" class="btn btn-warning">Mumbai</button>
                        <div class="body-sm fg-warning-1">coming soon</div></div>
                        <div class=" container-bg-warning-2 rounded-3 text-center">
                        <button type="button" class="btn btn-warning">Nashik</button>
                        <div class="body-sm fg-warning-1">coming soon</div></div>
                        <div class=" container-bg-warning-2 rounded-3 text-center">&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="button" class="btn btn-warning">Nagpur</button>
                        <div class="body-sm fg-warning-1" style={{marginLeft:"120px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;coming soon</div></div>
                        <div class=" container-bg-warning-2 rounded-3 text-center">
                        <button type="button" class="btn btn-warning">Aurangabad</button>
                        <div class="body-sm fg-warning-1">coming soon</div></div></div></div>


            <div class="col-lg-5 offset-lg-1 col-12 order-1 order-lg-2" >
                <img src={map} style={{height:"500px",width:"480px"}}alt="india-map-with-markers"/>
                </div></div></div></section>

{/* <ScrapRates></ScrapRates> */}

{/* Scrap three categories with link */}


<center><h1>Scrap Rates</h1></center> 
<br></br>
          
         <br></br><br></br><br></br>
          <div className="container" >
                <div className="row">
        {/* column 1 */}
                <div className="col-3">
                     
                       <div className="card border border-success" >
                <Container>
                <center><h4>Plastic</h4></center>
                     <div class="card-body">
                     <div className="card-image">
                   <img src={plastic} style={{width:"200px"}} />
                        </div>
                         {/* <h5 class="card-title">Plastic</h5> */}
                         <center><p class="card-text"><b>Rs.14.00/KG</b></p></center>
                
                    
             </div>
                 </Container>
             </div>
        </div>

        <div className="col-3">
                     

                       <div className="card border border-success" >
                <Container>
               <center><h4>Metals</h4></center> 
                     <div class="card-body">
                     <div className="card-image">
                   <img src={metals} style={{width:"200px", height:"180px"}} />
                        </div>
                         {/* <h5 class="card-title">Plastic</h5> */}
                         <center><p class="card-text"><b>Rs.50.00/KG</b></p></center>
                
                    
             </div>
                 </Container>
             </div>
        </div>

        <div className="col-3">
                    
                       <div className="card border border-success" >
                <Container>
                <center><h4>Paper</h4></center>
                     <div class="card-body">
                     <div className="card-image">
                   <img src={paper} style={{width:"200px",height:"180px"}} />
                        </div>
                         {/* <h5 class="card-title">Plastic</h5> */}
                         <center><p class="card-text"><b>Rs.10.00/KG</b></p></center>
                 </div>
             </Container>
             </div>
        </div>
       
        <div className="col-3">
                <button type="button"   class="btn btn-link btn btn-warning btn-lg"style={{marginTop:"120px"}}> <a href="/ShowScraps" style={{textDecoration:"none"}}>View All</a></button>
     </div>

        </div>
        </div>
          <br></br>
          <br></br>
          <br></br>
         
         
<br></br><br></br><br></br>
<Footer/>

{/* 
Blogs */}


  </>

    );
}
export default Home;