import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeesById } from "../../data/employeeData";

export default function EmployeeDetails() {
    const { id } = useParams();
  
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        getEmployeesById(id).then(setEmployee);
      }, []);
    
      if (!employee) {
        return null;
      }

      return (
        <Table>
            <tbody>
                <tr>
                    <th scope="row">Employee</th>
                    <td>{employee.name}</td>
                </tr>
                <tr>
                    <th scope="row">Specialty</th>
                    <td>{employee.specialty}</td>
                </tr>
            </tbody>
        </Table>
    );
}