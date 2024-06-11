import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";

export default function TaskPage() {
  const { getTasks, tasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if(tasks.length === 0) return (<h1>No Tasks</h1>)

  return (
    <div>
      {
        tasks.map((task, i) => (
          <div key={task._id} id={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}
