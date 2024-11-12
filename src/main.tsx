import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TasksView from "./views/tasks/TasksView.tsx";
import Activities from "./views/activities/Activities.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Activities />
    <TasksView />
  </StrictMode>
)
