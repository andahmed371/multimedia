import { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { PiSignOutBold } from "react-icons/pi";
import { useAuth, UserButton } from "@clerk/clerk-react";
import { IoIosHome } from "react-icons/io";

const Navbar = () => {
  const { signOut } = useAuth();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <div
      className="header position-sticky bg-white"
      style={{ width: "100%", top: "0", left: "0" }}
      id="header"
    >
      <nav
        style={{ height: "3.5rem" }}
        className="d-flex justify-content-between align-items-center px-3 py-3"
      >
        <NavLink to={"/"}>
          <IoIosHome style={{ fontSize: "2em" }} />
        </NavLink>

        <div
          className={`nav-menu ${isMenuOpen ? "show-menu top-0 " : ""}`}
          id="nav-menu"
        >
          <ul
            style={{ columnGap: "1.5rem", listStyle: "none" }}
            className="nav-list d-flex text-center"
          >
            <li className="nav-item ">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link text-primary"
                    : "nav-link text-secondary"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link text-primary"
                    : "nav-link text-secondary"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link text-primary"
                    : "nav-link text-secondary"
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/dashbar"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link text-primary"
                    : "nav-link text-secondary"
                }
              >
                Dashbar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link text-primary"
                    : "nav-link text-secondary"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div
            style={{ top: "1.25rem", right: "1.5rem" }}
            className="nav-close position-absolute"
            id="nav-close"
            onClick={handleClose}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div
          style={{
            columnGap: "1.5rem",
            marginBottom: "40px",
            fontSize: ".875rem",
          }}
          className="nav-action d-flex justify-content-center align-items-center"
        >
          <FaSearch
            className="nav-search"
            id="search-btn"
            onClick={handleSearchToggle}
          />
          <NavLink to={"/cart"}>
            <FaShoppingCart className="cart" id="cart" />
          </NavLink>

          <NavLink className="user" id="user">
            <UserButton />
          </NavLink>

          <NavLink
            onClick={() => signOut()}
            className="sign-out hover:text-danger "
            id="sign-out"
          >
            {<PiSignOutBold />}
          </NavLink>

          <div id="nav-toggle" onClick={handleToggle}>
            <FaBars className="nav-toggle" />
          </div>
        </div>
      </nav>
      <div
        style={{ left: "0", top: "0", width: "100%", height: "100%" }}
        className={`search position-fixed ${isSearchOpen ? "show-search" : ""}`}
        id="search"
      >
        <form
          style={{ columnGap: "0.5rem" }}
          action=""
          className="search-form d-flex align-items-center p-4 rounded"
        >
          <FaSearch className="search-icon  text-secondary" />
          <input
            style={{ width: "100%" }}
            type="search"
            placeholder="What are you looking for?"
            className="search-input p-4"
          />
        </form>
        <AiOutlineClose
          style={{
            top: "2rem",
            right: "2rem",
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
          className="search-close position-absolute"
          id="search-close"
          onClick={handleSearchClose}
        />
      </div>
    </div>
  );
};

export default Navbar;
