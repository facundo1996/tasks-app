import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc)

export default function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams()
  const taskId = params.id

  const onSubmit = handleSubmit((data) => {
    if (taskId) {
      updateTask({
        ...data,
        date: dayjs.utc(data.date).format(),
        id: taskId
      })
    } else {
      createTask({
        ...data,
        date: dayjs.utc(data.date).format()
      })
      }
    navigate('/tasks')
  })

  useEffect(() => {
    async function loadTaks() {
      if (taskId) {
        const task = await getTask(taskId)
        setValue('title', task.title)
        setValue('description', task.description)
        setValue('date', dayjs.utc(task.date).format('yyyy-MM-dd'))
      }
    }
    loadTaks()
  }, [])

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

      <form onSubmit={onSubmit}>

        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          required
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={3}
          placeholder="Description"
          required
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          {...register("description")}
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          {...register('date')}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />

        <button className=" bg-indigo-500 px-3 py-2 mt-4 rounded-md">Save</button>

      </form>

    </div>
  )
}

