import React from 'react'
import {GoRepo, GoGist} from 'react-icons/go'

const UserStats = ({user}) => {
    return (
        <p className='px-10 pt-4 font-bold text-center mb-4'>
            GitHub Stats: 
            <GoRepo className='inline-block ml-2'/>{user.public_repos} / 
            <GoGist className='inline-block ml-2'/>{user.public_gists}
        </p>
    )
}

export default UserStats