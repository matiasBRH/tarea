import React from 'react'
import EmpleadoList from './components/EmpleadoList';


const App = () => {
  return (
    <div className="container">
      <div className="d-flex bd-highlight mb-3">
        <div className="me-auto p-2 bd-highlight">
          <h2>Lista de Empleados</h2>
        </div>
      </div>
      <EmpleadoList />
    </div>
  );
}

export default App