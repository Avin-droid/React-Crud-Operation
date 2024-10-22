
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import AddStudent from './components/AddStudent'
import UpdateStudent from './components/UpdateStudent'
import Studentlist from './components/Studentlist';


function App() {
  let [student,setStudent]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4564/api/students')
    .then((response)=>{
      console.log(response.data)
      setStudent(response.data)
    }).catch((error)=>{
      console.log(error)
    })
    
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard student={student} setStudent={setStudent}></Dashboard>}></Route>

          <Route path='/AddNew' element={<AddStudent student={student} setStudent={setStudent}></AddStudent>}></Route>

          <Route path='/List' element={<Studentlist student={student} setStudent={setStudent}></Studentlist>}></Route>

          <Route path='/Edit/:id' element={<UpdateStudent student={student} setStudent={setStudent}></UpdateStudent>}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
