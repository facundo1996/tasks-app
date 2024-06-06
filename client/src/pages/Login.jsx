import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    signin(values)
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {
          signinErrors && signinErrors.map((error, i) => (
            <div key={i} className='bg-red-500 p-2 text-white my-2'>
              {error}
            </div>
          ))
        }
        <h1 className="text-2xl font-bold">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            placeholder='Email'
            type="email"
            {...register('email', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          {
            errors.email && (
              <p className='text-red-500'>Email is required</p>
            )
          }
          <input
            placeholder='Password'
            type="password"
            {...register('password', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          {
            errors.password && (
              <p className='text-red-500'>Password is required</p>
            )
          }
          <button className="bg-zinc-700 text-white py-2 px-4 mt-5 rounded-md" type='submit'>
            Login
          </button>
          <p className="flex gap-x-2 justify-between mt-2">
            Don't Have an account ? <Link className="text-sky-500" to="/register" >Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}