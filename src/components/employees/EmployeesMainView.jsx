import React, { useState } from "react";
import EmployeesTable from "./EmployeesTable";

const EmployeesMainView = () => {
  const [selectedFile, setSelectedFile] = useState();

  const onFileChanged = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("File selected: ", event.target.files[0]);
  };

  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
  };
  return (
    <>
      <div className="mb-3">
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
        <input type={"file"} onChange={onFileChanged} />
        <button
          className="btn btn-primary"
          title="Upload .csv file."
          type="file"
          onClick={onFileUpload}
        >{`Upload .csv file`}</button>
      </div>
      <EmployeesTable />
    </>
  );
};

export default EmployeesMainView;
