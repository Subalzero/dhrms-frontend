import React from "react";

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
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <div className="row">
                  <button className="col btn btn-primary w-50">Show</button>
                  <button className="col btn btn-danger w-50">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
