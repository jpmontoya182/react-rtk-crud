
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <Router>
      <Header />
      <Routes>        
        <Route path='/' element={<TaskList />} />
        <Route path='/new-task' element={<TaskForm />} /> 
        <Route path='/edit-task/:id' element={<TaskForm />} /> 
      </Routes>
    </Router>
  )
}

export default App
