import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DrawerActivityNoChildren from "./components/menu/acts/DrawerActivityNoChildren.tsx";

const WaterComponent: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [count, setCount] = React.useState(10);

  const manageSubtraction = () => {
    const newValue = count - 1;
    setCount(newValue < 0 ? 0 : newValue);
  };

  return (
    <div className={"flex flex-col justify-items-center"}>
      <button className={"bg-secondary-500 text-black"} onClick={() => setIsDrawerOpen(true)}>Open Drawer from Water</button>
      <DrawerActivityNoChildren isOpen={isDrawerOpen}
                                setIsOpen={setIsDrawerOpen}
                                activity={"water"}
                                count={15}
                                max={30}
                                isCounter={true}
                                subOperation={manageSubtraction}
                                sumOperation={() => setCount(count + 1)}/>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WaterComponent />
    </>
  )
}

export default App
