import { Avatar, Box, Button, ButtonGroup, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate =  useNavigate()
  const {cartItems} = useSelector(state=>state.cart)
  const handleCartItemDelete = (book) => {
    console.log(book);
  }
  let total = 0;
  return (
    <div>
      <Helmet>
        <title>CART</title>
      </Helmet>
      <Container>
      <TableContainer sx={{ m: 1, p: 1 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
            <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Public</TableCell>
              <TableCell>Categories</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {cartItems.map((item,index) => {
            total += item.book.price
              return (
                <TableRow key={index}>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>
                    <Avatar src={`images/books/${item.book.id % 121}.jpg`}></Avatar>
                  </TableCell>
                  <TableCell>{item.book.title}</TableCell>
                  <TableCell>{item.book.price}</TableCell>
                  <TableCell>{item.book.publisher}</TableCell>
                  <TableCell>{item.book.category.categoryName}</TableCell>
                  <TableCell>
                    <ButtonGroup orientation='vertical'>
                      <IconButton onClick = {() => handleCartItemDelete(item)}>
                        <DeleteForeverIcon color={"error"}/>
                      </IconButton>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell colSpan={7}>
                <Box sx={{display:'flex',justifyContent: 'space-around'}}>
                <Typography variant="h4">Toplam</Typography>
                <Typography variant="h6">{total}</Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={7}>
                {total ===0 ? <Button onClick={()=>navigate("/")}sx={{marginLeft:'72%'}} variant="contained" color={'info'}>Continue Order</Button>:<Button sx={{marginLeft:'72%'}} variant="contained" color={'info'}>Payment</Button>}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
      </div>
  )
}

export default Cart