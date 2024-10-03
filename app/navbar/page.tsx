'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Navbar() {
  const route = useRouter()
  return (
    <>
     <h1> This is Navbar Page</h1> 
     <Link href="./"> <h1>Go to Homepage</h1></Link>
     <Link href="/about"> <h1>Go to About Page</h1></Link>
     <Link href="/contact"> <h1>Go to Contact-Us</h1></Link>
     
      {/* Navigation  */}
    <button onClick={() => route.push('/')}>HOME</button><br /><br />
    <button onClick={() => route.push('/about')}>ABOUT US</button><br /><br />
    <button onClick={() => route.push('/contact')}>CONTACT US</button><br /><br />
     
    </>
  )
}

export default Navbar;
