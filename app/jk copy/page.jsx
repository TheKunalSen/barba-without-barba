
"use client"

import { useEffect } from 'react';
import gsap from 'gsap';
import Head from 'next/head';
const page = () => {

    useEffect(() => {
        // Set initial properties after a delay
        gsap.set('.loader-1', { y: 0 });
    
        // Animate loader-1's y property after component is loaded
        gsap.to('.loader-1', { duration: 0.01, y: '100vh', ease: 'power2.inOut' });
        gsap.to('.loadwrapper-1', { zIndex: -100});
        // gsap.to('.loadwrapper-1', { duration: 0, zIndex: -100, delay: 1 });
        // gsap.to('.loader-1', { duration: 0, y: '100vh' });
    
        // Animate loader-1's y property after component is loaded
        
      }, []);
  return (
<>
<Head>
        <title>1 Page</title>
      </Head>
<div className="loadwrapper-1">
    <div className="loader-1"></div>
    </div>


    cfnbbcgb

</>
    
    
  )
}
export default page