import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import BookCardItem from "./BookCardItem"
import Masonry from '@mui/lab/Masonry';
import { getAllBook } from '../services/BookService';

const BookCardList = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        getAllBook().then(books => setBooks(books))
    }, [])
    return (
        <Container className="book-card-list-container">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    abc
                </Grid>
                <Grid item xs={10}>
                    <Masonry columns={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 3 }} spacing={2}>
                        {
                            books.map(book => (
                                <BookCardItem key={book.id} book={book}/>
                            ))
                        }
                    </Masonry>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BookCardList