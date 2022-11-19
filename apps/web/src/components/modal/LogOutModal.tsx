import React from 'react'
import Modal from 'react-modal'

interface LogOutModalProps{
 isOpen:boolean
 closeModal:()=>void
}
const LogOutModal = ({isOpen,closeModal}:LogOutModalProps) => {
  return (
    <Modal isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Tweet Post"
    className="max-w-[600px] w-[94%] min-w-[300px] bg-white top-1/3 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 rounded-md"
    style={{ overlay: { backgroundColor: '#2424247f', zIndex: '1000' } }}
    >
  <h1>fhdhf</h1>
    </Modal>
  )
}

export default LogOutModal