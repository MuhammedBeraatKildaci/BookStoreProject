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
import { useDispatch} from 'react-redux';
import {  getAllBook } from '../../../services/BookService';
import { deleteOneBook, putOneBook } from '../../../store/BookSlice';
import AuthorList from '../../../components/AuthorList';

const BookList = () => {

  const bookDispatch = useDispatch()
  const [books,setbooks]=useState([])  
  useEffect(() => {
    getAllBook().then(resp=>setbooks(resp))
  }, [])
  
  const handleEdit=(id,book)=>{
    bookDispatch(putOneBook(id,book))
  }
  
  const handleRemove=(id)=>{
    bookDispatch(deleteOneBook(id))
  }

  return (
    <div>
      <Helmet>
        <title>ADMIN PAGE - BOOK LIST</title>
      </Helmet>
      <div>

      <Container>
      <TableContainer sx={{ m: 1, p: 1 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
            <TableCell>Id</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Public</TableCell>
              <TableCell>Authors</TableCell>
              <TableCell>Categories</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {books.map((book) => {
              const { id, title, price, publisher, category, bookAuthors } =
                book;
              return (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>
                    <Avatar src={`images/books/${id % 121}.jpg`}></Avatar>
                  </TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>{publisher}</TableCell>
                  <TableCell align="center">
                    <AuthorList authors={bookAuthors} />
                  </TableCell>
                  <TableCell>{category.categoryName}</TableCell>
                  <TableCell>
                    <ButtonGroup orientation='vertical'>
                      <Button onClick={()=>handleEdit(id)}>Edit</Button>
                      <Button onClick = {() => handleRemove(id)}>
                        Remove
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
      <Typography align='center' gutterBottom variant='body1'>
        The number of {books.length}.
      </Typography>
            <SimpleFab url="/admin/books/add" />
    </div>
      </div>
  )
}

export default BookList