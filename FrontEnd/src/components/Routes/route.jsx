import {Route,Routes} from "react-router-dom";
import Hero from "../Hero.jsx";
import Signup from "../Signup.jsx";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
const RoutePaths = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </>
    )
}

export default RoutePaths