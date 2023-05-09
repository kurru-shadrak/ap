import React from 'react'

function SignUp() {
  return (
    <div className='conatiner'style={{border:"2px solid blue",margin:"10px 300px 10px 400px",padding:"30px",borderRadius:20,textAlign:"center"}}>
<h3>Create Account</h3>
<form  >
  <div >
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div><br/>
  <div>
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div><br/>
  <div >
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div><br/>
  <div >
    <label for="validationCustomUsername" class="form-label">Password</label>
    <div class="input-group has-validation">
     
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback">
        Please choose a Password.
      </div>
    </div>
  </div><br/>
  {/* <div >
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required/>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div><br/>
  <div >
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Andhra Pradesh</option>
      <option>Telangana</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div><br/>
  <div >
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div><br/>
  <div >
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div><br/> */}
  <div>
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

    </div>
  )
}

export default SignUp