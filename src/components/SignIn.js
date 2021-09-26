import React from "react";

function SignIn(props) {
  return (
    <div className="signIn">
      <div className="signin-content">
        <form>
          <h1>Sign In</h1>
          <input type="email number" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <p>New to Netflix? Sign up now.</p>
      </div>
    </div>
  );
}

export default SignIn;
