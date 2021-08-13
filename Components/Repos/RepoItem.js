import React from 'react'
import {GoStar} from 'react-icons/go'

const RepoItem = ({rep}) => {
    return (
        <div key={rep.id} className='flex-1 rounded-lg bg-white mx-2 my-2 p-2 hover:shadow-md '>
            <a href={rep.html_url}>
                <h3 className='font-bold hover:underline inline-block'>{rep.full_name} / </h3>
            </a>
            <p className='inline-block ml-2'> <GoStar className='inline-block'/> {rep.stargazers_count}</p>
            <p>Language: {rep.language}</p>
            <p>Description: {rep.description}</p><br/>
        </div>
    )
}

export default RepoItem