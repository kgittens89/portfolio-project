import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
// import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import './Footer.css'

function Footer() {
    return (
			<footer>
				<p>Keisha M. Gittens, 2022</p>
				<div>
					<a
						href='https://github.com/kgittens89'
						target='_blank'
						rel='noreferrer'>
						<BsGithub className='icons' />
					</a>
					<a
						href='https://www.linkedin.com/in/keisha-gittens/'
						target='_blank'
						rel='noreferrer'>
						<BsLinkedin className='icons' />
					</a>
					{/* <a
						href='https://twitter.com/?lang=en'
						target='_blank'
						rel='noreferrer'>
						<AiFillTwitterCircle className='icons' />
					</a> */}
						<Tooltip title='Email Me'>
					<a href='mailto:keishamsa@me.com' target='_blank' rel='noreferrer'>
							<MdEmail className='icons' />
					</a>
						</Tooltip>
				</div>
			</footer>
		);
    }
    
    export default Footer;