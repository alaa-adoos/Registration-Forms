"use strict";
import React from "react";
import axios from "axios";
import State from "./State";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-router-dom"
import { Link } from "react-router-dom";
class Login extends React.Component{

constructor(props){
    super(props)
    this.state={
        show:false,
        name:""
    }
}







formHandler=(e)=>{
e.preventDefault();
//console.log(e.target.pass.value);
let obj={
  email:e.target.email.value,
  password:e.target.password.value,
}
console.log(obj);
axios
.post(`http://localhost:3000/form`,obj)
.then(result=>{
if(result.data==null){
   alert("wrong info");
}
else{
    console.log(result.data)
let email= result.data.email;
alert(`welcome ${email}`)
}
})
}
render(){
    return(
        <>
        
        <div className="center">
        <h1>Log in </h1>
       <form  onSubmit={this.formHandler}>
        
      
<div className="text">
<input type="text" id="email"className="email" />
<label for="email">Email</label>
</div>
{<label style={{color:'red'}}>{this.state.err}</label>}
<div className="text">
<input type="password" id="password"  />
<label for="firstName">password</label>
</div>
<button type="submit">Sign in</button>
<div class="loginLink">
Need an account?<Link to="/" className="link">sign up</Link>

</div>
{this.state.show && <h1>welcome {this.state.name}</h1>}
       </form>
       </div>
        
        
    
            
            
        </>
    )
}
}
export default Login;