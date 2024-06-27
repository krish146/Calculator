import {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateEmployee = () => {
  const {id} = useParams();
  const [name,setName] = useState("")
  const[salary,setSalary] = useState("")
  const [gender,setGender] = useState("")
  const navigate=  useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:9000/getEmployee/"+id).then(result=>{
      setName(result.data[0].name)
      setGender(result.data[0].gender)
      setSalary(result.data[0].salary)
console.log(name,gender,salary)
    }).catch(err=>console.log("error"+err))
  },[])

  const handleSubmit= (e)=>{
        e.preventDefault()
        axios
        .put("http://localhost:9000/updateEmployee/"+id,{name,gender,salary})
        .then(result =>{ console.log(result)
          navigate("/")
        }
      )
        .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 justify-content-center">
    <form onSubmit={handleSubmit}>
        <h1>Update Employee!!</h1>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Employee Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" 
        value={name}
        onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name"/>
    </div>

    <div class="form-check">
        <input class="form-check-input" type='radio' name="gender" onChange={()=>setGender("M")} id="male"
        checked={gender==="M"}/>
        <label class="form-check-label" for="flexRadioDefault1">
            Male
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type='radio' name="gender" onChange={()=>setGender("F")} id="female"
        checked={gender==="F"}/>
        <label class="form-check-label" for="flexRadioDefault2">
            Female
        </label>
    </div>
    
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Salary</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={(e)=>setSalary(e.target.value)} 
        value={salary}
        placeholder="Enter Your Salary"/>
   </div>
   <button className='btn btn-primary' >Submit</button>
    </form>
</div>
  )
}

export default UpdateEmployee
