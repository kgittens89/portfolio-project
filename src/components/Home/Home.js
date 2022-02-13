import React from 'react';
import 'animate.css';
import { Random } from 'react-animated-text';

function Home(props) {
    return (
			<div className='home component'>
				<h1 className='animate__animated animate__rubberBand'>
					Keisha M. Gittens
				</h1>
				<Random
					className='head'
					text='Software Engineer'
					iterations='1'
					effect='verticalFadeIn'
					effectChange={2}
					effectDirection='down'
				/>
				{/* <h4>Software Engineer</h4> */}
			</div>
		);
}

export default Home;