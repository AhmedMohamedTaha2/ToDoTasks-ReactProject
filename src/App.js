import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import MainContainerComponent from "./Components/MainContainerComponent";
import { useContext } from "react";
import tasksContext from "./Context/tasksContext";
import { v4 as uuidv4 } from "uuid";
import toastContext from "./Context/toastContext";
import PlacementExample from "./Components/toastComponent";


export default function App() {
  const [Tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
        return [];
      }
    } else {
      return [
        {
          id: uuidv4(),
          title: "Task 1",
          description: "This is a task",
          isDone: false,
        },
        {
          id: uuidv4(),
          title: "Task 2",
          description: "This is another task",
          isDone: false,
        },
        {
          id: uuidv4(),
          title: "Task 3",
          description: "This is a third task",
          isDone: false,
        },
      ];
    }
  });

  const [showToast , setShowToast] = useState(false);
  const [ ToastMessage , setToastMessage ] = useState('')
  const [fontColor , setFontColor] = useState('text-success')

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }, [Tasks]);


 function handleShowingToast(){
  setShowToast(true)
  setTimeout(() => {
    setShowToast(false)
    }, 1500);
 }

  return (
    <tasksContext.Provider value={{ Tasks, setTasks }}>
        <toastContext.Provider value={{showToast:showToast,handleShowingToast:handleShowingToast ,ToastMessage:ToastMessage,setToastMessage:setToastMessage,fontColor:fontColor,setFontColor:setFontColor}}>
            <div className="App">
                      <MainContainerComponent />
                            <PlacementExample />
            </div>
        </toastContext.Provider>
    </tasksContext.Provider>
  );
}
