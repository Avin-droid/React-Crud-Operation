import { useEffect,useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../css/UpdateStudent.css'

export default function UpdateStudent({student,setStudent})
{
    let navigate=useNavigate()
    let [currStudent,setCurrStudent]=useState({
        id:'',
        rollno:'',
        firstName:'',
        lastName:'',
        email:'',
        contactNo:'',
        address:'',
        course:'',
        education:''
    })
     
    console.log('Student Data in update:'+student)
    console.log('Student Update Function in update:'+setStudent)

    const {id}=useParams()
    console.log('Current object Id'+id)

    useEffect(()=>{
        axios.get('http://localhost:4564/api/students/'+id)
        .then((response)=>{
            setCurrStudent(response.data)
            console.log('Current Data'+currStudent)
           // alert('Student Record Updated Successfully...')
        })
        .catch((error)=>{
            console.log('Record Not Found'+error)
        })
    },[])

    function handleChange(event)
    {
        setCurrStudent({...currStudent,[event.target.name]:event.target.value})
    }

    function updateStudent(e)
    {
        console.log('For Update---'+currStudent)
        e.preventDefault()
        axios.put(`http://localhost:4564/api/students/${id}`,currStudent)
        .then((data)=>{
            setStudent((s)=>[...s,data.data])
            alert('Student Record has been Updated Successfully...')
            navigate('/List')
        })
        .catch((error)=>{
            console.log('Error in Updating Student Record'+error)
        })
    }
    return(<>
    <form onSubmit={updateStudent}>
        Roll-Number:<input type="text" name="rollno" value={currStudent.rollno} onChange={handleChange}></input>
        First-Name:<input type="text" name="firstName" value={currStudent.firstName} onChange={handleChange}></input>
        Last-Name:<input type="text" name="lastName" value={currStudent.lastName} onChange={handleChange}></input>
        Email-Id:<input type="text" name="email" value={currStudent.email} onChange={handleChange}></input>
        Contact:<input type="text" name="contactNo" value={currStudent.contactNo} onChange={handleChange}></input>
        Address:<input type="text" name="address" value={currStudent.address} onChange={handleChange}></input>
        Course:<input type="text" name="course" value={currStudent.course} onChange={handleChange}></input>
        Education:<input type="text" name="education" value={currStudent.education} onChange={handleChange}></input><br></br><br></br>
        <input type="submit" value="UPDATE"></input>
        <Link to="/List" className="button-link">BACK</Link>
        
    </form>
    </>)



}