import {useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const Employees = () => {
    const [employee,setEmployee] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:9000")
        .then((result)=>{
            console.log(result.data)
            setEmployee(result.data)
        })
        .catch(err=>console.log(err))
    },
    [])
  
    function handleDelete(id){
        console.log(id)
       axios.delete("http://localhost:9000/deleteEmployee/"+id).then(result=>{console.log("success"+result)
        window.location.reload()
       }).catch(err=>console.log("error in client"+err))

    }

  return (
    <div className='d-flex vh-100 justify-content-center p-3'>
        
        <div>
        <Link to={'/Create'} className='btn btn-success'>Add + </Link>

        <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                { 
                    employee.map((row)=>(
                    <tr>
                    <td>{row.name}</td>
                    <td>{row.gender}</td>
                    <td>{row.salary}</td>
                    <button className='btn btn-success'><Link to={`/update/${row._id}`}>Update</Link></button>
                    <button className='btn btn-danger' onClick={()=>(handleDelete(row._id))} >  Delete
                    </button>
                    </tr>
                    ))
                }
                 

            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Employees