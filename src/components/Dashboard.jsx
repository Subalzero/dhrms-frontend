import React from "react";
import { useAuth } from "../services/AuthProvider";
import "./dashboard.css";
import SchoolDistrictReportComponent from "./dashboard/SchoolDistrictReportComponent";
import PersonalSummary from "./dashboard/PersonnelSumary";
import DesignationSummary from "./dashboard/DesignationSummary";
import Tabs from "./dashboard/Tabs";

export default function Dashboard() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div>DASHBOARD</div>
      </div>
      {/* <SchoolDistrictReportComponent />
      <hr className="line-division"></hr> */}
      <Tabs />
    </main>
  );
}
