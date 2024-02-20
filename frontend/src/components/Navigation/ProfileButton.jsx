import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout()).then(() => {
      closeMenu();
      navigate("/", { relative: "route" });
    });
  };

  const profileDropdownClassName =
    "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className="profile-button" onClick={toggleMenu}>
        <i
          className="fa-solid fa-cookie-bite fa-2xl"
          style={{ color: "lightcoral" }}
        />
      </button>

      <div className={profileDropdownClassName} ref={ulRef}>
        <div className="profile-dropdown-group">
          <div>Hello, {user.username}</div>
          <div>{user.email}</div>
        </div>
        <div className="profile-dropdown-group">
          <div className="profile-dropdown-group-title">Manage</div>
          <NavLink
            to="/recipes/current"
            className="profile-dropdown-link"
            onClick={closeMenu}
          >
            Recipes
          </NavLink>
          <NavLink
            to="/cookbooks/current"
            className="profile-dropdown-link"
            onClick={closeMenu}
          >
            Cookbooks
          </NavLink>
        </div>
        <button className="logout-button" onClick={logout}>
          Log Out
        </button>
      </div>
    </>
  );
}

export default ProfileButton;
