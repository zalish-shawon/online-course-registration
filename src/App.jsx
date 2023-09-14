
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Course from './Course'
import Remaincredit from './Remaincredit'
import CourseName from './CourseName'
import TotalCredit from './TotalCredit'

function App() {
  const [courses, setCourses] = useState([])
  const [courseName, setCourseName] = useState([])


  const handleCourseName = (coursename) => {
    const newCourseArr = [...courseName, coursename]
    setCourseName(newCourseArr)
  }

  useEffect(()=>{
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])

  return (
    <>
      <h1 className=' text-5xl text-center mt-5 
      font-bold'>Course Registration</h1>

      <div className='flex gap-9'>
        <div>
          
        </div>
        <div className='grid grid-cols-3 gap-8 mt-10 w-[1024px]'>
              {
                courses.map(course => <Course key={course.id} course={course} handleCourseName = {handleCourseName}></Course>)
              }
        </div>
        <div className=' mt-10'>
              <Remaincredit></Remaincredit>
              <CourseName courseName = {courseName}  ></CourseName>
              <TotalCredit></TotalCredit>
        </div>
      </div>
    </>
  )
}

export default App
