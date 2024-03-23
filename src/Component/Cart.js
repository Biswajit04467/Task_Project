import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";

import CartItems from "./CartItems";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const handleCart = () => {
        dispatch(clearCart());
    }


    const cart_items = useSelector((store) => store.cart.items);
    console.log(cart_items)
    return (

        <div className="w-6/12 m-auto  my-10">
            <button className="px-3 py-1 ml-3  bg-green-500 rounded-lg" onClick={handleCart}>Clear-Cart</button>
            <div className=" text-center p-5  bg-gray-200 my-5">
                {cart_items.length === 0 && <h1>Your Cart is Empty !</h1>}
                <CartItems items={cart_items} quantity={cart_items.length} />

            </div>

            <div className="price">
                <span>No of Items-{cart_items.length}</span>
            </div>
        </div>
    )

}

export default Cart;

