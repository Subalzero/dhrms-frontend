import React from 'react'

const DesignationSummary = () => {
  return (
    <section id="designation">
      <h3>{`Summary of Position`}</h3>
      <div className="app-scrollbar table-wrapper-scroll-y">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <img
                  src="https://img.icons8.com/ios/50/000000/search--v1.png"
                  style={{ width: 25 }}
                />
              </span>
            </div>
            <input type="text" className="form-control" value="Lumbia National High School" />
          </div>

          
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Designation</th>
              <th scope="col">No. of Employees</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col">Principal</td>
              <td scope="col">1</td>
            </tr>
            <tr>
              <td scope="col">Master Teacher III</td>
              <td scope="col">0</td>
            </tr>
            <tr>
              <td scope="col">Master Teacher II</td>
              <td scope="col">1</td>
            </tr>
            <tr>
              <td scope="col">Master Teacher I</td>
              <td scope="col">1</td>
            </tr>
            <tr>
              <td scope="col">Special Education Teacher III</td>
              <td scope="col">0</td>
            </tr>
            <tr>
              <td scope="col">Special Education Teacher II</td>
              <td scope="col">0</td>
            </tr>
            <tr>
              <td scope="col">Special Education Teacher I</td>
              <td scope="col">1</td>
            </tr>
            <tr>
              <td scope="col">Special Science Teacher I</td>
              <td scope="col">4</td>
            </tr>
            <tr>
              <td scope="col">Teacher III</td>
              <td scope="col">30</td>
            </tr>
            <tr>
              <td scope="col">Teacher II</td>
              <td scope="col">20</td>
            </tr>
            <tr>
              <td scope="col">Teacher I</td>
              <td scope="col">40</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default DesignationSummary