import React from 'react';
import Image from 'react-bootstrap/Image';
import './AboutMe.css';
import womanCoding from '../../assets/modern-young-woman-sitting-on-260nw-1928965898.jpeg';

function AboutMe() {
    return (
			<div className='component about'>
				<h2>About Me</h2>
				<h4>Software Engineer</h4>
				<Image src={womanCoding} />
				<p>
				Hi there 👋🏾, I'm Keisha, a Software Engineer, with a background in healthcare,  based out of New Orleans, LA.
				I've recently completed an intense Software Engineering Immersive with General Assembly, and am ready to put my new skills to work! 
				I'm a critical thinker with a passion for developing creative, easy to understand, solutions to complex problems. When I'm not coding, I enjoy travel, yoga, epic-adventure games,  and curling up with a good book. Want to hear more, reach out! I'd love to connect.
				</p>
				<h4>Skills</h4>
				<p>
					Javascript | React | Python | HTML | CSS | Bootstrap | MongoDB |
					Mongoose | Express | Git | Github | CLI | Django | PostgreSQL
				</p>
			</div>
		);
}

export default AboutMe;