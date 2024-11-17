import { useContext } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import toastContext from "../Context/toastContext";

function PlacementExample() {
  const { showToast, ToastMessage, fontColor } = useContext(toastContext);

  return (
    <ToastContainer
      className="p-3"
      position="bottom-start"
      style={{
        zIndex: 1,
        direction: 'rtl',
        position: 'fixed',  
        bottom: '20px',      
        left: '20px'        
      }}
    >
      {showToast && (
        <Toast className='border border-1 border-light text-center'>
          <Toast.Header className='text-start'>
            <h5 className="mx-1 fw-bold">تنبيه</h5>
          </Toast.Header>
          <Toast.Body className={`bg-dark rounded-bottom-1 ${fontColor} fw-bold`}>
            {ToastMessage}
          </Toast.Body>
        </Toast>
      )}
    </ToastContainer>
  );
}

export default PlacementExample;
