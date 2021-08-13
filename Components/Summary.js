import React from 'react'
import {DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejsSmall} from 'react-icons/di'
import {SiNextDotJs, SiTailwindcss, SiCsharp} from 'react-icons/si'

const Summary = () => {
    return (
        <div className='bg-white rounded-lg shadow-lg py-4 md:py-12 px-3 md:px-16 mx-2 md:mx-0'>
                <h3 className='uppercase text-center text-3xl md:text-4xl mb-4 text-rose font-bold'>Who am I?</h3>
                <p className='md:text-2xl'>Software Developer for more than 20 years, having a vast experience in ERP development, using different technologies. 
                Graduated in Information Systems, I'm able to fit both as software analyst and developer. 
                Also, I'm experienced in providing third level support.
                </p>
                <div className='m-2'>
                    <p className='font-bold'>Current Activities:</p>
                    <ul className='list-disc p-2 mx-2'>
                        <li className='hover:underline'>Freelance Full-Stack developer, currently working with HTML5, CSS, React.JS, Node.JS</li>
                        <li className='hover:underline'>CRM development using ASP.NET</li>
                        <li className='hover:underline'>Microsoft SQL Server Maintenance</li>
                        <li className='hover:underline'>ERP development using Delphi</li>
                    </ul>
                </div>
                <div className='m-2'>
                    <p className='font-bold'>Interests:</p>
                    <p className='text-2xl md:text-6xl inline-block mt-4 ml-2 md:ml-0'>
                            <DiHtml5 className='inline-block mr-3' title='HTML5'/>
                            <DiCss3 className='inline-block mr-3' title='CSS'/>
                            <DiJavascript className='inline-block mr-3' title='JavaScript'/>
                            <DiReact className='inline-block mr-3' title='ReactJS'/>
                            <SiNextDotJs className='inline-block mr-3' title='NEXT.js'/>
                            <DiNodejsSmall className='inline-block mr-3' title='Node.js'/>
                            <SiTailwindcss className='inline-block mr-3' title='Tailwind CSS'/>
                            <SiCsharp className='inline-block mr-3' title='C#'/>
                        </p>
                </div>
            </div>

    )
}

export default Summary