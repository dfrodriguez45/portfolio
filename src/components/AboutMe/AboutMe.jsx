import React from 'react';
import './AboutMe.css';

const AboutMe = ({ }) => {
  return (
    <div className='col-span-2 row-span-1 rounded flex flex-col gap-5'>
      <h1 className="font-bold text-7xl">Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500'>Daniel Rodriguez</span></h1>
      <p className="font-normal text-xl">
        I'm a Information Systems Technologist, I specialize in Front-End development using frameworks like React to create modern and highly interactive web applications. I like to work on projects that allow me to experiment with new technologies and challenge myself to learn new things. I think Front-End development is a fascinating and constantly evolving area, and I feel fortunate to be able to work in it.
      </p>
    </div>
  );
};

AboutMe.propTypes = {};

export default AboutMe;