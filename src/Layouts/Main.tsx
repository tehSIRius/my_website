import React from 'react';

export const Main: React.FC = (props) => {
	return (
		<div className='flex bg-gray-800 text-white w-full sm:h-screen font-mono subpixel-antialiased overflow-auto'>
			{props.children}
		</div>
	);
};
