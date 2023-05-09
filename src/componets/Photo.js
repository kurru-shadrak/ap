import React from 'react'
import ssc1 from '../images/ssc1.jfif'
import ssc2 from '../images/ssc2.jfif'
import ssc3 from '../images/ssc3.jfif'
import ssc4 from '../images/ssc4.jfif'
import ssc5 from '../images/ssc5.jfif'
import ssc6 from '../images/ssc6.jfif'
import ssc7 from '../images/ssc7.jfif'
import ssc8 from '../images/ssc8.jfif'
import ssc9 from '../images/ssc9.jfif'
import ssc10 from '../images/ssc10.jpg'

function Photo() {
  return (
    <div className='container'>
<div className='line1'>
  <img src={ssc1} width="600" height="300" style={{marginRight:10,marginBottom:10}}/>
  <img src={ssc2} width="600" height="300"style={{marginRight:10,marginBottom:10}}/><br/>
  <img src={ssc3} width="600" height="300"style={{marginRight:10,marginBottom:10}}/>
  <img src={ssc4 } width="600" height="300"style={{marginRight:10,marginBottom:10}}/><br/>
  <img src={ssc5} width="600" height="300"style={{marginRight:10,marginBottom:10}}/>
  <img src={ssc6} width="600" height="300"style={{marginRight:10,marginBottom:10}}/><br/>
  <img src={ssc7} width="600" height="300"style={{marginRight:10,marginBottom:10}}/>
  <img src={ssc8} width="600" height="300"style={{marginRight:10,marginBottom:10}}/><br/>
  <img src={ssc9} width="600" height="300"style={{marginRight:10,marginBottom:10}}/>
  <img src={ssc10} width="600" height="300"/>
  


</div>
    </div>
  )
}

export default Photo