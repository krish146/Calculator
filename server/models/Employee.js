import {mongoose} from 'mongoose'

const employeeSchema= new mongoose.Schema({
    name:String,
    gender:String,
    salary:Number
})
const Employee  = mongoose.model("employee_database",employeeSchema)

export default Employee