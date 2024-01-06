import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate.js";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const[isSignInForm , setIsSignInForm] = useState(true);
  const[errorMessage , setErrorMessage] = useState(null);
  const navigate = useNavigate();
  // const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/browse"); 

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);

   });

     }

    else{
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user); 
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }


   
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 my-36 mx-auto right-0 left-0 absolute bg-black p-12 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name"  className="p-4 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email or phone number" ref={email} className="p-4 my-4 w-full bg-gray-700"/>
        <input type="Password" placeholder="Password" ref={password} className="p-4 my-4 w-full bg-gray-700 "/>
        <p className="text-red-500 font-bold my-1 text-lg py-2"> {errorMessage} </p>
        <button className=" p-4  my-6 bg-red-700 font-medium text-base w-full rounded-lg " onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"  }</p>
      </form>
    </div>
  );
};

export default Login;
