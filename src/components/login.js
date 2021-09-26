import React, { useState } from "react";
import SignIn from "./SignIn";

function Login(props) {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="login">
      <div className="login-gradient" />
      <div className="login-body">
        {signIn ? (
          <SignIn />
        ) : (
          <div className="login-content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <form>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
              <button
                type="submit"
                onClick={(event) => {
                  event.preventDefault();
                  setSignIn(true);
                }}
              >
                Get Started
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
