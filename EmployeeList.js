import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { deleteEmployee, getAllEmployees } from '../Components/Services/EmployeeService';

const EmployeeList = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    const handleEmployeeInfo = (id) => {
        navigate(`/employeeInfo/${id}`);
    }

    const deleteEmp = (id) => {
        deleteEmployee(id)
            .then((response) => {
                getAllEmployeesInfo(); // Refresh the employee list after deletion
                console.log(response);
            })
            .catch((error) => console.log("Can't delete the employee: " + error));
    }

    const updateEmp = (id) => {
        navigate(`/UpdateEmp/${id}`);
    }

    useEffect(() => {
        getAllEmployeesInfo();
    }, []);

    const getAllEmployeesInfo = (empId) => {
        getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const logout = () => {
        navigate("/logout");
    }

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <Link className="navbar-brand" to="/home">Home</Link>
                <Link className="navbar-brand" to="/addEmp">Add Employee</Link>
                <Link className="navbar-brand" to="#">About</Link>
                <Link className="navbar-brand" to="#">Contact Us</Link>
                <form className="d-flex ms-auto">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </nav>
            {/* Employee List */}
            <div>
                
                <table border="3px" className="custom-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Employee Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.empName}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteEmp(employee.empId)}>Delete</button>
                                    <button className="btn btn-success" onClick={() => updateEmp(employee.empId)}>Update</button>
                                    <button className="btn btn-info" onClick={() => handleEmployeeInfo(employee.empId)}>Info</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Logout Button */}
            <div className="center">
                <button className="btn btn-primary" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default EmployeeList;
