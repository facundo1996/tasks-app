import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams()
  const taskId = params.id

  const onSubmit = handleSubmit((data) => {
    if(taskId){
      updateTask({...data, id: taskId})
    }else{
      createTask(data)
      navigate('/tasks')
    }
  })

  useEffect(() => {
    async function loadTaks() {
      if (taskId) {
        const task = await getTask(taskId)
        setValue('title', task.title)
        setValue('description', task.description)
      } 
    }
    loadTaks()
  }, [])

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

      <form onSubmit={onSubmit}>

        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          required
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
          autoFocus
        />

        <textarea
          rows={3}
          placeholder="Description"
          required
          className="w-full bg-zinc-700 text-white px-4 rounded-md my-2"
          {...register("description")}
        />

        <button>Save</button>

      </form>

    </div>
  )
}

