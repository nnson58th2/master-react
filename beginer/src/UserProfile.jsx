import React, { memo } from 'react'
import User from './User'

// Currying
const connect = Component => props => {
  const data = [1, 2, 3, 4]
  return <Component {...props} data={data} />
}

const UserProfileWrapper = connect(User)

const UserProfile = memo(() => {
  return (
    <div>
      <div>User</div>
      <UserProfileWrapper />
    </div>
  )
})

// React.memo
export default UserProfile
