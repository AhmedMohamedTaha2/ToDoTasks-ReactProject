import { useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toastContext from "../Context/toastContext";






function DialogComponent({ task, DeleteFunction, settingTask }) {
  const {setShowToast} = useContext(toastContext)
  const {setToastMessage}  = useContext(toastContext)
  const {setFontColor} = useContext(toastContext)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleOpen = () => setShow(true);

  function handleDeleteClicked() {
    setShow(true);  
  }

  function handleDeleteFunction() {
    DeleteFunction(task.id);  
    handleClose();
    setShowToast(true)
    setToastMessage("تم حذف المهمة بنجاح")
    setFontColor("text-success")
    setTimeout(()=>{
      setShowToast(false)
    },1500)
  }



  return (
    <>
      <Button
        variant=""
        className="mb-2 p-0 mx-1 w-50 w-md-auto border border-2 border-danger"
        onClick={handleDeleteClicked}  
      >
        <span>
          <lord-icon
            src="https://cdn.lordicon.com/hwjcdycb.json"
            trigger="hover"
            colors="primary:#c71f16,secondary:#e83a30"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
        </span>
      </Button>

      {/* Modal for confirmation */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center text-primary">
            هل انت متأكد من 
            انك تريد حذف  المهمة ؟
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ direction: "rtl" }}>
          <div className="container text-end">
            <p className="fw-bold text-danger">
              سيتم حذف هذه المهمة نهائيًا إذا أكدت الحذف و لن تتمكن من التراجع عن هذه الخطوة
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>إغلاق</Button>
          <Button variant="danger" onClick={handleDeleteFunction}>حذف</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DialogComponent;
  