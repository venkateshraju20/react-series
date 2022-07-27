import React, { useEffect, useState } from "react";
import { data } from "./EmpData";
import "./styles.css";

function EmpTable() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  const addEmp = () => {
    const addData = {
      name: "emp5",
      salary: 6000,
      designation: "Engineer",
    };
    setInfo([...info, addData]);
  };

  const removeEmp = (name) => {
    const filterEmp = info.filter((item) => item.name !== name);
    setInfo(filterEmp);
  };

  return (
    <div>
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {info &&
            info.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.salary}</td>
                <td>{item.designation}</td>
                <button onClick={() => removeEmp(item.name)}>Remove</button>
              </tr>
            ))}
        </tbody>
      </table>
      <button className="btn" onClick={addEmp}>Add Employee</button>
    </div>
  );
}

export default EmpTable;
