import React from "react";
import { Link } from "react-router-dom";

function Press() {
  return (
    <div className="container">
      <div className="head" style={{color:"blue",textAlign:"center"}}>
        <h3>SSC PUBLIC EXAMINATIONS RESULTS<br/>
       YEAR WISE PRESS NOTES</h3>
        <table className="table table-striped">
            <thead style={{backgroundColor:"pink"}}>
            <tr>
               <th>S.NO</th> 
               <th>SUBJECTS</th> 
               <th>PRESS NOTES</th> 
               <th>DOWNLOAD</th> 
            </tr>
            </thead>
            <tbody>
         
                <tr>
                    <td>1</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2015(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>2</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2016(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>3</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2017(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>4</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2018(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>5</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2019(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>6</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2020(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>7</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2021(ENGLISH VERSION)	</td>
                    <td><Link to="https://www.bse.ap.gov.in/Index.aspx" style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>8</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2022(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>9</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2023(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>10</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2014(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>11</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2013(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>12</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2012(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>13</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2011(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
                <tr>
                    <td>14</td>
                    <td>SSC PUBLIC EXAMINATION</td>
                    <td>MARCH-2010(ENGLISH VERSION)	</td>
                    <td><Link style={{fontWeight:"800",color:"red",letterSpacing:"0.1rem"}}>CLICK HERE</Link></td>


                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Press;
