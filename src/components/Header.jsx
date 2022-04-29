import React, { Children } from "react";
import { useAuth } from "../services/AuthProvider";
import "./dashboard.css";
import "./header.css";

export default function Header({ children }) {
  const auth = useAuth();

  const signOut = async () => {
    console.log("Signed out");
    await auth.logout();
  };
  return (
    <div>
      <header
        className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow"
        style={{ backgroundColor: "#fcba03" }}
      >
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" id="navbar-nav" href="/">
          <div className="row">
            <div className="col-md-3">
              <img
                src={
                  // "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Department_of_Education_%28DepEd%29.svg/490px-Department_of_Education_%28DepEd%29.svg.png"
                  process.env.PUBLIC_URL + '/DEPED_CDO_TRANSPARENT.png'
                }
                style={{ height: 40 }}
              />
            </div>
            <div className="col-md-6 align-middle">
              <span class="d-flex header-text pt-1">DEPED Human Resource Information System</span>
            </div>
          </div>
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" w-100" />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a
              className="nav-link px-3 text-black"
              href="/login"
              onClick={signOut}
            >
              Sign out
            </a>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
