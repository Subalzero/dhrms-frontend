import React from "react";

import "./employees.css";

const mockData = [
  {
    lastName: "Otto",
    firstName: "Mark",
    middleName: "Hudson",
    employeeNo: 1,
  },
  {
    lastName: "Otto",
    firstName: "Mark",
    middleName: "Hudson",
    employeeNo: 1,
  },
  {
    lastName: "Otto",
    firstName: "Mark",
    middleName: "Hudson",
    employeeNo: 1,
  },
  {
    lastName: "Otto",
    firstName: "Mark",
    middleName: "Hudson",
    employeeNo: 1,
  },
  {
    lastName: "Otto",
    firstName: "Mark",
    middleName: "Hudson",
    employeeNo: 1,
  },
  {
    lastName: "Otto",
    firstName: "Mark",
    middleName: "Hudson",
    employeeNo: 1,
  },
  {
    lastName: "Otto",
    firstName: "Mark",
    middleName: "Hudson",
    employeeNo: 1,
  },
];

export default function EmployeesTable() {
  return (
    <div className="app-scrollbar table-wrapper-scroll-y">
      <table className="table table-hover table-comp">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Last</th>
            <th scope="col">First</th>
            <th scope="col">Middle</th>
            <th scope="col">Employee No.</th>
            <th scope="col" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {mockData &&
            mockData.map((data, ind) => {
              return (
                <tr>
                  <th scope="row">{ind}</th>
                  <td>{data.lastName}</td>
                  <td>{data.firstName}</td>
                  <td>{data.middleName}</td>
                  <td>{data.employeeNo}</td>
                  <td>
                    <div className="row">
                      <button className="col btn btn-primary m-2">Show</button>
                      <button className="col btn btn-danger m-2">Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
