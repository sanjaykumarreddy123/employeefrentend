import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { updateEmployee,addEmployee,getEmployeeById } from '../Components/Services/EmployeeService';

const AddEmployee = () => {


const [empName,setEmpName] = useState('')
    const [empId,setEmpId] = useState(0)
    const [employeeSalary,setEmployeeSalary] = useState(0.0)
    const[mobileNum,setMobileNumber]=useState('')
    const [email,setEmail]=useState('')
    const [age,setAge]=useState(0)
    const [department,setDepartment]=useState('')
    const[designation,setDesignation]=useState('')

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {empName,empId,employeeSalary,mobileNum,email,age,department,designation}

        console.log(employee);
        if(id){
            updateEmployee(id).then((response) => {
                navigate('/employeelist')
            }).catch(error => {
                console.log(error)
            })

        }else{
            addEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate('/employeelist');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        if(id){
            getEmployeeById(id).then((response) =>{
                setEmpName(response.data.empName)
                setEmpId(response.data.empId)
                setEmployeeSalary(response.data.employeeSalary)
                setMobileNumber(response.data.mobileNum)
                setEmail(response.data.email)
                setAge(response.data.age)
                setDepartment(response.data.department)
                setDesignation(response.data.designation)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    const pageTitle = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "container">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Employee Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter employee name"
                                        name = "empName"
                                        className = "form-control"
                                        value = {empName}
                                        onChange = {(e) => setEmpName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Emp Id:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter id"
                                        name = "empId"
                                        className = "form-control"
                                        value = {empId}
                                        onChange = {(e) => setEmpId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter salary"
                                        name = "empSalary"
                                        className = "form-control"
                                        value = {employeeSalary}
                                        onChange = {(e) => setEmployeeSalary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Mobile Number :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter mobilenumber"
                                        name = "mobileNum"
                                        className = "form-control"
                                        value = {mobileNum}
                                        onChange = {(e) => setMobileNumber(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter email"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Age :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter age"
                                        name = "age"
                                        className = "form-control"
                                        value = {age}
                                        onChange = {(e) => setAge(e.target.value)}
                                    >
                                    </input>
                                </div>

                                


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Department :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Department"
                                        name = "department"
                                        className = "form-control"
                                        value = {department}
                                        onChange = {(e) => setDepartment(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Designation :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter designation"
                                        name = "designation"
                                        className = "form-control"
                                        value = {designation}
                                        onChange = {(e) => setDesignation(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployee
