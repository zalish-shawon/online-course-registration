/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { FiDollarSign } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';
const Course = ({ course, handleCourseName }) => {
    const { course_name, description, img, price, credit } = course

    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[450px]">
                <figure className="px-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{course_name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='flex items-center gap-3'>
                        <FiDollarSign className='text-xl'></FiDollarSign>
                        <p className=' text-gray-600 font-semibold'>Price: {price}</p>
                        </div>
                        <div className='flex items-center gap-3' >
                            <FiBookOpen className='text-xl'></FiBookOpen>
                            <p className=' text-gray-600 font-semibold'>Credit: {credit}hr</p>
                        </div>
                    </div>
                    <div className=" w-full">
                        <button onClick={() => handleCourseName(course)} className=" w-full p-2  btn-primary text-white">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;