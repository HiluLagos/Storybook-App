import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TasksView from "./views/tasks/TasksView.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'p-0'}>
        <TasksView/>
    </div>
  )
}

export default App
