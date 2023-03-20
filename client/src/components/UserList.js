import React from 'react'

export default function UserList({user}) {

    const { id, username } = user

  return (
    <option>
    {id}: {username}
</option>
  )
}
