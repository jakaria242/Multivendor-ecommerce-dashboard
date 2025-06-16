import { lazy } from "react";
// const Home = lazy(()=>import('../../views/Home'))
const AdminDashboard = lazy(()=>import('../../views/admin/AdminDashboard'))


export const sellerRoutes = [
    {
        path: "/",
        element: <AdminDashboard/>,
        // element: <Home/>,
        ability: ['admin', 'seller']
    }
]