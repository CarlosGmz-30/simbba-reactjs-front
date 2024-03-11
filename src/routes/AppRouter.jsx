//import { View, Text } from 'react-native'
import React from 'react'
import AdminLayout from '../components/AdminLayout'
import DashboardBoats from '../pages/DashboardBoats'
import DashboardUser from '../pages/DashboardUser'
import Historical from '../pages/Historical'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AdminLayout />}>
                    <Route path="boats" element={<DashboardBoats />} />,
                    <Route path="historical" element={<Historical />} />,
                    <Route path="users" element={<DashboardUser />} />
                </Route>
            </>
        )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter