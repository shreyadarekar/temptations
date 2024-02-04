// frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav className="nav-header">
      <NavLink className="home-button" to="/">
        <img className="logo" src="../../logo.png" alt="logo" />
        Temptations
      </NavLink>

      <div className="nav-header-right">
        {isLoaded && sessionUser ? (
          <ProfileButton user={sessionUser} />
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              className="nav-header-button login-button"
              modalComponent={<LoginFormModal />}
            />
            <OpenModalButton
              buttonText="Sign Up"
              className="nav-header-button signup-button"
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
