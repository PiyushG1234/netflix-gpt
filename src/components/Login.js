import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate.js";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import { addUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";
import {BACKGROUND_IMAGE} from "../utils/constants.js";



const Login = () => {

  const[isSignInForm , setIsSignInForm] = useState(true);
  const[errorMessage , setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
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
    updateProfile(user, {
      displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid , email , displayName } = auth.currentUser;
      dispatch(addUser({uid:uid , email:email , displayName:displayName}));
      
    }).catch((error) => {
      setErrorMessage(error.message);
    });
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
        <img className="h-screen object-cover"
          src={BACKGROUND_IMAGE}
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 my-36 mx-auto right-0 left-0 absolute bg-black p-12 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" ref={name}  className="p-4 my-4 w-full bg-gray-700"/>}
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
