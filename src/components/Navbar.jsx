import React, { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

export default function Navbar() {
	console.log(navLinks);
	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((link, index) => (
					<li key={link.id} className={`font-poppins`}>
						<a href={`#${link.id}`}>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
