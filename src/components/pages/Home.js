import React from 'react'
import '../../styles/home.scss'
import julio from '../../images/julio.jpg'
import { FaGithub } from 'react-icons/fa'
import { MdLaunch } from 'react-icons/md'

function Home() {
    return (
	<div> 	
      <div className='section'>
		    <div className='home1-container'>
		      <h3 className='highlighted-text'>Hello there, my name is</h3>
		      <h1 className='hero name'>Julio Soto.</h1>
		      <h2 className='hero does'>I code web apps in ReactJS.</h2>
		      <h3 className='highlighted-text'>Welcome</h3>
		      <p className='hero-text'>This is a digital space for my personal coding projects. Here you will learn a little about myself and my personal web development ReactJS based projects.</p>
		      <a href='mailto:juliosotodev@gmail.com' className='contact'>Contact Me</a>
	      </div>
	    </div>
		<div className='section two'>
			<div className='home1-container'>
				<div className='left-panel'>
					<h3 className='highlighted-text'>About Me</h3>
					<p className='hero-text'>I'm a software engineer based in Denver, CO specializing in web applications, HTML5 games, and things in between. I attended college at CU Denver where I obtained a BS in Computer Science. In recent months I've been learning the art of Web Development with a focus on ReactJS.</p>
				</div>
				<div className='right-panel'>
					<div className='img-wrap'>
						<img className='hero-pic' src={julio} alt='myPic' />
					</div>
				</div>
			</div>
		</div>
		<div className='section'>
		<h3 className='highlighted-text'>Featured Project</h3>
			<div className='home1-container'>
				<div className='project-box'>
					<h3 className='highlighted-text'>Github Me</h3>
					<p className='hero-text'>Enter your github name and see your profile in a whole new way. Shows your basic and follower data.</p>
					<div className='project-links'>
						<a href=''>< FaGithub size={30} className='icon' /></a> 
						<a href=''><MdLaunch size={30} className='icon'/></a>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }

  export default Home