import React from 'react'
import LoginForm from './LoginForm'
import SocialLogin from './SocialLogin'

function UserAuth() {
  return (
    <>
      <div className='auth-sec'>
        <div className='auth-box'>
          <LoginForm />
        {/*   <SocialLogin /> */}
        </div>
      </div>
    </>
  )
}

export default UserAuth