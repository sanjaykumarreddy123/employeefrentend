import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee"

   export const getAllEmployees=()=>{
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    export const addEmployee=(employee)=>{
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    export const getEmployeeById=(employeeId)=>{
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
   export const updateEmployee=( employeeId,employee)=>{
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId,employee);
    }
    export const deleteEmployee=(employeeId)=>{
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

