//import { View, Text } from 'react-native'
import { useContext } from 'react'
import AdminLayout from '../components/AdminLayout'
import DashboardBoats from '../modules/admin/pages/DashboardBoats';
import DashboardUser from '../modules/admin/pages/DashboardUser';
import Historical from '../modules/admin/pages/Historical';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthContext from '../config/context/auth-context'
import SignInPage from '../modules/auth/pages/SignInPage'



const AppRouter = () => {
    const { user } = useContext(AuthContext);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                {user.signed ? (
                    <>
                        <Route path="/" element={<AdminLayout />} >
                            <Route path="/" element={<DashboardBoats />} />
                            <Route path="/boats" element={<DashboardBoats />} />
                            <Route path="/users" element={<DashboardUser />} />
                            <Route path="/historical" element={<Historical />} />
                            <Route path="/historical/:serialNumber" element={<Historical />} />
                        </Route>
                    </>
                ) : (
                    <Route path="/" element={<SignInPage />} />
                )}
                <Route path="/*" element={<> 404  Not Found</>} />
            </>
        )
    )
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter