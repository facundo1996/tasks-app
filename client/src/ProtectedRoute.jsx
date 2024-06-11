import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth()
  
  if(loading){
    return <h1>LOADING....</h1>
  }
  if(!loading && !isAuthenticated){
    return <Navigate to='/login' replace />
  }

  return (
    <Outlet />
  )
}
