import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import TasksView from "./views/tasks/TasksView.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksView />
  </StrictMode>
)
