import React from "react";
import "./ScrapRates.css";
import plastic from "./images/plastic1.jpg";
import metals from "./images/metals.jpg";
import paper from "./images/paper.png";
import printer from "./images/printer.jpg";
import steel from "./images/steel.jpg";
import iron from "./images/iron.jpg";
import clock from "./images/clock.jpg";
import press from "./images/press.png";
import fan from "./images/fan.png";
import key from "./images/keyboard.png";
import lamp from "./images/lamp.png";
import ups from "./images/ups.png";
import fri from "./images/doublefri.png";
import copy from "./images/copy.png";
import single from "./images/singlefri.png";
import tv from "./images/smartv.svg";
import mac from "./images/washingmachine.png";
import cpu from "./images/cpu.png";
import monitor from "./images/monitor.png";
import inventor from "./images/invertor.png";
import bags from "./images/bags.svg";
import oven from "./images/oven.png";
import lcd from "./images/lcd.png";
import toys from "./images/toys.png";
import ac from "./images/ac.svg";
import cycle from "./images/bicycle.png";
import bike from "./images/bike.png";
import cabels from "./images/cabels.jpg";
import simpletv from "./images/simpletv.png";
import smarttv from "./images/smarttv.png";
import wm from "./images/wm.png";
import wood from "./images/wood.jpg";
import glass from "./images/glass.jpg";
import car from "./images/car.jpg";
import rubber from "./images/rubber.jpg";
import cooler from "./images/cooler.jpg";
import ironcooler from "./images/ironcooler.jpg";
import flex from "./images/flex.jpg";
import footwear from "./images/footwear.png";
import duvets from "./images/duvets.jpg";
import curtains from "./images/curtains.jpg";
import bedsheets from "./images/bedsheets.jpg";
import pillow from "./images/pillow.jpg";
import clothes from "./images/clothes.jpg";
import chairs from "./images/chair.jpg";
import mobile from "./images/mobile.jpg";
import kettle from "./images/kettle.jpg"
import geyser from "./images/geyser.jpg";
import motor from "./images/motor.jpg";

import { Component } from 'react'
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import PickupForm from "./PickupForm";
import { Link } from "react-router-dom";


export class ScrapRates extends Component {
     render() {
          return (

               <>
                    <br /><br />
                    <center><h1>Scrap Rates</h1></center>
                    <br></br>
                    <div className="container" >
                         <div className="row">
                              {/* column 1 */}
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Plastic</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={plastic} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.11.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
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
                                                       <img src={metals} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.40.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>

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
                                                       <img src={paper} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.15.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Printer</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={printer} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.15.0/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>

                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Clock</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={clock} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.10.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Iron Press</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={press} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.25.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Ceiling Fan</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={fan} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.35.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Keyboard</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={key} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.15.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Lamp</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={lamp} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.15.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>UPS</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={ups} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.44.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Fridge(double)</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={fri} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.700.0/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Fridge(single)</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={single} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.500.0/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Smart TV</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={tv} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.150.0/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h5>Washing Machine(F)</h5></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={mac} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.850.0/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>CPU</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={cpu} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.200.0/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Monitor</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={monitor} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.140.0/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Steel</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={steel} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.35.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Iron</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={iron} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.30.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Invertor</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={inventor} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.40.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Bags</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={bags} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.25.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Oven</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={oven} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.65.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>LCD</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={lcd} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.95.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>

                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Toys</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={toys} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.20.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>AC</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={ac} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.3000.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Bicycle</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={cycle} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.200.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Bike</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={bike} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.2300.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Car</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={car} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.25000.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Cabels</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={cabels} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.25.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Simple TV</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={simpletv} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.100.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Smart TV</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={smarttv} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.110.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Washing Machine(II)</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={wm} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.550.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Wooden Items</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={wood} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.65.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Glass Items</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={glass} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.45.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Rubber</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={rubber} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.40.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Cooler</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={cooler} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.30.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Iron Cooler</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={ironcooler} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.35.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Flex Printer</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={flex} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.50.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>footwear</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={footwear} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.15.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Duvets</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={duvets} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.25.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Curtains</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={curtains} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.20.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Bedsheets</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={bedsheets} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.20.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Pillow</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={pillow} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.10.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Clothes</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={clothes} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.15.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Chairs</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={chairs} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.15.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Mobile</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={mobile} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.20.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Kettle</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={kettle} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.20.00/Piece</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Geyser</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={geyser} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.20.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>
                              <div className="col-3">

                                   <div className="card border border-success" >
                                        <Container>
                                             <center><h4>Electric motor</h4></center>
                                             <div class="card-body">
                                                  <div className="card-image">
                                                       <img src={motor} style={{ width: "150px", height: "150px" }} />
                                                  </div>
                                                  {/* <h5 class="card-title">Plastic</h5> */}
                                                  <center><p class="card-text"><b>Rs.30.00/KG</b></p></center>
                                                  <center><button class="btn btn-warning" ><Link to="/PickupForm" style={{ textDecoration: "none" }}>Next</Link> </button></center>
                                             </div>
                                        </Container>
                                   </div>
                              </div>

                         </div>
                         <br></br>
                         <br></br>
                    </div>

               </>
          );
     }
}

export default ScrapRates;
