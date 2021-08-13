import React from 'react'

import RepoItem from './RepoItem'
import UserStats from './UserStats'

const Repos = ({repos, user}) => {
    return (
        <div className='mt-8 md:mt-12'>
            <h3 className='uppercase text-center text-3xl md:text-4xl font-bold text-rose'>Tech Contributions</h3>
            <UserStats user={user} />
            <div className="md:grid md:grid-cols-3 md:gap-2">
            {repos.map(rep => {
                return (
                    <RepoItem key={rep.id} rep={rep} />
                )
            })}
            </div>
        </div>
    )
}

export default Repos