import { Avatar, ButtonGroup, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeFromFavorite } from '../../store/FavoriteSlice';

const Cart = () => {
  const {favoriteItems} = useSelector(state=>state.favorite)
  const favoriteDispatch = useDispatch()

  const handleFavoriteItemDelete = (book) => {
    favoriteDispatch(removeFromFavorite(book))
  }

  return (
    <div>
      <Helmet>
        <title>FAVORITE</title>
      </Helmet>
      <Container sx={{paddingTop:"30vh",paddingBottom:"30vh"}}>
      <TableContainer sx={{ m: 1, p: 1}} component={Paper}>
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
          {favoriteItems.map((item,index) => {
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
                      <IconButton onClick = {(e) => handleFavoriteItemDelete(item)}>
                        <DeleteForeverIcon color={"error"}/>
                      </IconButton>
                    </ButtonGroup>
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

export default Cart