import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"
import { Link, useNavigate, useParams } from "react-router-dom"

const TaskForm = () => {
  const [task, setTask] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector((state) => state.tasks)

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      dispatch(updateTask(task))
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
          completed: false,
        })
      )
    }
    navigate("/")
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id))
    }
  }, [params, tasks])

  return (
    <section className='pt-[12rem] -mt-[5.25rem]'>
      <form
        onSubmit={handleSubmit}
        className='w-[40rem] m-auto border border-black rounded-lg p-6'
      >
        <div className='flex items-center justify-around m-3'>
          <label htmlFor='title' className='mr-4 font-bold text-xl'>
            Title of Task :
          </label>
          <input
            name='title'
            type='text'
            placeholder='title'
            onChange={handleChange}
            value={task.title || ""}
            className='border border-gray-400 p-2 rounded-md w-[70%]'
          />
        </div>
        <div className="flex items-center justify-around m-3">
        <label htmlFor='description'  className='mr-4 font-bold text-xl'>Description:</label>
        <textarea
          name='description'
          placeholder='description'
          onChange={handleChange}
          value={task.description || ""}
           className='border border-gray-400 p-2 rounded-md w-[70%]'
        ></textarea>
        </div>


        <div className='flex items-center justify-center'>
          <button className='standar-button rounded-md mr-4 pr-4 pl-4'>Save</button>
          <button className='standar-button rounded-md pr-4 pl-4 bg-gray-400'>
            <Link to='/'>Cancel</Link>{" "}
          </button>
        </div>
      </form>
    </section>
  )
}

export default TaskForm
