import { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import tasksContext from '../Context/tasksContext';
import toastContext from '../Context/toastContext';

function EditingModel({ show, setShow, task }) {
  const { Tasks, setTasks } = useContext(tasksContext);
  const {setShowToast} = useContext(toastContext)
  const {setToastMessage}  = useContext(toastContext)
  const {setFontColor} = useContext(toastContext)
  
  const [newTaskValues, setNewTaskValues] = useState({
    id: task?.id,
    title: task?.title || '', 
    description: task?.description || '',
    isDone: task?.isDone,
  });

  useEffect(() => {
    if (task) {
      setNewTaskValues({
        id: task.id,
        title: task.title,
        description: task.description,
        isDone: task.isDone,
      });
    }
  }, [task]);

  const handleClose = () => setShow(false);

  const handleTitleChange = (e) => {
    setNewTaskValues({
      ...newTaskValues,
      title: e.target.value
    });
  };

  const handleDescriptionChange = (e) => {
    setNewTaskValues({
      ...newTaskValues,
      description: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = Tasks.map((taskItem) => {
      if (taskItem.id === newTaskValues.id) {
        return { ...taskItem, title: newTaskValues.title, description: newTaskValues.description };
      }
      return taskItem;
    });

    setTasks(updatedTasks);
    setToastMessage('لقد تم تعديل هذه المهمة بنجاح')
    setFontColor('text-success')
    setShowToast(true)
    setTimeout(()=>{
      setShowToast(false)
    },1500)
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>تعديل المهمة</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="p-3 rounded" onSubmit={handleSubmit}>
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
              حفظ التعديلات
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إغلاق
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditingModel;
