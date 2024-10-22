import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/AddStudent.css'

export default function AddStudent({student,setStudent})
{
    const navigate=useNavigate()
    console.log('Student Data in add:'+student)
    console.log('Student Update Function in add:'+setStudent)

    function saveStudent(e)
    {
        e.preventDefault()
        let studentObj=
        {
            id:'',
            rollno:e.target.rno.value,
            firstName:e.target.fnm.value,
            lastName:e.target.lnm.value,
            email:e.target.eml.value,
            contactNo:e.target.cno.value,
            address:e.target.adr.value,
            course:e.target.crs.value,
            education:e.target.edu.value

        }

        axios.post('http://localhost:4564/api/students',studentObj)
        .then((data)=>{
            setStudent((s)=>[...s,data.data])
            alert('Student Record Added Successfully...')
            navigate('/')

        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(<>
       <div>
          <form onSubmit={saveStudent}>
            Roll-Number:<input type="text" name="rno"></input><br></br><br></br>
            First-Name:<input type="text" name="fnm"></input><br></br><br></br>
            Last-Name:<input type="text" name="lnm"></input><br></br><br></br>
            Email-Id:<input type="text" name="eml"></input><br></br><br></br>
            Contact:<input type="text" name="cno"></input><br></br><br></br>
            Address:<input type="text" name="adr"></input><br></br><br></br>
            Course:<input type="text" name="crs"></input><br></br><br></br>
            Education:<input type="text" name="edu"></input><br></br><br></br>
            <input type="submit" value="ADD STUDENT" />
          </form>
       </div>
    </>)
}