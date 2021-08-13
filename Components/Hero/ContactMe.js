import React from 'react'
import {GrLinkedin, GrGithub, GrYoutube, GrInstagram} from 'react-icons/gr'

const ContactMe = () => {
    return (
        <div className='border rounded-lg border-rose px-8 mx-8 md:mx-0 md:px-16 pb-4 mt-10 md:mt-6 text-center md:text-left'>
                        <h3 className='text-2xl text-white bg-rose bold uppercase -mt-5 table px-6 py-1'>Contact me</h3>
                        <p className='text-4xl md:text-6xl inline-block mt-4 text-center md:text-left'>
                            <GrLinkedin className='inline-block mr-4'/>
                            <GrGithub className='inline-block mr-4'/>
                            <GrInstagram className='inline-block mr-4'/>
                            <GrYoutube className='inline-block mr-4'/>
                        </p>
                        <p className='mt-4'>or drop a line: igormpmartins@gmail.com</p>
                    </div>
    )
}

export default ContactMe