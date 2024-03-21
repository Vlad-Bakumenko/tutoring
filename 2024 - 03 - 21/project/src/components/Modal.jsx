// 1 Step: npm install reactjs-popup --save
// 2 Step: import Popup component
// 3 Step: choose necessary Popup component from library

import Popup from 'reactjs-popup';
import { useContext } from 'react';
import { RandomContext } from '../contexts/RandomContext';

function Modal() {
    const {error, setError} = useContext(RandomContext);
    const closeModal = () => setError({open:false, content:""});
  return (
    <Popup open={error.open} closeOnDocumentClick onClose={closeModal}>
      {/* based on property "open" of error object we are in control when popup component will appear on the page */}
        <div className="modal">
          {error.content}
          <button className='close' onClick={closeModal}>X</button>
        </div>
      </Popup>
  )
}

export default Modal