import React from 'react';

const DataSteps = ({ title, tag, number, color, children }) => {
  return (
    <div className='flex justify-center '>
      <div className='flex flex-col gap-4 text-center'> {/* Added text-center class */}
        
        <div className="heading text-4xl font-semibold">
          <h1>{title}</h1>
        </div>
        <div className="tag text-base flex justify-center text-center max-w-2xl font-light">
          <p>{tag}</p>
        </div>
        <div className='flex justify-center'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DataSteps;
