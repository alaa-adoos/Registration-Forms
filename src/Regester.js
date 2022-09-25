import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useForm}  from "react-hook-form";
import { useRef } from 'react';
import "./App.css"
import axios from "axios";

class Regester extends React.Component{
  

constructor(props){
  super(props);
  this.state={
    err:"",
    exist:"",
    errPass:"",
    class1:"",
    upperCase:"",
    number:"",
    length:"",
    special:"",
    show:false
  }
}


handleSubmit2 =(e)=>{
  e.preventDefault();
let pass=e.target.value;
console.log(pass);
if(pass.length>=8){
  this.setState({
   length:"class1"
     })
  }
  else{
    this.setState({
      length:""
       })
}
let lowerCaseLetters = /[a-z]/g;
  if(pass.match(lowerCaseLetters)){
  
    this.setState({
    class1:"class1"
     })
  }
  else{
    this.setState({
      class1:""
       })
  }
  let upperCaseLetters = /[A-Z]/g;
  if(pass.match(upperCaseLetters)){
  
    this.setState({
    upperCase:"class1"
     })
  }
  else{
    this.setState({
      upperCase:""
       })
  }
  let number = /[0-9]/g;
  if(pass.match(number)){
  
    this.setState({
    number:"class1"
     })
  }
  else{
    this.setState({
     number:""
       })
  }
  let special = /[$&+,:;=?@#|'<>.^*()%!-]/g;
  if(pass.match(special)){
  
    this.setState({
    special:"class1"
     })
  }
  else{
    this.setState({
    special:""
       })
  }
  
}
  handleSubmit=(e)=>{
  e.preventDefault();
  let email=e.target.email.value;
  let pass=e.target.password.value;
if(pass==""){
  this.setState({
    errPass:"pass requierd!"
  })
}
 
  if(email ==""){
    this.setState({
      err:"email requierd!"
    })
  }
  
  else{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
 let obj= {
  email:email,
  password:pass
 }
axios 
.get("http://localhost:3000/form")
.then(result =>{
 result.data.filter(item=>{
    if(item.email == email){

      this.setState({
        exist:"email exist !",
        show:false
       })
    }
   
    else{
      this.setState({
     show:true
       })
    }

  })
})
{ this.state.show && 
axios
.post("http://localhost:3000/addInfo",obj)
.then(result =>{
  alert(`welcome ${result.data.email}`)
})

}


  }
  else{
   this.setState({
    err:"invaild email!"
   })
  }
 
  }

  }
 render(){
 return(
        <>
      <div className="center">
        <h1>

Sign up</h1>
       <form  onSubmit={this.handleSubmit}>
        
      
<div className="text">
<input type="text" id="email"className="email" />
<label for="email">Email</label>
</div>
{<label style={{color:'red'}}>{this.state.err}{this.state.exist}</label>}
<div className="text">
<input type="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  onChange={this.handleSubmit2} required />
<label for="firstName">password</label>
</div>

<div className="valid-pass">
<ul>
<li className={this.state.class1}>One lowercase </li>
<li className={this.state.special}>One special  </li>
<li className={this.state.upperCase} >One uppercase  </li>
<li className={this.state.length}>8 characters minimum  </li>
<li className={this.state.number}>One number </li>
</ul>
</div>
<button type="submit">Sign up</button>
<div class="loginLink">
 Already have an account?<Link to="./login" className="link">log in</Link>

</div>

       </form>
       </div>
        </>
    )
}
}
export default Regester;