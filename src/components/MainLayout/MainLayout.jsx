import React from 'react';
import './MainLayout.css';

const MainLayout = ({ children }) => {
	return (
		<div className='mainlayout grid grid-cols-3 grid-rows-3 gap-10  p-20 w-full h-screen'>
			{children}
		</div>);
};

MainLayout.propTypes = {};

export default MainLayout;