import React, { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

export default function Navbar() {

	const [toggle, setToggle] = useState(false);

	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((link, index) => (
					<li key={link.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
						<a href={`#${link.id}`}>
							{link.title}
						</a>
					</li>
				))}
			</ul>
			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img src={toggle ? close : menu}
					alt='menu'
					className='w-[28px] h-[28px] object-contain cursor-pointer'
					onClick={() => setToggle((prev) => !prev)}
				/>
			</div>
		</nav>
	)
}
