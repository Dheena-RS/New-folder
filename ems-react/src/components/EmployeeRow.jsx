export default function EmployeeRow({employee,onDelete}){
const {id,name,department,salary}=employee
return(
<tr>
<td>{name}</td>
<td>{department}</td>
<td>{salary}</td>
<td><button onClick={()=>onDelete(id)}>Delete</button></td>
</tr>
)}