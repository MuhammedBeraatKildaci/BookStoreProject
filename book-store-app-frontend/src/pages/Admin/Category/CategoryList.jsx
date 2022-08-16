import { Button, ButtonGroup, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux';
import SimpleFab from '../../../components/SimpleFab';
import { getAllCategory } from '../../../services/CategoryService';
import { deleteOneCategory } from '../../../store/CategorySlice';

const CategoryList = () => {

  const categoryDispatch = useDispatch()
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getAllCategory().then(resp => setCategories(resp))
  }, [])


  const handleRemove = (id) => {
    categoryDispatch(deleteOneCategory(id))
  }

  return (
    <div>
      <Helmet>
        <title>ADMIN PAGE - CATEGORY LIST</title>
      </Helmet>
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Category Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => {
                const { id, categoryName, description } = category;
                return (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{categoryName}</TableCell>
                    <TableCell>{description}</TableCell>
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

export default CategoryList