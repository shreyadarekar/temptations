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
      <NavLink to="/" className="home-button">
        <img className="logo" src="../../logo.png" alt="logo" />
        Temptations
      </NavLink>

      <div className="nav-header-right">
        {isLoaded && sessionUser ? (
          <>
            <NavLink to="/recipes/new" className="upload-recipe-button">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              &nbsp; Upload a Recipe
            </NavLink>
            <ProfileButton user={sessionUser} />
          </>
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
