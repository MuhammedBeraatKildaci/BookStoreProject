import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Avatar, Button, ButtonGroup, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SimpleFab from "../../../components/SimpleFab";
import { getAllAuthor } from '../../../services/AuthorService';
import { useDispatch} from 'react-redux';
import { deleteOneAuthor } from '../../../store/AuthorSlice';

const AuthorList = () => {
  const authorDispatch = useDispatch()
  const [authors,setAuthors]=useState([])  
  useEffect(() => {
    getAllAuthor().then(resp=>setAuthors(resp))
  }, [])
  
  
  const removeAuthor=(id)=>{
    authorDispatch(deleteOneAuthor(id))
  }


  return (
    <div>
      <Helmet>
        <title>ADMIN PAGE - AUTHOR LIST</title>
      </Helmet>
      <div>

      <Container>
      <TableContainer sx={{ m: 1, p: 1 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Id</TableCell>
              <TableCell align='left'>Image</TableCell>
              <TableCell align='left'>First name</TableCell>
              <TableCell align='left'>Last namee</TableCell>
              <TableCell align='left'>Email</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow
              key={author.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {author.id}
                </TableCell>
                <TableCell align='left'>
                  <Avatar src={`images/authors/${author.id%20}.jpg`}></Avatar>
                </TableCell>
                <TableCell align='left'>{author.firstName}</TableCell>
                <TableCell align='left'>{author.lastName}</TableCell>
                <TableCell align='left'>{author.email}</TableCell>
                <TableCell align='center'>
                  <ButtonGroup orientation='vertical'>
                    <Button>Edit</Button>
                    <Button onClick={() => removeAuthor(author.id)}>
                      Remove
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
      <Typography align='center' gutterBottom variant='body1'>
        The number of {authors.length}.
      </Typography>
            <SimpleFab url="/admin/authors/add" />
    </div>
      </div>
  )
}

export default AuthorList