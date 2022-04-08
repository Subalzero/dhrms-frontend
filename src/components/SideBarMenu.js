import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./sidebarmenu.css";

function ListItem(string, active, position) {
  if (active)
    return (
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          {string}
        </a>
      </li>
    );
  else
    return (
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">
          {string}
        </a>
      </li>
    );
}

function getSelectedMenu(path) {
  switch (path) {
    case "/":
      return 1;
    case "/employees":
      return 2;
    case "/settings":
      return 3;
    default:
      return 1;
  }
}

export default function SideBarMenu({ children }) {
  const name = useLocation();
  const selected = getSelectedMenu(name.pathname);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="position-sticky pt-3">
            <div className="nav flex-column">
              <div className="list-group list-group-root well nav-item">
                <a
                  className={`nav-link ${selected == 1 ? "active" : ""}`}
                  aria-current="page"
                  href="/"
                >
                  DASHBOARD
                </a>
                {selected == 1 && (
                  <div className="list-group" id="dashboard">
                    <a
                      href="#personal"
                      className="list-group-item"
                      data-toggle="collapse"
                    >
                      <i className="glyphicon glyphicon-chevron-right"></i>
                      Personal Summary
                    </a>
                    <a
                      href="#designation"
                      className="list-group-item"
                      data-toggle="collapse"
                    >
                      <i className="glyphicon glyphicon-chevron-right"></i>
                      Designation Summary
                    </a>
                    <a
                      href="#total"
                      className="list-group-item"
                      data-toggle="collapse"
                    >
                      <i className="glyphicon glyphicon-chevron-right"></i>Total
                      Salary Budget
                    </a>
                    <a
                      href="#average"
                      className="list-group-item"
                      data-toggle="collapse"
                    >
                      <i className="glyphicon glyphicon-chevron-right"></i>
                      Average Salary
                    </a>

                    <a
                      href="#increment"
                      className="list-group-item"
                      data-toggle="collapse"
                    >
                      <i className="glyphicon glyphicon-chevron-right"></i>Step
                      Increment Summary
                    </a>
                    <a
                      href="#loyalty"
                      className="list-group-item"
                      data-toggle="collapse"
                    >
                      <i className="glyphicon glyphicon-chevron-right"></i>
                      Loyalty Award Summary
                    </a>
                  </div>
                )}
                <a
                  className={`nav-link ${selected == 2 ? "active" : ""}`}
                  aria-current="page"
                  href="/employees"
                >
                  EMPLOYEES
                </a>
                <a
                  className={`nav-link ${selected == 3 ? "active" : ""}`}
                  aria-current="page"
                  href="/settings"
                >
                  SETTINGS
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
}
