import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/tasks' element={<h1>Tasks page</h1>} />
        <Route path='/tasks/:id' element={<h1>task update</h1>} />
        <Route path='/add-tasks' element={<h1>New Tasks</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
