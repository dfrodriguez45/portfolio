import React from 'react';
import './Experience.css';

const Experience = ({ }) => {
  return (
    <div className='col-span-2 row-span-1 rounded flex flex-col gap-5'>
      <h2 className="font-bold text-3xl">Experience</h2>
      <ul className='flex flex-row gap-10 justify-start items-center h-full'>
        <li className='border py-2 px-6 rounded h-full'>
          <h3 className='font-semibold'>SoftwareOne Colombia</h3>
          <h4 className='italic'>Apprentice</h4>
          <p>April / October 2023</p>
          <ul className='list-disc ml-6'>
            <li className='list-item'>Scrum</li>
            <li className='list-item'>Azure</li>
            <li className='list-item'>React</li>
            <li className='list-item'>C#</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

Experience.propTypes = {};

export default Experience;