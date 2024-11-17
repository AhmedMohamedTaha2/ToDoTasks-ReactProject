import { useContext, useState, useEffect } from "react";
import TaskComponent from "./taskComponent";
import tasksContext from "../Context/tasksContext";
import CreateNewTask from "./CreateNewTask";
import EditingModel from "./EditingModel";
import TabsComponent from "./TabsComponent";
import toastContext from "../Context/toastContext";

export default function MainContainerComponent() {
  const [selectedTask, setSelectedTask] = useState(null);
  const { Tasks, setTasks } = useContext(tasksContext);
  const [show, setShow] = useState(false);
  const [tasksList, setTasksList] = useState(Tasks);

  const {showToast} = useContext(toastContext)
  const {setShowToast} = useContext(toastContext)
  const {setToastMessage}  = useContext(toastContext)
  const {ToastMessage} = useContext(toastContext)
  const {setFontColor} = useContext(toastContext)
  const display = showToast ? 'block' : 'none';


  // ============================================================================
  let displayingTheToast = '';

  function handleDoneClicked(id) {
    const updatedTaskList = Tasks.map((task) => {
  
      if (task.id === id) {
        const updatedTask = { ...task, isDone: !task.isDone };
        displayingTheToast(updatedTask);
        return updatedTask;
      }
  
      return task;
    });
  
    setTasks(updatedTaskList);
  }
  
  displayingTheToast = (task) => {
    if (task.isDone === true) {
      setShowToast(true);
      setFontColor('text-success')
      setToastMessage('لقد تم انجاز المهمة');
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    } else {
      setShowToast(true);
      setFontColor('text-danger')
      setToastMessage('لقد تم الغاء انجاز المهمة');
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    }
  }
  
  // function handleDeleteClicked(id) {
  //   const updatedTaskList = Tasks.filter((task) => task.id !== id);
  //   setTasks(updatedTaskList);
  // }
// ============================================================================

// ============================================================================


  // ============================================================================
  const handleEditTask = (task) => {
    setSelectedTask(task);
    setShow(true);
  };

  // ============================================================================
  function handleSelectedTab(state) {
    if (state === "All") {
      setTasksList(Tasks);
    } else if (state === "Done") {
      setTasksList(Tasks.filter((task) => task.isDone));
    } else {
      setTasksList(Tasks.filter((task) => !task.isDone));
    }
  }



  useEffect(() => {
    setTasksList(Tasks);
  }, [Tasks]);



  function settingTask(updatedTaskList){
    setTasks(updatedTaskList)
}


  return (
    <div className="container col-md-6 p-0 my-5 rounded-3 bg-light border border-2 border-primary d-flex flex-column align-items-center">
      <div className="container-fluid m-0 bg-primary py-3 mb-1">
        <h1 className="text-light fw-bold">قائمة المهام</h1>
      </div>
      <div className="container col-md-10 m-0 py-0">
        <CreateNewTask />
      </div>
      <TabsComponent handleSelectedTab={handleSelectedTab} />
      <div className="container col-md-10 mb-3 py-1">
        {tasksList.map((task) => (
          <TaskComponent
            key={task.id}
            task={task}
            Tasks={Tasks}
            handleDoneClicked={handleDoneClicked}
            handleEditClicked={handleEditTask}
            settingTask={settingTask}
          />
        ))}
      </div>
      <EditingModel show={show} setShow={setShow} task={selectedTask} />
    </div>
  );
}
