import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    console.log("header render")
    useEffect(()=>{
        console.log("useEffect called")
    }, [btnName])
    return(
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="contact">Contact US</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="login" onClick={()=>{btnName === "Login" ? setbtnName("Logout"): setbtnName("Login")}}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header