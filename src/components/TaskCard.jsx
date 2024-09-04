import { Link } from "react-router-dom"

const TaskCard = ({ id, title, completed, description, handleDelete }) => {
  return (
    <div
      key={id}
      className='m-1 p-5 border rounded-md border-gray-500 w-[20rem]'
    >
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-2xl text-center'>{title}</h2>
        <button
          className={`standar-button rounded-md  ${
            completed === false
              ? "bg-gray-400 text-black border-gray-400"
              : "bg-gray-800 text-white border-gray-800"
          }`}
        >
          {completed === false ? "Terminar" : "Finalizada"}
        </button>
      </div>
      <p className='mt-4 mb-4'>
        {description}
      </p>
      <div className='flex items-center justify-around'>
        <button
          className='standar-button rounded-md text-black bg-gray-300'
          onClick={() => {
            handleDelete(id)
          }}
        >
          Delete
        </button>

        <button 
          className='standar-button rounded-md text-black pl-3 pr-3 bg-gray-300'>
          <Link to={`/edit-task/${id}`}>Edit</Link>
        </button>
      </div>
    </div>
  )
}

export default TaskCard
