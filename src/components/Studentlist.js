import { Link } from "react-router-dom";
import ViewStudent from "./ViewStudent";
import '../css/Studentlist.css'

export default function Studentlist({student,setStudent})
{
    console.log('Student Data in add:'+student)
    console.log('Student Update Function in add:'+setStudent)
    return(<>
    {student.map((rec)=><ViewStudent record={rec} student={student} setStudent={setStudent}></ViewStudent>)}
    <Link to="/" className="button-link">BACK TO HOME</Link>
    </>)

}