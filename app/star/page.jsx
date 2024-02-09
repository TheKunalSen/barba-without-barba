
"use client"
// Your existing component file (`page.js` or similar)
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { Circle, OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import "../star/star.css";

const Page = () => {
  
  const [radius, setRadius] = useState(0.1);
  const circleRef = useRef();
  const canvasRef = useRef();

  const CircleComponent = () => {
  

    // useFrame(() => {
        
    //   const scrollPosition = window.scrollY / window.innerHeight;
    //   // console.log(scrollPosition)
      
      
       
    //   setRadius(scrollPosition*2); 
    
    //   // Adjust the scaling factor as needed
    // });
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const animation = gsap.to(circleRef.current.scale, {
        duration: 2,
        x: 1000, // Change the target radius value to 5
        y: 1000, // Adjust as needed
        onComplete: () => {
          console.log("Animation completed");
          // Remove sticky behavior if needed
        }
      });
  
      ScrollTrigger.create({
        trigger: ".starback",
        start: "top 0%",
        end: "bottom center",
        pin:".circle-canvas",
        scrub: true,
        markers: true,
        animation: animation,
        // pin: true, 
        
        onEnter: () => {
          // Add sticky behavior if needed
        }
      });
  
    }, []);

    return (
      <Circle args={[radius, 64]} ref={circleRef} position={[0, 0, -5]}>

      </Circle>
    );
  };

  return (
    <div className='starback'>
     <Canvas className="circle-canvas" style={{ background: 'green' }} camera={{fov:164}}>
      <OrbitControls/>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <CircleComponent/>
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>
      </Canvas>
      {/* Other content of your page */}
    </div>
  );
};

export default Page;

