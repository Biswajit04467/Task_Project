import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebse";
import { addUser, removeUser } from '../Redux/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import logo from "../utils/image.png"

const Header = () => {

    const cart_items = useSelector((store) => store.cart.items);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userStatus = useSelector(store => store.user)

    const handleSignOut = () => {

        signOut(auth).then(() => {
        }).catch((err => {
            console.log(err)
        }))
        console.log("sign out -");

    }


    useEffect(() => {



        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user


                const { uid, email, displayName, photoURL } = user;
                // dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                navigate("/");

                // ...
            } else {

                // User is signed out

                dispatch(removeUser());
                dispatch(clearCart());
                navigate("/login");

            }
        });

        return () => unsubscribe();
    }, [])

    return (
        <div className="flex justify-between bg-white p-4 text-black shadow-md py-1 ">
            <div className="m-2">
                <img className="h-16" src={logo} alt="logo" />
            </div>

            <ul className="flex gap-10 font-bold text-lg mr-16 mt-5">
                <li className="m-2  hover:text-gray-400"><Link to="/">⌂ Home</Link></li>
                <li className="m-2  hover:text-gray-400"><Link to="/about">About</Link></li>
                <li className="m-2  hover:text-gray-400"><Link to="/contact">contact</Link></li>
                <li className="m-2  hover:text-gray-400"><Link to="/cart"> 🛒 {cart_items.length}</Link></li>
                {
                    userStatus ? <button onClick={handleSignOut}><li className="mb-4">👤 Sign out</li></button> : <li className="m-2  "><Link to="/login">Sign In</Link></li>
                }



            </ul>
        </div>
    )
}

export default Header;