import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Press from './Press'
import Pcsn from './Pcsn'
import Photo from './Photo'
import Contact from './Contact'
import Oraganization from './Oraganization'
import Education from './Education'
import Home from './Home'
import SignUp from './SignUp'


function Navbar() {
  return (
    <div className='container'> 
        <BrowserRouter>
        <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/organization">Organization and service Offered by Department</Link></li>
            <li><Link to='/examination'>Examination related Q.Qs</Link></li>
            <li><Link to='/press' >Press Note</Link></li>
            <li><Link to='pcsn'>Provisions children with special needs(PCSN) </Link></li>
            <li><Link to='/photo'> Photo Gallary</Link></li>
            <li><Link to='/contact'> Contact Us </Link></li>
        </ul>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/organization' element={<Oraganization/>}/>
            <Route path='/examination' element={<Education/>}/>
            <Route path='/press' element={<Press/>}/>
            <Route path='/pcsn' element={<Pcsn/>}/>
            <Route path='/photo' element={<Photo/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='signup' element={<SignUp/>}/>
          
        </Routes>
        </BrowserRouter>
        

    </div>
  )
}

export default Navbar