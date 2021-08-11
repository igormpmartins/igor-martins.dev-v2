import React from 'react'

import getUser from '../utils/getUser'

import {GoRepo, GoStar, GoGist} from 'react-icons/go'
import {DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejsSmall} from 'react-icons/di'
import {SiNextDotJs, SiTailwindcss, SiCsharp} from 'react-icons/si'

import PageHead from '../Components/PageHead'
import Hero from '../Components/Hero'

const Index = ({repos, user}) => {
    return (
        <div className='container mx-auto md:bg-network'>
            <PageHead />
            <Hero />
            
            <div className='bg-white rounded-lg shadow-lg py-12 px-3 md:px-16'>
                <h3 className='uppercase text-center text-4xl mb-4 text-rose font-bold'>Who am I?</h3>
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
                    <p className='text-2xl md:text-6xl inline-block mt-4'>
                            <DiHtml5 className='inline-block mr-4' title='HTML5'/>
                            <DiCss3 className='inline-block mr-4' title='CSS'/>
                            <DiJavascript className='inline-block mr-4' title='JavaScript'/>
                            <DiReact className='inline-block mr-4' title='ReactJS'/>
                            <SiNextDotJs className='inline-block mr-4' title='NEXT.js'/>
                            <DiNodejsSmall className='inline-block mr-4' title='Node.js'/>
                            <SiTailwindcss className='inline-block mr-4' title='Tailwind CSS'/>
                            <SiCsharp className='inline-block mr-4' title='C#'/>
                        </p>
                </div>
            </div>

            <div className='mt-12'>
                <h3 className='uppercase text-center text-4xl font-bold text-rose'>My Education</h3>
                <div className='grid grid-cols-0 bg-white rounded-lg shadow-lg py-6 mt-5'>
                    {[1].map( i=> {
                        return (
                        <div className='px-12 md:border-dashed md:border-r-2 text-center' key={i}>
                            <h3 className='text-lg uppercase font-bold mb-2 text-rose'>Graduation Degree</h3>
                            <p className='text-2xl uppercase mb-2'>Information System's</p>
                            <span className='text-lg font-bold'>Unisinos</span>
                        </div>
                        )
                    })}
                </div>
            </div>            

            <div className='mt-12'>
                <h3 className='uppercase text-center text-4xl font-bold text-rose'>Tech Contributions</h3>
                <p className='px-10 pt-4 font-bold text-center mb-4'>
                    GitHub Stats: 
                    <GoRepo className='inline-block ml-2'/>{user.public_repos} / 
                    <GoGist className='inline-block ml-2'/>{user.public_gists}
                </p>
                <div className="md:grid md:grid-cols-3 md:gap-2">
                {repos.map(rep => {
                    return (
                        <div key={rep.id} className='flex-1 rounded bg-white mx-2 my-2 p-2 hover:shadow-md '>
                            <a href={rep.html_url}>
                                <h3 className='font-bold hover:underline inline-block'>{rep.full_name} / </h3>
                                
                            </a>
                            <p className='inline-block ml-2'> <GoStar className='inline-block'/> {rep.stargazers_count}</p>
                            <p>Language: {rep.language}</p>
                            <p>Description: {rep.description}</p><br/>
                        </div>
                    )
                })}
                </div>
            </div>

            <div className='my-8'>
                <p className='text-center border-t-2'>You can find the source-code of this website here:<br />
                    <a href='https://github.com/igormpmartins/igor-martins.dev-v2' className='font-bold'>https://github.com/igormpmartins/igor-martins.dev-v2</a>
                </p>
            </div>

        </div>
    )
}

export async function getServerSideProps(context) {
    
    const {repos, user} = await getUser('igormpmartins')

    return {
        props: {
            repos,
            user
        }
    }
}

export default Index