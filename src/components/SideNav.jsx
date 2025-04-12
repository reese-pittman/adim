import { Link } from "react-router-dom";

const SideNav = (isActive = false, changeActive) => {




    
    return(
        <nav className={`sideNav ${isActive ? "open" : ""}`}>
            <h2>Pages</h2>
            <ul>
                <li><Link to="/" className="logo"> Home </Link></li>
                <li><Link to="/search" className="Search"> Search </Link></li>
                <li><Link to="/map" className="Map"> Map </Link></li>
            </ul>
            <button className="sideNav_close_btn" onClick={() => changeActive} >Close</button>
        </nav>
    );
};

export default SideNav