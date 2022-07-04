import React from 'react'
import EmpleadoAvatar from './EmpleadoAvatar';


const EmpleadoRow = (props) => {
  console.log(props.empleado)
  return (
    <tr>
      <td>{props.empleado.id}</td>
      <td>{props.empleado.fullName}</td>
      <td>{props.empleado.title}</td>
      <td>{props.empleado.department}</td>
      <EmpleadoAvatar empleado={props.empleado}/>
    </tr>
  );
}

export default EmpleadoRow