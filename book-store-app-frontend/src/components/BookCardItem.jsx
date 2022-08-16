import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "../styles/bookCard.css"
import { Box, ButtonGroup } from '@mui/material';
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/CartSlice';



export default function BookCardItem({ book }) {
  const cartDispatch = useDispatch()


  const addToCartBook = (book) => {
    cartDispatch(addToCart(book))
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={book.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className="book-card-image"
        component="img"
        height="194"
        image={`./images/books/${book.id}.jpg`}
        alt="Paella dish"
      />
      <CardContent>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {book.description}
          </Typography>
        </Box>
      </CardContent>
      <ButtonGroup>
        <IconButton color='error' aria-label="add to favorites">
          <FavoriteIcon />
          <Typography fontSize={12}>ADD TO FAVORITE</Typography>
        </IconButton>
        <IconButton color='success' aria-label="add to cart" onClick={(e) => addToCartBook(book)}>
          <AddShoppingCartIcon />
          <Typography fontSize={12}>ADD TO CART</Typography>
        </IconButton>
      </ButtonGroup>
    </Card>
  );
}