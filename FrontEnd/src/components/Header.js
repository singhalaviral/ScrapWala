import React from "react"

function Header()
{
    return(
        <div>
            
            <header class="header fixed-top">

               <div class="container">

   <div class="row align-items-center justify-content-between">

      <a href="#home" class="logo">dental<span>Care.</span></a>

      <nav class="nav">
         <a href="#home">home</a>
         <a href="#about">about</a>
         <a href="#services">services</a>
         <a href="#reviews">reviews</a>
         <a href="#contact">contact</a>
      </nav>

      <a href="#contact" class="link-btn">make appointment</a>

      <div id="menu-btn" class="fas fa-bars"></div>

   </div>

               </div>

             </header>
            
        </div>
    );
}

export default Header;