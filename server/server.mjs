import express from 'express'
const PORT  = process.env.PORT || 9000
import {mongoose} from 'mongoose'
import Employee from './models/Employee.js'
import cors from 'cors'

//{Employee} is error ? ? 
const connectionString = "mongodb://127.0.0.1:27017/srmap"
const app = express() 
app.use(express.json())
app.use(cors());
app.post("/createEmployee",
    (req,res)=>{
        Employee.create(req.body).then(result=>console.log(result.name,"got dumped into database ._.")).catch(error=>console.log(error))
        res.end()
    }
)

app.get("/",(req,res)=>{
    Employee.find({})
    .then((employees)=>{
    res.json(employees)
    }).catch(err=>res.json(err))
})

app.get("/getEmployee/:id",(req,res)=>{
    const id=req.params.id 
    const emp=Employee.find({_id:id}).then(employee=>res.json(employee)).catch(err=>res.json(err))
})

app.put("/updateEmployee/:id",(req,res)=>{
      Employee.findByIdAndUpdate({_id:req.params.id},{name:req.body.name,salary:req.body.salary,gender:req.body.gender})
      .then((employee)=>{res.send(employee)
       
      }
    ).catch(err=>console.log(err))
})
 app.delete("/deleteEmployee/:id",(req,res)=>{
    Employee.deleteOne({_id:req.params.id}).then(result=>res.send(result)).catch(err=>console.log(err))
   
 })
mongoose.connect(connectionString)

const con = mongoose.connection
con.on("open",()=>console.log("connected mango bruh "))

app.listen(PORT,()=>{
    console.log("listening to ", PORT)
})