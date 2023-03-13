import React from "react";
import "./Footer.css";

function footer(){
    return(
        <div className="main-footer">
            <div className="container" >
                <div className="row">
        {/* column 1 */}
        <div className="col-4">
            <h4>Contact us</h4>
            <ul className="list-unstyled">
                <li>+98216472322</li>
                <li>Email team@scrapwala.com</li>
                <li><b>Customer Support Available</b></li>
                <li><b>from 10am - 7pm</b></li>
                <li>Find us here</li>
                <li><img src="https://ik.imagekit.io/y8s2vhk66ef/image_2_Bi5cqcyBFNT.png?updatedAt=1628624823915"
                 alt="instagram"/>&nbsp;<img src="https://ik.imagekit.io/y8s2vhk66ef/image_3_yByOZld4XFh.png?updatedAt=1628624824789" 
                 alt="twitter"/>&nbsp;<img src="https://ik.imagekit.io/y8s2vhk66ef/image_6_zHp_XCLcq9Z.png?updatedAt=1628624826605" 
                 alt="linkedin"/>&nbsp;<img src="https://ik.imagekit.io/y8s2vhk66ef/image_5_3EElSEX6sCW.png?updatedAt=1628624825705" 
                 alt="facebook"/></li>
            
            </ul>
        </div>
        {/* column2 */}
        <div className="col-4">
            <ul className="list-unstyled">
        <li><a href="/Why" style={{color:"yellow"}}>Why Us</a></li>
         <li><a href="#" style={{color:"yellow"}}>Blogs</a></li>         
        <li><a href="/ShowScraps" style={{color:"yellow"}}>ScrapRates</a></li>
        </ul> 
        </div>
        {/* column 3 */}
        <div className="col">
            <h4>Scrap<span style={{color:"yellow"}}>वाला</span></h4>
            <ul className="list-unstyled">
                <li>Infoway Technologies Private limited</li>
                <li>Regd.Address</li>
                <li>Third floor,paud road</li>
                <li>Kothrud,Pune-411038</li>
            </ul>
        </div>
                </div>
                <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
                <hr/>
                <div className="row">
                    <p className="col-sm">
                       <center>&copy;{new  Date().getFullYear()} Scrap<span style={{color:"yellow"}}>वाला</span> | All rights reserved | Terms of Service |Privacy</center> 
                    </p>
                </div>
            </div>


            
        </div>
    )
}

export default footer;