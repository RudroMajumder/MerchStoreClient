import React, { useContext, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { loginFramework,handleGoogleSignIn,handleFbSignIn,createUserWithEmailAndPassword,signInWithEmailAndPassword, storeAuthToken  } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');


  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        isSignedIn:false
    })

    const [ newUser,setNewUser] = useState(false);

    loginFramework();
    
    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
      }
    const googleSignIn = () =>{
        handleGoogleSignIn()
        .then(res => {
            handleResponse(res, true);
            console.log(res)
          })
    }

    const fbSignIn = () =>{
        handleFbSignIn()
        .then(res => {
            handleResponse(res, true);
            console.log(res)
        })
  
    }

    const handleBlur = (e) =>{
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(e.target.value)
          }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber =  /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            setPassword(e.target.value)
        }
        if(e.target.name === 'confirmPassword'){
            const confirmPassword = e.target.value;
            if(password!==confirmPassword){
                console.log(password,confirmPassword,"passwords don't match")
                setError("!!! Password don't match !!!");
            }
            else{
                isFieldValid = confirmPassword;
            }
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo)
            console.log(newUserInfo)
        }
    }
    const handleSubmit = (e) =>{
        if(newUser && user.email && user.password){
            createUserWithEmailAndPassword(user.name, user.email, user.password)
            .then(res => {
                handleResponse(res, true);
                console.log(res)
            })
          }
      
          if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.name,user.email, user.password)
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.push(from);
                console.log(res)
            })
          }
        e.preventDefault();
    }
    return (
        <div className="home">
            <div className="form">
                <h2 > {newUser?'Create an account':'Log in'} </h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" onBlur={handleBlur} placeholder="Name" />
                    <br/>
                    <input type="email" name="email" onBlur={handleBlur} placeholder="Email Address" required/>
                    <br/>
                        <input
                            name="password" onBlur={handleBlur} placeholder="Password"
                            type="password" required/>
                    <br/>
                    {newUser && <input
                            name="confirmPassword" onBlur={handleBlur} placeholder="Confirm Password"
                            type="password" required/>}
                    <br/>
                    <p style={{color:"red"}}> {error} </p>
                    <input type="submit" value={newUser?'Create an account ':'Login'} className="submit-btn"/>
                </form>
                <br/>
                <p onClick={() => setNewUser(!newUser)} > {newUser?'Already have an account?':"Don't Have an account?"} 
                    <button style={{color:"red",border:"none",background: "none"}}> {newUser?'Login':'Create an account '} </button> 
                </p>
            </div>
            <p><span className="or" > Or </span></p>
            <div className="text-center buttons">
                <button className="social-btn" onClick={fbSignIn}> <FaFacebook size={28}/> Continue  with Facebook </button>
                <br/>
                <button className="social-btn" onClick={googleSignIn}> <FaGoogle size={28}/> Continue  with Google </button>
            </div>
        </div>
    );
};

export default Login;