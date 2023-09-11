import React from 'react';
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import './Projects.css';

const Projects = ({ }) => {
  return (
    <div className='col-span-1 row-span-3 rounded flex flex-col gap-5'>
      <h2 className="font-bold text-3xl">Projects</h2>
      <ul className="flex flex-col gap-5 h-full no-scrollbar overflow-y-scroll overflow-clip">
        <li className='flex flex-row gap-5 justify-between items-center rounded bg-gradient-to-r from-sky-500 to-blue-800 p-6 min-h-[100px]'>
          <h3 className='font-semibold w-full'>Adeline salón de belleza</h3>
          {/* <a href="#" target="_blank" title='Github repository'><BsGithub className='text-2xl' /></a> */}
          <a href="https://adeline-site.web.app/" target="_blank" title='Website'><BsBoxArrowUpRight className='text-2xl' /></a>
        </li>
        <li className='flex flex-row gap-5 justify-between items-center rounded bg-gradient-to-r from-sky-500 to-blue-800 p-6 min-h-[100px]'>
          <h3 className='font-semibold w-full'>Fortnite store</h3>
          <a href="https://github.com/dfrodriguez45/fortnite-store" target="_blank" title='Github repository'><BsGithub className='text-2xl' /></a>
          <a href="https://api-client-fortnite.vercel.app/" target="_blank" title='Website'><BsBoxArrowUpRight className='text-2xl' /></a>
        </li>
        <li className='flex flex-row gap-5 justify-between items-center rounded bg-gradient-to-r from-sky-500 to-blue-800 p-6 min-h-[100px]'>
          <h3 className='font-semibold w-full'>Centinela Universal Web</h3>
          {/* <a href="#" target="_blank"title='Github repository'><BsGithub className='text-2xl' /></a> */}
          <a href="https://centinela-universal-acff4.web.app/" target="_blank" title='Website'><BsBoxArrowUpRight className='text-2xl' /></a>
        </li>
        <li className='flex flex-row gap-5 justify-between items-center rounded border p-6 min-h-[100px]'>
          <h3 className='font-semibold w-full'>Coming soon...</h3>
          {/* <a href="#" target="_blank"title='Github repository'><BsGithub className='text-2xl' /></a> */}
          {/* <a href="https://centinela-universal-acff4.web.app/" target="_blank" title='Website'><BsBoxArrowUpRight className='text-2xl' /></a> */}
        </li>
      </ul>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;