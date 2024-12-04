import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <div className=' flex items-center justify-center p-3 mt-6'>
      <SignUp/>
    </div>
  )
}

export default Page
