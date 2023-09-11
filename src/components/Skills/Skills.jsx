import React from 'react';
import { SiCsharp, SiCss3, SiDotnet, SiFirebase, SiGit, SiHtml5, SiJavascript, SiMysql, SiReact } from "react-icons/si";
import './Skills.css';

const Skills = ({ }) => {
  return (
    <div className='col-span-2 row-span-1 rounded flex flex-col gap-5'>
      <h2 className="font-bold text-3xl">Skills</h2>
      <ul className='flex flex-row gap-10 justify-center items-center flex-wrap h-full text-7xl'>
        <li><SiGit /></li>
        <li><SiHtml5 /></li>
        <li><SiCss3 /></li>
        <li><SiJavascript /></li>
        <li><SiReact /></li>
        <li><SiCsharp /></li>
        <li><SiDotnet /></li>
        <li><SiFirebase /></li>
        <li><SiMysql /></li>
      </ul>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;