import React from 'react'
import '../../styles/about.scss'
import me from '../../images/me.jpg'

function About() {
    return (
        <div className='about-page-content'>
                <p className='about-title'>A little about me.</p>
                <p className='about-page-text'> Hi, it's Julio Soto. I am a software engineer, single parent, and video game enthusiast.
                     First of all thanks for taking the time to read about me. Welcome to my site I'm glad That you are here.</p>
                <p className='about-page-text'>Years ago I became interested in computer programming so I taught myself some basic C++ and Python.
                 I also had the desire to have a formal education so I decided to enroll in college. Being an old guy in college wasn't easy,
                  but eventually I earned a Bachelor's Degree in Computer Science from the University of Colorado Denver.
                   In recent months I've been teaching myself the art of Web Development. Some of the technologies I work with are HTML/CSS Javascript and ReactJS.</p> 
                <img className='about-pic' src={me} alt='myPic' />
                <p className='about-page-text'>The most important thing in my life is my son Roberto and of course my three tiny pooches.
                    Before I had a child I was a young man and I enjoyed traveling the world and hiking the Colorado Mountains. 
                    That was a long time ago. For more than a decade I've lived the life of a single parent so I spend most of my time at home. 
                    I enjoy cooking meals with my son and we like to spend time in the living room watching some cool tv shows.</p>       
                <div className='spacer'></div>    
        </div>
    );
}

export default About