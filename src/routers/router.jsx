import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import CartPage from '../pages/books/cart/CartPage';
import CheckoutPage from '../pages/books/CheckoutPage';
import SingleBook from '../pages/books/SingleBook';
import PrivateRoute from './PrivateRoute';
import Orders from '../pages/books/Orders';
import AdminRoute from './AdminRoute';

import AdminLogin from '../components/AdminLogin';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/orders",
                element: <PrivateRoute> <Orders/></PrivateRoute>
            },
            {
                path: "/about",
                element: <div>about</div>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            },
            {
                path: "/checkout",
                element: <PrivateRoute> <CheckoutPage/> </PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLogin/>
    },
    {
        path: '/dashboard',
        element: <AdminRoute><DashboardLayout/></AdminRoute>,
        children : [
            {
                path: "",
                element: <AdminRoute><div>Dashboard</div> </AdminRoute>,
            },
            {
                path: "add-new-book",
                element: <AdminRoute><div>Add new Book</div></AdminRoute> 
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute><div>edit  Book</div></AdminRoute> 
            },
            {
                path: "manage-books",
                element: <AdminRoute><div>manage Book</div></AdminRoute> 
            }
        ]
    }
])

export default router;
