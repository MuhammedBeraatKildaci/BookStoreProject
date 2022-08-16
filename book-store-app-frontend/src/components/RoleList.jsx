import React from 'react'

const RoleList = ({roles}) => {
  return (
    <div>
        {roles.map(role =>(
            <div key={role.id}>{role.name}</div>
        ))}
    </div>
  )
}

export default RoleList