import React, { useContext, useEffect, useState } from 'react'
import usePrevious from './usePrevious'
import { AppContext } from './App'
import { useUser } from './AppContext'

// Custom Hook
const useInputNumber = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChangeInput = event => {
    const value = event.target.value

    if (/^\d+$/.test(value) || value === '') {
      setValue(value)
    }
  }

  return [value, handleChangeInput]
}

export default function User() {
  const [valueInputText, setValueInputText] = useInputNumber('')

  const prevValueInputText = usePrevious(valueInputText)
  console.log(prevValueInputText)

  // Destructuring
  const [profile, setProfile] = useState({
    name: 'Son',
    age: 20
  })
  const [count, setCount] = useState(0)

  const handleChange = () => {
    setProfile(prevProfile => ({ ...prevProfile, age: prevProfile.age + 1 }))
    setProfile(prevProfile => ({ ...prevProfile, age: prevProfile.age + 1 }))
  }

  const useContextUserValue = useUser()

  // componentDidUpdate
  useEffect(() => {
    console.log('useEffect')

    // componentWillUnmount
    return () => {
      console.log('Clean')
    }
  })

  // componentDidMount
  useEffect(() => {
    console.log('useEffect []')
  }, [])

  // componentDidMount
  useEffect(() => {
    console.log(`useEffect ${count}`)
  }, [count])

  return (
    <div>
      <button onClick={handleChange}>Change</button>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>

      <input type="text" onChange={setValueInputText} value={valueInputText} />

      <ul>
        <li>Name: {useContextUserValue.name}</li>
        <li>Age: {useContextUserValue.age}</li>
      </ul>
    </div>
  )
}
