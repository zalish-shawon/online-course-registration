/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


const CourseName = ({courseName}) => {
    
    return (
        <div>
            <h1 className="font-bold text-xl mt-3 mb-4">Course Name</h1>
             {
                courseName.map((item) => <ol className=" mt-1">{item.course_name}</ol>)
             }
            <hr />
        </div>
    );
};

export default CourseName;