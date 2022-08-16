import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import RoleList from '../../../components/RoleList';
import { getAllUser } from '../../../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUser().then(resp => setUsers(resp))
  }, [])

  return (
    <div>
      <Helmet>
        <title>ADMIN PAGE - USER LIST</title>
      </Helmet>
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => {
                const { id,userName,firstName,lastName,roles } = user;
                return (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{userName}</TableCell>
                    <TableCell>{firstName}</TableCell>
                    <TableCell>{lastName}</TableCell>
                    <TableCell>
                      <RoleList roles={roles}/>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      </div>
  )
}

export default UserList