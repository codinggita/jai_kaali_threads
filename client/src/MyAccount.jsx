import { Avatar } from '@mui/material'
import React from 'react'

export default function MyAccount() {
  return (
    <div className='account'>
      <div className="account-title">
        <h1>My Account</h1>
      </div>
      <div className="account-section">
        <div className="account-section-avtar"><Avatar/></div>
      </div>
    </div>
  )
}
