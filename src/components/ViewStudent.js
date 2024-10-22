import axios from "axios"
import {Link} from "react-router-dom"
import '../css/ViewStudent.css'

export default function ViewStudent({record,student,setStudent})
{
    console.log('Student Data in add:'+student)
    console.log('Student Update Function in add:'+setStudent)

    function deleteStudent(id)
    {
        if(window.confirm('Are You Sure You Wanna Delete Student Record?'))
        {
            axios.delete('http://localhost:4564/api/students/'+id)
            .then((data)=>{
                setStudent(student.filter((temp)=>temp.id!==id))
                alert('Student Record Deleted Successfully...')
            })
            .catch((error)=>{
                console.log('Error In Deleting Student Record'+error)
            })
        }
    }
    return(<>
       <p key={record.id}>
            Roll-Number:{record.rollno}<br></br>
            First-Name:{record.firstName}<br></br>
            Last-Name:{record.lastName}<br></br>
            Email-Id:{record.email}<br></br>
            Contact:{record.contactNo}<br></br>
            Address:{record.address}<br></br>
            Course:{record.course}<br></br>
            Education:{record.education}<br></br>
            <Link to={'/Edit/'+record.id} className="update-btn ">UPDATE</Link>
            <button onClick={()=>deleteStudent(record.id)} className="delete-btn">DELETE</button>
        </p>
    </>)

}