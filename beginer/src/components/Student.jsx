import React from 'react'
import PropTypes from 'prop-types'

export default function Student({ student, handleStartUpdate, handleDelete }) {
  return (
    <li key={student.id} className="list-group-item">
      <span className="me-4">
        {student.name}: {student.age} tuổi
      </span>
      <div className="btn-group">
        <button type="button" className="btn btn-info" onClick={() => handleStartUpdate(student.id)}>
          Sửa
        </button>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(student.id)}>
          Xóa
        </button>
      </div>
    </li>
  )
}

Student.propTypes = {
  student: PropTypes.object.isRequired,
  handleStartUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}
