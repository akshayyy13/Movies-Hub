import React from 'react'

const Show = ({valuePair}) => {
    console.log(valuePair)
  return (
    <div>
      <div className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 transition-all duration-300">{valuePair}</div>
    </div>
  );
}

export default Show
