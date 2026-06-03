import EmployeeTable from "./components/EmployeeTable"
import {employees} from "./data/employees"

function handleDelete(id){
console.log("Delete employees",id)
}
export default function App(){
return(
<div>
<h1>EMS</h1>
<EmployeeTable employees={employees} onDelete={handleDelete}/>
</div>
)}