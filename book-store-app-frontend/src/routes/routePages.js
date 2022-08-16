import PrivateRoute from "../components/PrivateRoute";

import AuthLayout from "../pages/Auth/AuthLayout"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"

import AdminLayout from "../pages/Admin/AdminLayout"
import UserList from "../pages/Admin/UserList"
import CategoryList from "../pages/Admin/CategoryList"
import AuthorList from "../pages/Admin/AuthorList"
import BookList from "../pages/Admin/BookList"


import UserLayout from "../pages/User/UserLayout"
import HomePage from "../pages/User/HomePage"
import Cart from "../pages/User/Cart"

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
				element: <UserList/>
			},
			{
				path: 'authors',
				name: 'authors',
				element: <AuthorList />
			},
            {
				path: 'categories',
				name: 'categories',
				element: <CategoryList/>
			},
			{
				path: 'books',
				name: 'books',
				element: <BookList />
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