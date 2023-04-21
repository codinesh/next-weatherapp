'use client'

import { signIn } from 'next-auth/react'
import React from 'react'

const Signin = () => {
  return (
    <div>
      <button onClick={() => signIn('github')}>Signin</button>
    </div>
  )
}

export default Signin
