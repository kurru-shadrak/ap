import React from "react";

function Contact() {
  return (
    <div className="container">
      <div style={{ backgroundColor: "pink",textAlign:"center" }}>
        <h3>Contact Us</h3>
      </div>
      <div className="body-1" style={{color: "blue",textAlign:"center"}}>
        <h4> Directorate of Government Examinations</h4>
        <p style={{marginTop:-10}}>D.No.20-124</p>
        <p style={{marginTop:-20}}>Beside SPNRCH High School.</p>
        <p style={{marginTop:-20}}>Opp. Andhra Hospitals Gollapudi,Vijayawada, Andhra Pradesh.</p>
        <p style={{marginTop:-20}}>Pin Code - 521225</p>
        <p style={{marginTop:-20}}>Mail-id:dir_govexams[at]yahoo[dot]com</p>
      </div>
    </div>
  );
}

export default Contact;
