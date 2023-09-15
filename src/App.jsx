
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Course from './Course'
import Remaincredit from './Remaincredit'
import CourseName from './CourseName'
import TotalCredit from './TotalCredit'
import TotalCost from './TotalCost'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [courses, setCourses] = useState([])
  const [courseName, setCourseName] = useState([])
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalCost, setTotalCost] = useState(0)
  const [creditHourRemain, setCreditHourRemain] = useState(20)



  const handleCourseName = (coursename) => {
    const newCourseArr = [...courseName, coursename]
    const isExits = courseName.find(item => item.id === coursename.id)
    let creditHr = coursename.credit
    let cost = coursename.price
    if (isExits) {
      return toast.error("Already Selected")
    } else {
      courseName.forEach(item => {
        creditHr = creditHr + item.credit
        cost = cost + item.price
      })

    }
    const Remaincredit = 20 - creditHr

    if (Remaincredit < 0) {
      return toast.error("Credit limit is over")
    }
    setCourseName(newCourseArr)
    setTotalCredit(creditHr)
    setCreditHourRemain(Remaincredit)
    setTotalCost(cost)

  }

  useEffect(() => {
    fetch('course.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <>
      <h1 className=' text-5xl text-center mt-5 
      font-bold'>Course Registration</h1>

      <div className='flex gap-9'>
        <div>

        </div>
        <div className='grid grid-cols-3 gap-8 mt-10 w-[1024px]'>
          {
            courses.map(course => <Course key={course.id} course={course} handleCourseName={handleCourseName}></Course>)
          }
        </div>
        <div className=' mt-10'>
          <Toaster position="bottom-right"
            reverseOrder={true}></Toaster>
          <Remaincredit creditHourRemain={creditHourRemain} ></Remaincredit>
          <CourseName courseName={courseName} ></CourseName>
          <TotalCredit totalCredit={totalCredit}></TotalCredit>
          <TotalCost totalCost={totalCost} ></TotalCost>
        </div>
      </div>
    </>
  )
}

export default App
