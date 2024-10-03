'use client'


import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function About() {
  const  route  = useRouter()
  return (
    <>
      <h1>This is About Page</h1>
<Link href="/navbar"><h1>Go to Navbar</h1></Link>
<Link href="/"><h1>Go to Homepage</h1></Link>
<Link href="/contact"><h1>Go to Contact-Us Page</h1></Link>


<button onClick={() => route.push('/')}>HOME</button><br /><br />
    <button onClick={() => route.push('/about')}>ABOUT US</button><br /><br />
    <button onClick={() => route.push('/contact')}>CONTACT US</button><br /><br />
    </>
  )
}

export default About;
