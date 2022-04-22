import React from "react";
import EmployeesTable from "./employees/EmployeesTable";

export default function EmployeesScreen() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div>EMPLOYEES</div>
      </div>
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <img
                src="https://img.icons8.com/ios/50/000000/search--v1.png"
                style={{ width: 25 }}
              />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <EmployeesTable />
    </main>
  );
}
