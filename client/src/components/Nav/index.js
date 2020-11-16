import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link navbar-brand" href="/">Googlebooks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">Saved</a>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;
