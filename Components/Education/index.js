import React from 'react'
import EducationItem from './EducationItem'

const degrees =  [
    {
        degree: 'Bachelor\'s Degree',
        title: 'Information Systems',
        institution: 'Unisinos (Brazil - RS)'
    }
]

const Education = () => {
    return (
        <div className='mt-8 md:mt-12 mx-2 md:mx-0'>
            <h3 className='uppercase text-center text-3xl md:text-4xl font-bold text-rose'>My Education</h3>
            <div className='grid grid-cols-0 bg-white rounded-lg shadow-lg py-6 mt-5'>
                {degrees.map( (degree, i) => {
                    return (
                        <EducationItem key={'i' + i} degree={degree} />
                    )
                })}
            </div>
        </div>   
    )
}

export default Education