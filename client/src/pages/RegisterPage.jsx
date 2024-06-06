import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function RegisterPage() {
  const { register, handleSubmit, formState: {
    errors
  } } = useForm()
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks')
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signup(values)
  })

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
        registerErrors && registerErrors.map((error, i) => (
          <div key={i} className='bg-red-500 p-2 text-white'>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmit}>
        <input
          placeholder='Username'
          type="text"
          {...register('username', { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        />
        {
          errors.username && (
            <p className='text-red-500'>Username is required</p>
          )
        }
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
        <button type='submit'>
          Register
        </button>

        <p className="flex gap-x-2 justify-between mt-2">
          Already Have an account ? <Link className="text-sky-500" to="/login" >Login</Link>
        </p>

      </form>
    </div>
  )
}