/* eslint-disable react/prop-types */
const TotalCredit = ({totalCredit}) => {
    console.log(totalCredit);
    return (
        <div>
            <h1 className='text-xl font-bold mt-2 mb-2'>Total Credit Hour: {totalCredit} </h1>

            <hr />
        </div>
    );
};

export default TotalCredit;