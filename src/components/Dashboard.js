import { Link } from "react-router-dom"
import '../css/Dashboard.css'
export default function Dashboard({student,setStudent})
{
    console.log(setStudent)
    return(<>
       <button><Link to="AddNew" className="button-one">Add Student</Link></button><br></br>
       <button><Link to="List" className="button-two">View All Students</Link></button>
    </>)
}