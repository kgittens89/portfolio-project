import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md'
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
					<a
						href='https://twitter.com/?lang=en'
						target='_blank'
						rel='noreferrer'>
						<AiFillTwitterCircle className='icons' />
					</a>
					<MdEmail className='icons' />
				</div>
			</footer>
		);
    }
    
    export default Footer;