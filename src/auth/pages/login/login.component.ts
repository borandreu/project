import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signUpForm!: FormGroup
  loginForm!: FormGroup

  // signupUsers: any[] = []; //The signupUsers array stores the list of signed up users.
  // signupObj: any = {    
  //   userName: '',
  //   email: '',
  //   password: ''
  // };
  // loginObj: any = {
  //   userName: '',
  //   password: ''
  //   };
constructor() { }
ngOnInit(): void {
  this.signUpForm = new FormGroup({
    username: new FormControl(null),
    email: new FormControl(null, Validators.email),
    pass: new FormControl(null, Validators.minLength(8))
  })
this.loginForm = new FormGroup({
  username: new FormControl(null),
  pass: new FormControl(null, Validators.minLength(8))
})
  
  // const localData = localStorage.getItem('signUpUsers');
  // if(localData !=null){
  //   this.signupUsers = JSON.parse(localData);
  // }
  }


  onSignUp(){
    console.log(this.signUpForm)
 
  //   this.signupUsers.push(this.signupObj);
  //   localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
  //   this.signupObj = {
  //     userName: '',
  //     email: '',
  //     password: ''
  // };
  }
  onLogin(){
    console.log(this.loginForm)
//     const isUserExist = this.signupUsers.find(m=> m.userName == this.loginObj.userName && m.password == this.loginObj.password);
//     if(isUserExist !=undefined){
//       alert('User Login Successfully');
//     }else{
// alert('Wrong credentials');
//   }
  }
}
