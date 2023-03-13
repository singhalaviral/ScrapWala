import React from "react";
import axios from "axios";
import  { useEffect, useState } from "react";
// import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function admin() {

    // const [admins, setAdmins] = useState([]);
    // let content = null;
    // let adminData;

    // const getAllAdmins = () => {
    //     const adminData = axios
    //       .get("http://localhost:9000/admin/")
    //       .then((resp) => {
    //         const allAdmins = resp.data;
    //         setAdmins(resp.data);
    //         localStorage.setItem("admins", JSON.stringify(allAdmins));
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };

      
//   const getAllAdminsFromLocalStorage = () => {
//     try {
//       const d = localStorage.getItem("admins");
//       adminData = d !== null ? JSON.parse(d) : [];
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
        <>
           <center><h1>Welcome admin !!</h1><br></br>
                <button className='btn btn-success'>User List</button> &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-success'>Admin List</button></center>

{/* 
//                 <div className="mt-5">
//       <Card>
//         <CardBody>
//           <div className="row">
//             {/* {admins.map((admin) => ( */}
{/* //               <div className="col-4" key={admin.id}>
//                 <Card style={{ width: "100%",padding:"20px",margin:"10px" }} >
//                   <CardBody>
//                     <CardTitle></CardTitle>
//                     <CardText> */}
{/* //                         First Name : {admin.adminNameFirst}
//                         <br/>
//                         Last Name : {admin.adminNameLast}
//                         <br/>
//                         Login Date : {admin.adminLastLogin}
//                         <br/>
//                         Password : {admin.adminPassword} */}
{/* //                     </CardText>
//                   </CardBody> */}
{/* //                 </Card> */}
{/* //               </div> */}
            {/* ))}
                      </div> */}
{/* //         </CardBody> */}
{/* //       </Card> */}
{/* //     </div> */}
        </>
    );
}
 export default admin;