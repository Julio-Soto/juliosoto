import React from 'react'
import '../../styles/contact.scss'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'

function Contact() {
    return (
        <div className='page-content'>
            
                <p className='contact-title'>I am currently looking for new job opportunities.</p>
                <a href='mailto:juliosotodev@gmail.com' className='email-link'>juliosotodev@gmail.com</a>
                <div className='social-icons'>
                    <a href='https://github.com/Julio-Soto'><FaGithub size={40} className='contact-icon'/> </a>
                    <a href='https://twitter.com/JulioSotodev'><FaTwitter size={40} className='contact-icon'/></a>
                    <a href='https://www.instagram.com/juliosotodev/'><FaInstagram size={40} className='contact-icon'/></a>
                    <a href='https://codepen.io/juliosoto'><FaCodepen size={40} className='contact-icon'/></a>
                </div>
        </div>
    );
}

export default Contact