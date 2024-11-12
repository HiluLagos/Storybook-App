import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import TasksView from "./views/tasks/TasksView.tsx";
import Activities from "./views/activities/Activities.tsx";

const App = () => (
  <div className="flex flex-col items-center app gap-4">
    <h1>Welcome</h1>
    <div className="buttons flex flex-col gap-2 p-4 bg-gray-200 rounded items-center">
      <Link to="/activities">
        <button className="bg-blue-500 text-white p-2 rounded">Go to Activities</button>
      </Link>
      <Link to="/tasks">
        <button className="bg-green-500 text-white p-2 rounded">Go to Tasks</button>
      </Link>
    </div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/tasks" element={<TasksView />} />
      </Routes>
    </Router>
  </StrictMode>
);