import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";
import { AuthProvider } from './context/AuthContext';
import HomePage from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";
import TaskPage from "./pages/TaskPage";
import Profile from "./pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<ProtectedRoute />} >
            <Route path='/tasks' element={<TaskPage />} />
            <Route path='/tasks/:id' element={<TaskFormPage />} />
            <Route path='/add-tasks' element={<TaskFormPage />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
