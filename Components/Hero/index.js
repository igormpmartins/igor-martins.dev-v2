import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
    return (
        <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
                <div className='pt-8 md:pt-32'>
                    <h1 className='text-2xl md:text-4xl uppercase pl-16'>Igor Martins</h1>
                    <h2 className='font-bold text-2xl md:text-5xl uppercase pl-16'>Fullstack Developer</h2>
                    <ContactMe />
                </div>
                <div><img className='pl-6 mt-4 md:mt-16' src="/images/buzz-sem fundo.png" /></div>
            </div>
    )
}

export default Hero