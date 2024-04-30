import { Navigate } from "react-router-dom"


export function ProtectedRoute({children})
{
    //login

    if(localStorage.getItem('userToken'))
    return children
    else
    return <Navigate to='/login'></Navigate>
}