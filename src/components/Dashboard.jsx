import React,{ useEffect, useState } from "react";
import { useAuth } from "../services/AuthProvider";
import "./dashboard.css";
import SchoolDistrictReportComponent from "./dashboard/SchoolDistrictReportComponent";
import PersonalSummary from "./dashboard/PersonnelSumary";
import DesignationSummary from "./dashboard/DesignationSummary";
import { Tab, Tabs, TabList, TabPanel } from 'react-bootstrap';

export default function Dashboard() {
  const [key, setKey] = useState('personnel');
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-5">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div>DASHBOARD</div>
      </div>
      <SchoolDistrictReportComponent />
      <hr className="line-division"></hr>
    {/* <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-5"
    >
      <Tab eventKey="personnel" title="Summary of Div. Personnel">
        <PersonalSummary />
      </Tab>
      <Tab eventKey="position" title="Summary of Position">
        <DesignationSummary />
      </Tab>
      <Tab eventKey="salary" title="Total Salary Budget">
        <PersonalSummary />
      </Tab>
      <Tab eventKey="step-increment" title="Step Increment Salary">
        <PersonalSummary />
      </Tab>
      <Tab eventKey="loyalty" title="Eligible for Loyalty Summary">
        <PersonalSummary />
      </Tab>
      
    </Tabs> */}
      <PersonalSummary />
      <hr className="line-division"></hr>
      <DesignationSummary />
    </main>
  );
}
