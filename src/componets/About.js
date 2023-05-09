import React from "react";

function About() {
  return (
    <div className="container" style={{ color: "red" }}>
      <table><tr>
        <td>
      <div className="image1">
        <img
          src="https://www.bse.ap.gov.in/images/praveenprakashias_chief_secretary.jpg"
          alt="image1"
          width="400"
          height="350"
        />

        <div className="officerinfo1">
          <p>
            Sri. Praveen Prakash,IAS
            <br />
            Principal Secretary to Government,
            <br />
            School Education Department,
            <br />
            Govt. of Andhra Pradesh
          </p>
        </div>
      </div>
      </td>
      <td>
      <div className="image2" style={{padding:11}}>
        <img
          src="https://www.bse.ap.gov.in/images/ap_Commissioner_New.jpg"
          alt="image1"
          width="400"
          height="350"
        />
      
      <div className="officerinfo2">
        <p>
          Sri S. Suresh Kumar, IAS
          <br />
          Director of School Education
          <br />
          Govt. of Andhra Pradesh.
        </p>
      </div>
      </div>
      </td>
      <td>
      <div className="image3" style={{padding:11}}>
        <img
          src="https://www.bse.ap.gov.in/images/BSE_AP_DIR.jpg"
          alt="image1"
          width="400"
          height="350"
        />
      
      <div className="officerinfo3">
        <p>
          Sri D Devananda Reddy,
          <br />
          Director of Government Examinations,
          <br />
          Andhra Pradesh.
        </p>
      </div>
      </div>
      </td>
      </tr>
      </table>
    </div>
  );
}

export default About;
