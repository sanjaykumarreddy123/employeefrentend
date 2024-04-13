import React from 'react'
import './App.css';
import './Components/Styles/Home.css'
import './Components/Styles/Login.css'
import './Components/Styles/EmployeeList.css'
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {Routes,Route} from 'react-router-dom'
import AddEmployee from './Components/AddEmployee';
import UpdateEmp from './Components/UpdateEmp';
import EmployeeInfo from './Components/EmployeeInfo';
import EmployeeList from './Components/EmployeeList';

function App() {
  return (
    <div className="Container">

      <div className='row bg-primary'>
        <Header />
      </div>
     

      <div className='row'>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/home" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/logout" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/employeelist" element={<EmployeeList />} />          
          <Route path="/addEmp" element={<AddEmployee/>}></Route>
          <Route path='/updateEmp' element={<EmployeeList/>}></Route>
          <Route path='/employeeInfo' element={<EmployeeInfo/>}></Route>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
