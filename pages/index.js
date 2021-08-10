import React, { Fragment } from 'react'
import getUser from '../utils/getUser'
import {GrLinkedin, GrGithub, GrYoutube, GrInstagram} from 'react-icons/gr'
import {GoRepo, GoStar, GoGist} from 'react-icons/go'

const Index = ({repos, user}) => {
    return (
        <div className='container mx-auto bg-network'>
            <div className='grid grid-cols-2 pt-16 leading-none'>
                <div className='pt-32'>
                    <h1 className='text-4xl uppercase pl-16'>Igor Martins</h1>
                    <h2 className='font-bold text-5xl uppercase pl-16'>Fullstack Developer</h2>
                    <div className='border rounded-lg border-rose px-16 pb-4 mt-6'>
                        <h3 className='text-2xl text-white bg-rose bold uppercase -mt-5 table px-6 py-1'>Contact me</h3>
                        <p className='text-6xl inline-block mt-4'>
                            <GrLinkedin className='inline-block mr-4'/>
                            <GrGithub className='inline-block mr-4'/>
                            <GrInstagram className='inline-block mr-4'/>
                            <GrYoutube className='inline-block mr-4'/>
                        </p>
                        <p className='mt-4'>or drop a line: igormpmartins@gmail.com</p>
                    </div>
                    
                </div>
                <div><img className='mt-16' src="/images/buzz-sem fundo.png" /></div>
            </div>
            
            <div className='bg-white rounded-lg shadow-lg py-12 px-16'>
                <h3 className='uppercase text-center text-4xl mb-4 text-rose font-bold'>What I do</h3>
                <p className='text-2xl'>Software Developer for more than 20 years, having a vast experience in ERP development, using different technologies. 
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
            </div>

            <div className='mt-12'>
                <h3 className='uppercase text-center text-4xl font-bold text-rose'>My Education</h3>
                <div className='grid grid-cols-2 bg-white rounded-lg shadow-lg py-6 mt-5'>
                    {[1,2].map( i=> {
                        return (
                        <div className='px-12 border-dashed border-r-2'>
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
                <p className='px-10 pt-4 font-bold text-center'>
                    GitHub Stats: 
                    <GoRepo className='inline-block ml-2'/>{user.public_repos} / 
                    <GoGist className='inline-block ml-2'/>{user.public_gists}
                </p>
                <div className="grid grid-cols-3 gap-2">
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