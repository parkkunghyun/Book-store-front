import { Link, useNavigate } from "react-router-dom"
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    {name: "Dashboard", href: "/dashboard"},
    {name: "Orders", href: "/orders"},
    {name: "Cart Page", href: "/cart"},
    {name: "Checkout", href: "/checkout"},
]

const Navbar = () => {
    const navigate = useNavigate();
    const {logout, currentUser} = useAuth();

    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    
    const handleLogout = () => {
        logout();
        navigate("/login")
    }
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex items-center justify-between ">
            {/* {left side} */}
            <div className="flex items-center md:gap-16 gap-4">
                <Link to="/">
                    <HiMiniBars3BottomLeft className="size-6"/>
                </Link>

                {/* search input */}
                <div className="relative sm:w-72 w-40 space-x-2 ">
                    <FaSearch className="absolute inline-block left-2 inset-y-2"/>
                    <input
                        className="bg-[#EAEAEA] w-full py-1 md:px-8 px-7 rounded-md focus:outline-none"
                        type="text" placeholder="책을 검색해보세요." />
                </div>
            </div>

            {/* {right side} */}
            <div className="relative flex items-center space-x-2 md:space-x-3 ">
                <div>
                    {
                        currentUser ?
                        <>
                            <button onClick={() => setIsDropDownOpen(!isDropdownOpen)}>
                                <img src={avatarImg} alt="avatar" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`} />
                            </button>
                            {isDropdownOpen && 
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                    <ul className="py-2">
                                        {
                                            navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                                                    <Link className="block px-4 py-2 text-sm hover:bg-gray-100"
                                                        to={item.href}>{item.name}</Link>
                                                </li>
                                            ))
                                        }
                                        <li>
                                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                                onClick={handleLogout}>Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            }
                            
                        </>
                        :  <Link to="/login"> <FaRegUser className="size-6"/> </Link>
                    }
                </div>
                <button className="hidden sm:block">
                    <FaRegHeart className="size-6"/>
                </button>

                <Link to="/cart" className="bg-primary gap-1 p-1 sm:px-6 py-2 flex items-center rounded-sm">
                    <FaCartShopping  className="size-4"/>
                    {
                        cartItems.length > 0 && <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
                    }
                    <span className="text-sm font-semibold sm:ml-1">0</span>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar