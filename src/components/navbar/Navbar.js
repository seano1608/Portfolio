import React, { useState } from "react";
import "./Navbar.scss";
import { FaReact, FaBars } from "react-icons/fa";
import {HiX} from 'react-icons/hi'
import { Link, NavLink } from "react-router-dom";
const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }
  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link to={"/"} className="navbar_logo">
          <FaReact size={40} />
        </Link>
      </div>
      <ul className={`navbar_menu ${toggleIcon ? "active" : ""}`}>
        {data.map((item, key) => (
          <li key={key} className="navbar_menu_item">
            <NavLink className="navbar_menu_item_links" to={item.to} activeClassName="is_active">
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={handleToggleIcon}>
            {
                toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
            }
      </div>
    </div>
  );
};

export default Navbar;
