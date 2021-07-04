import React, { Fragment, useState } from 'react'
import Input from '../components/Input'
import Student from '../components/Student'

export default function StudentManagement() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [students, setStudents] = useState([])
  const [currentStudent, setCurrentStudent] = useState(null)

  const handleAdd = () => {
    if (name !== '' && age !== '') {
      setStudents(prevStudents => [
        ...prevStudents,
        {
          id: new Date().toISOString(),
          name,
          age
        }
      ])
      setName('')
      setAge('')
    }
  }

  const handleBack = () => {
    setName('')
    setAge('')
    setCurrentStudent(null)
  }

  const handleChange = setFunction => value => setFunction(value)

  const handleDelete = id => {
    const index = students.findIndex(student => student.id === id)
    const _students = [...students]

    _students.splice(index, 1)

    setStudents(_students)
  }

  const handleStartUpdate = id => {
    const student = students.find(student => student.id === id)

    setCurrentStudent(student)
    setName(student.name)
    setAge(student.age)
  }

  const handleUpdate = () => {
    if (name !== '' && age !== '') {
      const _students = students.map(student => {
        if (student.id === currentStudent.id) {
          return {
            id: student.id,
            name,
            age
          }
        }

        return student
      })

      setStudents(_students)
      handleBack()
    }
  }

  return (
    <div className="container">
      <h1>Quản lý sinh viên</h1>

      <form className="mb-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Tên
          </label>
          <Input
            id="name"
            className="form-control"
            placeholder="Nhập tên"
            type="text"
            value={name}
            onChange={handleChange(setName)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Tuổi
          </label>
          <Input
            id="age"
            className="form-control"
            placeholder="Nhập tuổi"
            type="number"
            value={age}
            onChange={handleChange(setAge)}
          />
        </div>
        <div className="mb-3">
          {currentStudent && (
            <Fragment>
              <button className="btn btn-primary me-2" type="button" onClick={handleUpdate}>
                Sửa
              </button>
              <button className="btn btn-dark" type="button" onClick={handleBack}>
                Trở về
              </button>
            </Fragment>
          )}
          {!currentStudent && (
            <Fragment>
              <button className="btn btn-primary" type="button" onClick={handleAdd}>
                Thêm
              </button>
            </Fragment>
          )}
        </div>
      </form>

      <ul className="list-group">
        {students.map(student => (
          <Student
            key={student.id}
            student={student}
            handleStartUpdate={handleStartUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  )
}
