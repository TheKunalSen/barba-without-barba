"use client"
import { useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';



export default function Home() {
  const router = useRouter();
  const [imageWidth, setImageWidth] = useState(100);

  const handleH1Click = () => {
    // Change the path to '/alp' after a delay of 1000 milliseconds (1 second)
    

    // Change the width to 1000 after a delay of 1500 milliseconds (1.5 seconds)
    setTimeout(() => {
      setImageWidth(1000);
    }, 100);
    setTimeout(() => {
      router.push('/alp');
    }, 500);
  };
  const handleNextButtonClick = () => {
    // Use GSAP to animate the loader's y property to 0
    gsap.to('.loadwrapper', { zIndex: 100,delay:-100 });
    gsap.to('.loader', { duration: 0.1, y: 0 });

    // Change the route to '/jk' after a delay of 500 milliseconds (0.5 seconds)
    setTimeout(() => {
      router.push('/jk');
    }, 800);
  };


  return (
    <>
     <Head>
        <title>home Page</title>
      </Head>
      <Link href="/jk">jihad</Link>
    <div className="loadwrapper">
    <div className="loader"></div>
    </div>
      {/* <Link href='/alp'> */}
        <h1 onClick={handleH1Click}>jbkkh</h1>
      {/* </Link> */}
      <Image
        src='/w1.jpg'
        width={imageWidth}
        height={100}
      />
      <button className='btn' onClick={handleNextButtonClick}>Next</button>
    </>
  );
}

