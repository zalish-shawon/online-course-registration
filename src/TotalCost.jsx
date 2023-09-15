/* eslint-disable react/prop-types */
const TotalCost = ({totalCost}) => {
    return (
            <div>
            <h1 className='text-xl font-bold mt-2 mb-2'>Total Cost: {totalCost}$ </h1>

            <hr />
        </div>
    );
};

export default TotalCost;