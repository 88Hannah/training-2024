import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function AuthRequired() {

    const isLoggedIn = localStorage.getItem("loggedin")
    let location = useLocation()

    if (!isLoggedIn) {
        return <Navigate 
            to='/login'
            state={{
                message: "You must log in first",
                prevPath: location.pathname
            }}
            replace={true}  
        />
    }

    return <Outlet />
}