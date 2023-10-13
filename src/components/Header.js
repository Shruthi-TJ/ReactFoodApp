import { useState, useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"


const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    const onlineStatus = useOnlineStatus()
    const {loggedInUser} = useContext(UserContext)
    console.log("header render")
    useEffect(()=>{
        console.log("useEffect called")
    }, [btnName])
    return(
        <div className="flex bg-neutral-300 shadow-md justify-between">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex m-4 p-4 items-center">
                    <li className="px-4">OnlineStatus: {onlineStatus ? "🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About US</Link></li>
                    <li className="px-4"><Link to="contact">Contact US</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <li>
                        <button className="login" onClick={()=>{btnName === "Login" ? setbtnName("Logout"): setbtnName("Login")}}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header