import React from 'react'
import { MdDelete } from "react-icons/md"
import { GrDocumentUpdate } from "react-icons/gr"

const TodoCards = ({ title, body }) => {
    return (
        <div className='p-3 todo-card'>
            <div>
                <h5>{title}</h5>
                {/* <p className='todo-card-p'>{body.split("", 45)}...</p> */}
                <p className='todo-card-p'>{body}...</p>
            </div>
            <div className='d-flex justify-content-around'>
                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1'>
                    <GrDocumentUpdate className='card-icons'/> Update
                </div>
                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1'>
                    <MdDelete className='card-icons del'/> Delete
                </div>
            </div>

        </div>
    )
}

export default TodoCards



