import React, { useContext, useState } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import tasksContext from "../Context/tasksContext";
import toastContext from "../Context/toastContext";

export default function CreateNewTask() {

  const { setShowToast } = useContext(toastContext);
  const { setToastMessage } = useContext(toastContext);
  const { setFontColor } = useContext(toastContext);

  const [newTaskValues, setnewTaskValues] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    isDone: false,
  });

  const { Tasks, setTasks } = useContext(tasksContext);

  const [isAccordionOpen, setIsAccordionOpen] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task Created:", newTaskValues);
    if (!newTaskValues.title || !newTaskValues.description) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
      setToastMessage("الرجاء قم بأدخال البيانات المطلوبة");
      setFontColor("text-danger");
    } else {
      setTasks([...Tasks, newTaskValues]);
      setnewTaskValues({
        id: uuidv4(),
        title: "",
        description: "",
        isDone: false,
      });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
      setToastMessage("تم إضافة المهمة بنجاح");
      setFontColor("text-success");

      setIsAccordionOpen(); 
    }
  };

  const handleTitleChange = (event) => {
    setnewTaskValues((newTaskValues) => ({
      ...newTaskValues,
      title: event.target.value,
    }));
  };

  const handleDescriptionChange = (event) => {
    setnewTaskValues((newTaskValues) => ({
      ...newTaskValues,
      description: event.target.value,
    }));
  };

  return (
    <Accordion className="container my-4 text-end " activeKey={isAccordionOpen ? "0" : null}>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
          <i className="fa-solid fa-circle-plus mx-2  py-0">إضافة مهمة جديدة</i>
        </Accordion.Header>
        <Accordion.Body className=" bg-light text-dark  border border-2 border-dark rounded-2 mt-2 ">
          <Form className="p-3  rounded" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 text-end" controlId="taskName">
              <Form.Label className="text-dark">اسم المهمة</Form.Label>
              <Form.Control
                type="text"
                placeholder="أدخل اسم المهمة"
                className="text-end bg-dark text-light border border-light"
                value={newTaskValues.title}
                onChange={handleTitleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4 text-end" controlId="taskDetails">
              <Form.Label className="text-dark">تفاصيل المهمة</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="أدخل تفاصيل المهمة"
                className="text-end bg-dark text-light border border-light"
                value={newTaskValues.description}
                onChange={handleDescriptionChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              <lord-icon
                src="https://cdn.lordicon.com/sbnjyzil.json"
                trigger="hover"
                state="hover-swirl"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
