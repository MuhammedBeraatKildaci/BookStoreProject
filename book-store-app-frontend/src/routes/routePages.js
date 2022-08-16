import PrivateRoute from "../components/PrivateRoute";

import AuthLayout from "../pages/Auth/AuthLayout"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"

import AdminLayout from "../pages/Admin/AdminLayout"

import AuthorList from "../pages/Admin/Author/AuthorList"
import AddAuthor from "../pages/Admin/Author/AddAuthor";
import UpdateAuthor from "../pages/Admin/Author/UpdateAuthor";

import UserList from "../pages/Admin/User/UserList"

import CategoryList from "../pages/Admin/Category/CategoryList"
import AddCategory from "../pages/Admin/Category/AddCategory";
import UpdateCategory from "../pages/Admin/Category/UpdateCategory";

import BookList from "../pages/Admin/Book/BookList"
import AddBook from "../pages/Admin/Book/AddBook";
import UpdateBook from "../pages/Admin/Book/UpdateBook";


import UserLayout from "../pages/User/UserLayout"
import HomePage from "../pages/User/HomePage"
import Cart from "../pages/User/Cart"
import Favorite from "../pages/User/Favorite"

import PageNotFound from "../pages/PageNotFound"


let routePages=[
	{
		name: 'user',
		path:"/",
		element: <UserLayout />,
		children: [
			{
				path: '/',
				name: 'home',
				element: <HomePage/>
			},
			{
				path: 'cart',
				name: 'cart',
				auth:true,
				element: <Cart />
			},
			{
				path: 'favorite',
				name: 'favorite',
				element: <Favorite />
			},
		]
	},
    {
		name: 'auth',
		path:"/auth",
		element: <AuthLayout/>,
		children: [
			{
				path: 'login',
				name: 'login',
				element: <Login/>
			},
			{
				path: 'register',
				name: 'register',
				element: <Register />
			},
		]
	},
    {
		name: 'admin',
		path: 'admin',
		element: <AdminLayout />,
		auth:true,
		children: [
			{
				path: 'users',
				name: 'users',
				element: <UserList/>,
			},
			{
				path: 'authors',
				name: 'authors',
				element: <AuthorList />,
				children:[
					{
						name:"addAuthor",
						path:"add",
						element:<AddAuthor/>
					},
					{
						name:"updateAuthor",
						path:"update",
						element:<UpdateAuthor/>
					}
				]
			},
            {
				path: 'categories',
				name: 'categories',
				element: <CategoryList/>,
				children:[
					{
						name:"addCategory",
						path:"add",
						element:<AddCategory/>
					},
					{
						name:"updateCategory",
						path:"update",
						element:<UpdateCategory/>
					}
				]
			},
			{
				path: 'books',
				name: 'books',
				element: <BookList />,
				children:[
					{
						name:"addBook",
						path:"add",
						element:<AddBook/>
					},
					{
						name:"updateBook",
						path:"update",
						element:<UpdateBook/>
					}
				]
			}
		]
	},
    {
		path: '*',
		element: <PageNotFound/>
	}
]

const mapAuth = routePages => routePages.map((route) => {
	if (localStorage.getItem('user')!==null) {
		route.auth=false;
	}
	if (route?.auth) {
		route.element = <PrivateRoute>{route.element}</PrivateRoute>
	}
	if (route?.children) {
		route.children = mapAuth(route.children)
	}
	return route
})

routePages = mapAuth(routePages)

export default routePages