import {useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateEmployee = () => {
    const [name,setName] = useState("")
    const[salary,setSalary] = useState("")
    const [gender,setGender] = useState("")
    // useEffect((),[])
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:9000/createEmployee",{name,gender,salary})
        .then(result=>{
          console.log(result)                                 
          navigate("/")
        }).catch(err=>console.log(err))
}


  return (
    <div className="d-flex vh-100 justify-content-center">
        <form onSubmit={handleSubmit}>
            <h1>Create Employee!!</h1>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Employee Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name"/>
        </div>
        <div class="form-check">
            <input class="form-check-input" type='radio' name="gender" onChange={()=>setGender("M")} id="male"/>
            <label class="form-check-label" for="flexRadioDefault1">
                Male
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type='radio' name="gender" onChange={()=>setGender("F")} id="female"/>
            <label class="form-check-label" for="flexRadioDefault2">
                Female
            </label>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Salary</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e)=>setSalary(e.target.value)} placeholder="Enter Your Salary"/>
       </div>
       <button className='btn btn-primary' >Submit</button>
        </form>
    </div>
  )
}

export default CreateEmployee


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CreateEmployee = () => {
//   const [name,setName] = useState("")
//   const [gender,setGender] = useState("")
//   const [salary,setSalary] = useState("")

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     axios.post("http://localhost:9000/createEmployee",{name,gender,salary}).then(result=>console.log(result)).catch(
//      err=>console.log(err)
//     )
//   }
  

//   return (
//     <div className='d-flex vh-100 justify-content-center'>
//       <form onSubmit={handleSubmit}>
//       <h1>Update Employee</h1>

//         <div className="mb-3" >
//           <label htmlFor="empname ">Employee Name:</label>
//           <input type="text" className="form-control" id="empname" 
//           />
//         </div>
        
//         <div className="mb-3">
//           <div className="form-check">
//             <input className="form-check-input" type="radio" name="gender" id="male" />
//             <label className='form-check-label' htmlFor="male">Male</label>
//           </div>
//           <div className="form-check">
//             <input className="form-check-input" type="radio" name="gender" id="female" />
//             <label className='form-check-label' htmlFor="female">Female</label>
//           </div>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="salary">Salary:</label>
//           <input type="text" className="form-control" id="salary" />
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateEmployee;
