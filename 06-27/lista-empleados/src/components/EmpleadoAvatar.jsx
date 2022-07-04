import React from 'react'

const EmpleadoAvatar = (props) => {
  return (
    <td className='avatar'><img src={props.empleado.pic} alt="" /></td>
  )
}

export default EmpleadoAvatar