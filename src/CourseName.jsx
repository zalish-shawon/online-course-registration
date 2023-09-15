/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const CourseName = ({courseName}) => {
    
    return (
        <div className="px-1">
            <h1 className="font-bold text-xl mt-3 mb-4">Course Name</h1>
            <ol className=" list-decimal">
             {
                courseName.map((item) => 
                <div>
                    
                    <li className="ml-3 mt-1 mb-2 font-semibold text-gray-500 ">{item.course_name}</li>
                    
                </div>
                )
             }
             </ol>
            <hr />
        </div>
    );
};

export default CourseName;