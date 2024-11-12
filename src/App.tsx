import './App.css'
import TasksView from "./views/tasks/TasksView.tsx";

// const WaterComponent: React.FC = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [count, setCount] = React.useState(10);
//
//   const manageSubtraction = () => {
//     const newValue = count - 1;
//     setCount(newValue < 0 ? 0 : newValue);
//   };
//
//   return (
//     <div className={"flex flex-col justify-items-center"}>
//       <button className={"bg-secondary-500 text-black"} onClick={() => setIsDrawerOpen(true)}>Open Drawer from Water</button>
//       <DrawerActivityNoChildren isOpen={isDrawerOpen}
//                                 setIsOpen={setIsDrawerOpen}
//                                 activity={"water"}
//                                 count={15}
//                                 max={30}
//                                 isCounter={true}
//                                 subOperation={manageSubtraction}
//                                 sumOperation={() => setCount(count + 1)}/>
//     </div>
//   );
// }

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={'p-0'}>
        <TasksView/>
      {/*<WaterComponent />*/}
    </div>
  )
}

export default App
