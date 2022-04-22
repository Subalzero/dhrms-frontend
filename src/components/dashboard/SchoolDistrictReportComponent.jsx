import React from "react";

export default function SchoolDistrictReportComponent() {
  return (
    <section id="district_report">
      <h3>{`School & District Report`}</h3>
      <div className="app-scrollbar table-wrapper-scroll-y">
        <table className="table table-hover table-comp">
          <thead>
            <tr>
              <th scope="col">Legislative District</th>
              <th scope="col">District</th>
              <th scope="col">School ID</th>
              <th scope="col">School Name</th>
              <th scope="col">Plantilla Title</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div>
        <h6>Summary</h6>
      </div>
    </section>
  );
}
