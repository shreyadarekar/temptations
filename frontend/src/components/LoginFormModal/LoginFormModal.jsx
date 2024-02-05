// frontend/src/components/LoginFormModal/LoginFormModal.jsx

import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  return (
    <div className="login-modal-container">
      <form className="login-modal-form" onSubmit={handleSubmit}>
        <label className="login-modal-input">
          <span>Username/Email</span>
          <input
            type="text"
            placeholder="Enter Username or Email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>

        <label className="login-modal-input">
          <span>Password</span>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {errors.credential && <p className="error">{errors.credential}</p>}

        <button className="login-modal-button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginFormModal;
