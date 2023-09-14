
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Course from './Course'

function App() {
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])

  return (
    <>
      <h1 className=' text-5xl text-center mt-5 
      font-bold'>Course Registration</h1>

      <div>
        <div className='grid grid-cols-3 gap-8 mt-10'>
              {
                courses.map(course => <Course key={course.id} course={course}></Course>)
              }
        </div>
        <div className=''>

        </div>
      </div>
    </>
  )
}

export default App
