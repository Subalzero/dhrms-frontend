import React from "react";

export default function EmployeesTable() {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
