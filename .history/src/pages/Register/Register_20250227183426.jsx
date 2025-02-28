import { Input } from '@heroui/react'
import React from 'react'

export default function Register() {
  return (
    <>
     <div className="text-center font-Gilroy-Bold">
     <h1 className=' text-2xl font-semibold'>I am new to This store</h1>
     <p className=''>Enjoy exclusive discounts & offers</p>
     </div>
     <div className="w-2/3 m-auto">
     <Input label="First Name" type="text" variant="underlined" />
     <Input label="Last Name" type="text" variant="underlined" />
     <Input label="E-mail Address" type="email" variant="underlined" />
     <Input label="Password" type="text" variant="underlined" />
     <Button color="warning">Sign up</Button>
     </div>
    </>
  )
}
