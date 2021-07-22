import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './profile.slice'

export default function Profile() {
  const profile = useSelector(state => state.profile.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    // Không giống dispatch 1 action thông thường
    // getUser()(dispatch)

    // Dispatch 1 async action giống y hệt 1 action thông thường
    // dispatch(getUser())
    //   .then(unwrapResult)
    //   .then(payload => {
    //     console.log('payload: ', payload)
    //   })
    //   .catch(error => {
    //     console.log('error: ', error)
    //   })
    ;(async () => {
      try {
        const data = await dispatch(getUser())
        const payload = unwrapResult(data)
        console.log('payload: ', payload)
      } catch (error) {
        console.log('error: ', error)
      }
    })()
  }, [dispatch])
  return (
    <div>
      <div>Tên: {profile.name}</div>
      <div>Tuổi: {profile.age}</div>
    </div>
  )
}
