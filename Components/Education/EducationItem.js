import React from 'react'

const EducationItem = ({degree}) => {
    return (
        <div className='px-12 md:border-dashed md:border-r-2 text-center' >
            <h3 className='text-lg uppercase font-bold mb-2 text-rose'>{degree.degree}</h3>
            <p className='text-lg md:text-2xl uppercase mb-2'>{degree.title}</p>
            <span className='text-lg font-bold'>{degree.institution}</span>
        </div>
    )
}

export default EducationItem