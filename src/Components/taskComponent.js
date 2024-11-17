import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "../App.css";
import DialogComponent from "./DialogComponent";
import { useState } from "react";

function TaskComponent({ task, handleDoneClicked, handleEditClicked, Tasks, settingTask }) {
  const doneButtonVariant = task.isDone ? "secondary" : "light";
  const badgeVariant = task.isDone ? "success" : "secondary";
  const badgeText = task.isDone ? "مكتملة" : "غير مكتملة";

  // Handle editing task
  function handleEdit() {
    handleEditClicked(task);
  }

  // Delete task function
  function DeleteFunction(id) {
    const updatedTaskList = Tasks.filter((task) => task.id !== id);
    settingTask(updatedTaskList);
  }

  return (
    <Card className="cardComponent container my-2 py-3 px-3 d-flex flex-column align-items-center justify-content-center border border-1 border-dark" style={{ direction: "rtl" }}>
      <div className="d-flex flex-column flex-md-row align-items-center w-100">
        <div className="Text text-center text-md-end p-3" style={{ flex: "1 1 70%" }}>
          <h4 className="fw-bold border-bottom border-dark border-2 pb-3 fs-3">{task.title}</h4>
          <p className="fs-4" style={{ maxHeight: '200px', overflowX: 'hidden', overflowY: "scroll" }}>{task.description}</p>
          <Badge pill bg={badgeVariant} className="fs-6">{badgeText}</Badge>
        </div>

        <div className="Actions d-flex flex-row flex-md-column align-items-center justify-content-center mt-3 mt-md-0" style={{ flex: "1 1 30%" }}>
          {/* Done Button */}
          <Button variant={doneButtonVariant} className="mb-2 p-0 mx-1 w-50 w-md-auto border border-2 border-success" onClick={() => handleDoneClicked(task.id)}>
            <span><lord-icon src="https://cdn.lordicon.com/hmzvkifi.json" trigger="hover" state="hover-loading" colors="primary:#16c72e" style={{ width: "30px", height: "30px" }}></lord-icon></span>
          </Button>

          {/* Edit Button */}
          <Button variant="light" className="mb-2 mx-1 p-0 w-50 w-md-auto border border-2 border-warning" onClick={handleEdit}>
            <span><lord-icon src="https://cdn.lordicon.com/fikcyfpp.json" trigger="hover" colors="primary:#c7c116,secondary:#000000" style={{ width: "30px", height: "30px" }}></lord-icon></span>
          </Button>

          {/* Delete Modal */}
          <DialogComponent task={task} DeleteFunction={DeleteFunction} settingTask={settingTask} />
        </div>
      </div>
    </Card>
  );
}

export default TaskComponent;
