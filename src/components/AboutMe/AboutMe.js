import React from 'react';
import './AboutMe.css'

function AboutMe(props) {
    return (
        <div className='about-me'>
            <h2>About Me</h2>
            <h4>Software Engineer</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, saepe qui fugit quos est explicabo facilis recusandae obcaecati illo eum. Sit, maxime laudantium explicabo, soluta placeat fuga dolorum cupiditate veniam laboriosam, itaque esse numquam. Est hic aliquam nisi perspiciatis officiis error nulla autem, maiores omnis magnam, alias dolore laudantium. Vel.</p>
            <h4>Skills</h4>
            <p>Javascript | React | Python | HTML | CSS | Bootstrap | MongoDB | Mongoose | Express | Git | Github | CLI</p>
            {/* <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>HTML/CSS</li>
                <li>Python</li>
                <li>MongoDB/Mongoose</li>
                <li>Express</li>
                <li>Git/Github</li>
                <li>CLI</li>
                <li>Bootstrap</li>
            </ul> */}
            <h4>Hobbies</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptate doloremque sequi autem nostrum repellat temporibus placeat blanditiis quidem exercitationem, hic mollitia illum reprehenderit, praesentium accusantium repellendus quis repudiandae? Eligendi a quod nihil praesentium.</p>
        </div>
    );
}

export default AboutMe;