import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext"
import { useNavigate } from "react-router-dom";

export default function TaskFormPage() {
  const { tasks, createTask } = useTasks();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createTask(data)
    navigate('/tasks')
  })

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

      <form onSubmit={onSubmit}>

        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
          autoFocus
        />

        <textarea
          rows={3}
          placeholder="Description"
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
          {...register("description")}
        />

        <button>Save</button>

      </form>

    </div>
  )
}

