/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const CourseName = ({courseName}) => {
    
    return (
        <div className=" bg-slate-100 px-1">
            <h1 className="font-bold text-xl mt-3 mb-4">Course Name</h1>
            
             {
                courseName.map((item) => 
                <div className="">
                    <ol>
                    <li className=" mt-1 mb-2 font-semibold ">{item.course_name}</li>
                    </ol>
                </div>
                )
             }
            <hr />
        </div>
    );
};

export default CourseName;