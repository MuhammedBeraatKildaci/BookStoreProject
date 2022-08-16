import { Button, ButtonGroup, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux';
import RoleList from '../../components/RoleList';
import SimpleFab from '../../components/SimpleFab';
import { getAllUser } from '../../services/UserService';
import { deleteOneUser } from '../../store/UserSlice';

const UserList = () => {
  const userDispatch = useDispatch()
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUser().then(resp => setUsers(resp))
  }, [])


  const handleRemove = (id) => {
    userDispatch(deleteOneUser(id))
  }
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
                <TableCell></TableCell>
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
                    <TableCell>
                      <ButtonGroup orientation="vertical" >
                        <Button>Edit</Button>
                        <Button onClick={() => handleRemove(id)} >Remove</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <SimpleFab url="/admin/categories/add" />
      </div>
  )
}

export default UserList