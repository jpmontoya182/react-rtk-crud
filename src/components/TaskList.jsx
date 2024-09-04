import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { deleteTask } from "../features/tasks/taskSlice"
import TaskCard from "./TaskCard"

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)
  const dispacth = useDispatch()

  const handleDelete = (id) => {
    dispacth(deleteTask(id))
  }
  return (
    <section className="pt-[12rem] -mt-[5.25rem]">
      <div className="container">
      <header className="flex items-center justify-center">
        <h1 className="font-bold font-sans text-2xl text-gray-700 uppercase">Number of Tasks: {tasks.length}</h1>
      </header>
      <div className="grid gap-6 md:grid-cols-4 md:gap-5 mt-5 p-5">
        {
          tasks.length == 0 
          ? <div className="text-3xl font-sans font-bold">There are not tasks availables </div>
          :  tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            id={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
            handleDelete={handleDelete}
          />       
        ))}
      </div>
      </div>
    </section>
  )
}

export default TaskList
