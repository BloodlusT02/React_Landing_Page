import React from "react";
import "./Main.css";

function Main() {
  return (
    <>
      <div id="main">
        <div id="part1">
          <h1>Your Feet</h1>
          <h1>Deserve</h1>
          <h1>The Best</h1>
          <p>
            YOUT FEET DESERVE THE BEST AND WE'REHERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITHOUT SHOES.
          </p>
          <div style={{marginTop: "20px"}}>
            <button id="btn1">SHOP NOW</button>
            <button id="btn2">Category</button>
          </div>
            <p>Also Availabe On</p>
            <div id="logo">
              <img style={{width: "40px", marginRight: "15px"}} src="https://clipartcraft.com/images/amazon-logo-transparent-circle.png" alt="Amazon" />
              <img style={{width: "60px"}} src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png" alt="Flipcart" />
            </div>
        </div>

        <div id="part2">
          <img
            src="http://pluspng.com/img-png/shoes-png-adidas-shoes-png-picture-png-image-1500.png"
            alt="Shoes_Img"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
