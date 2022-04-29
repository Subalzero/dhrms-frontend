import React from "react";
import EmployeesTable from "./EmployeesTable";

const EmployeesMainView = () => {
  return (
    <>
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
    </>
  );
};

export default EmployeesMainView;
