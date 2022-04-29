import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

const PersonalSummary = () => {
  return (
    <div className='FirstTab'>
    <section id="personal">
      <h3>{`Summary of Division Personnel`}</h3>
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
            <input type="text" className="form-control" placeholder="Search" />
          </div>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="district-dropdown">
              District
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">North District II</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Southwest</Dropdown.Item>
              <Dropdown.Item href="#/action-3">West District II</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Central District</Dropdown.Item>
              <Dropdown.Item href="#/action-2">East District I</Dropdown.Item>
              <Dropdown.Item href="#/action-3">East District II</Dropdown.Item>
              <Dropdown.Item href="#/action-2">North District I</Dropdown.Item>
              <Dropdown.Item href="#/action-3">South</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Discrict</th>
              <th scope="col">School Name</th>
              <th scope="col" colspan="2">No. of Teaching Personnel</th>
              <th scope="col">No. of Non-Teaching Personnel</th>
            </tr>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Filled</th>
              <th scope="col">Unfilled</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col">Central District</td>
              <td scope="col">City Central School</td>
              <td scope="col">150</td>
              <td scope="col">5</td>
            </tr>
            <tr>
              <td scope="col">Central District</td>
              <td scope="col">Corrales Elementary School</td>
              <td scope="col">200</td>
              <td scope="col">5</td>
            </tr>
            <tr>
              <td scope="col">East District I</td>
              <td scope="col">Cugman Elementary School</td>
              <td scope="col">90</td>
              <td scope="col">5</td>
            </tr>
            <tr>
              <td scope="col">East District I</td>
              <td scope="col">East City Central School</td>
              <td scope="col">98</td>
              <td scope="col">5</td>
            </tr>
            <tr>
              <td scope="col">East District I</td>
              <td scope="col">F.S. Catanico Elementary School</td>
              <td scope="col">105</td>
              <td scope="col">5</td>
            </tr>
            <tr>
              <td scope="col">East District II</td>
              <td scope="col">Balubal Elementary School</td>
              <td scope="col">45</td>
              <td scope="col">4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    </div>
  )
}

export default PersonalSummary