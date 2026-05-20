import {Route,Routes} from "react-router-dom";
import Hero from "../Hero.jsx";
import Signup from "../Signup.jsx";
import Cart from "../Cart.jsx";
import Books from "../Books.jsx";
const RoutePaths = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/books" element={<Books/>} />
            </Routes>
        </>
    )
}

export default RoutePaths