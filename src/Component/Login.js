import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebse';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';



const Login = () => {

 const navigate=useNavigate();
 const dispatch = useDispatch();
    const [errorMessege, setErrorMessege] = useState(null);  //for displaying error messege
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleIsSignIn = () => {
        setIsSignIn(!isSignIn);


    }

    const email = useRef(null); // for taking reference from input box
    const password = useRef(null);
    const name = useRef(null);

    const handleSubmit = () => {

        const messege = checkValidData(email.current.value, password.current.value); // destructured the object ,got from inut box as refzzz

        setErrorMessege(messege);
        if (messege) return;


        if (!isSignIn) {
            // Sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName} = auth.currentUser;

                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName
                        }));
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage2 = error.message;
                    // ..
                    setErrorMessege(errorCode + "-" + errorMessage2)
                });
        }



        else {
            // sign in logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("user singed in")
                    navigate("/")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage2 = error.message;
                    setErrorMessege(errorCode + "-" + errorMessage2)
                });
        }
    }
    return (
        <div className='LoginPage'>

            <div className='absolute'>
                <img className='  w-lvw h-lvh object-cover' src="https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=1060&t=st=1711168031~exp=1711168631~hmac=0f80eac2b1d7c5ab5ec9c002d14f45438647d1bb09d428097d42010e8dd3b28d" alt="background" />
            </div>

            <div className=''>
                <form onSubmit={(e) => e.preventDefault()} className='absolute my-24 mx-auto right-0 left-0 w-3/12 bg-gray-300 p-12  rounded-md  min-w-[24rem]  bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-lg'>

                    <h1 className='font-bold text-3xl py-4 text-gray-700'>{isSignIn === true ? "Sign In" : "Sign Up"}</h1>

                    {!isSignIn && <input ref={name} type="text" placeholder='Name' className='p-4 my-4 w-full bg-white rounded-md shadow-md ' />}

                    <input ref={email} type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-white rounded-md shadow-md' />
                    <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-white rounded-md shadow-md' />
                    <p className=' text-red-500'>{errorMessege}</p>

                    <button onClick={handleSubmit} className='p-4 px-2 my-6 text-white  w-full bg-green-500 rounded-md shadow-md'>{isSignIn === true ? "Sign In" : "Sign Up"}</button>

                    <div className='flex gap-1'>

                        <p className=' text-gray-500'>{isSignIn ? "New to Netflix?" : "Already a User?"}</p>
                        <p className=' cursor-pointer hover:underline text-blue-400' onClick={toggleIsSignIn}> {isSignIn ? "Sign Up now" : "Sign In"}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
