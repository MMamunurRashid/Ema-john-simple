import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import "./SignUp.css";

const SignUp = ({}) => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Password should be six character");
      return;
    }
    if (password !== confirm) {
      setError("Your password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError(false);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <p className="text-error">{error}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Create your password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id=""
            placeholder="Confirm your password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="new-to-ema-john">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
