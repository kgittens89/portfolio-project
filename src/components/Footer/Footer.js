import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
// import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';
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
					<Tooltip title='Resume PDF'>
						<a
							href='https://drive.google.com/file/d/1tb5YDFH7ZH19GmqpVUD1uEUgwAtMVhjU/view?usp=sharing'
							target='_blank'
							rel='noreferrer'>
							<IoDocumentText className='icons' />
						</a>
					</Tooltip>
					{/* <a
						href='https://twitter.com/?lang=en'
						target='_blank'
						rel='noreferrer'>
						<AiFillTwitterCircle className='icons' />
					</a> */}
					<Tooltip title='Email Me'>
						<a
							href='mailto:keisha.gittenssa@gmail.com'
							target='_blank'
							rel='noreferrer'>
							<MdEmail className='icons' />
						</a>
					</Tooltip>
				</div>
			</footer>
		);
    }
    
    export default Footer;