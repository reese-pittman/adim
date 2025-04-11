import { Link } from "react-router-dom";
import { useState, useEffect} from "react"
import  SideNav from "./SideNav";

const Navbar = () => {
    const [ isPanelActive, setPanelState ] = useState(false);
    
    const toggleSideNav = () => setPanelState(!isPanelActive);
        
    return(
        <>
        <nav className="nav_bar">
            <button className="navigation_btn" onClick={toggleSideNav}></button>
            <Link to="/" className="logo">Logo</Link>
            <div className="right_nav_box">
                <button className="notifs_btn">notifications</button>
                <button className="profile_button">profile</button>
            </div>
        </nav>
        <SideNav isActive={isPanelActive} changeActive={toggleSideNav}/>
        </>
        
    )
}

export default Navbar