'use client'
import { useState } from 'react'
import styles from './page.module.css'


export default function Home() {
  const [name,setName]=useState("Anil")  
 //<h1>EVENTS, FUNCTION AND STATE</h1>

  const apple=()=>{
    setName("Suphi")
  }
  const InnerComp =()=> {
    return (
      <h1>Inner Component</h1>
    )

  }
  return (
    <main className={styles.main}>
     <h1>EVENTS, FUNCTION AND STATE {name}</h1>
      
      <button onClick={()=>apple()}>Click me</button>
      {InnerComp()}
    </main>
  )
}


