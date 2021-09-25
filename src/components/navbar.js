import React, { useEffect, useState } from "react";

function Navbar(props) {
  const [scroller, handleScroller] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 150) {
        handleScroller(true);
      } else {
        handleScroller(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div>
      <nav style={scroller ? { background: "#111" } : { background: "none" }}>
        <img
          className="nav_logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          alt="Netflix-logo"
        />
        <div>
          <button className="btn">Sign in</button>
          <button className="btn">Register Now</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
