import React from 'react'
import EmpleadoRow from './EmpleadoRow';
import {empleados} from '../data/empleados.js'

import '../App.css'

const EmpleadoList = () => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody id="mytable">

          {empleados.map((empleado, index) => (
            <EmpleadoRow key={empleado.id} empleado={empleado} />
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default EmpleadoList