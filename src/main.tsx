import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TasksView from "./views/tasks/TasksView.tsx";
// import DrawerActivityNoChildren from "./components/menu/acts/DrawerActivityNoChildren.tsx";

// const WaterComponent: React.FC = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const [count, setCount] = React.useState(10);
//
//     const manageSubtraction = () => {
//         setCount((prevCount) => Math.max(prevCount - 1, 0));
//     };
//
//     const manageAddition = () => {
//         setCount((prevCount) => prevCount + 1);
//     };
//
//     return (
//         <div className={"flex flex-col justify-items-center"}>
//             <button className={"bg-secondary-500 text-black"} onClick={() => setIsDrawerOpen(true)}>Open Drawer from Water</button>
//             <DrawerActivityNoChildren
//                 isOpen={isDrawerOpen}
//                 setIsOpen={setIsDrawerOpen}
//                 activity={"water"}
//                 count={count}
//                 max={30}
//                 isCounter={true}
//                 subOperation={manageSubtraction}
//                 sumOperation={manageAddition}
//             />
//         </div>
//     );
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksView />
    {/*<WaterComponent />*/}
  </StrictMode>
)
