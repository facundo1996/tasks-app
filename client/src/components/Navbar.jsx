import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className=" bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className=" text-2xl font-bold">
        <Link to={isAuthenticated ?'/tasks' :'/'}>
          Tasks Manager
        </Link>
      </h1>
      <ul className="flex gap-x-2">
        {
          isAuthenticated
            ? (
              <>
                <li>
                  Wellcome {user.username} // 
                </li>
                <li>
                  <Link className="bg-indigo-500 px-4 py-1 rounded-sm" to={'/add-tasks'}>Add Task</Link>
                </li>
                <li className=" cursor-pointer" onClick={logout}>
                  Logout
                </li>
              </>
            )
            : (
              <>
                <li>
                  <Link className="bg-indigo-500 px-4 py-1 rounded-sm" to={'/login'}>Login</Link>
                </li>
                <li>
                  <Link className="bg-indigo-500 px-4 py-1 rounded-sm" to={'/register'}>Register</Link>
                </li>
              </>
            )
        }
      </ul>
    </nav>
  )
}
