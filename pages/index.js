import React from 'react'
import PageHead from '../Components/PageHead'
import Hero from '../Components/Hero'
import Summary from '../Components/Summary'
import Education from '../Components/Education'
import Footer from '../Components/Footer'
import Repos from '../Components/Repos'

const Index = ({repos, user}) => {
    return (
        <div className='container mx-auto bg-network'>
            <PageHead />
            <Hero />
            <Summary />
            <Education />
            <Repos repos={repos} user={user}/>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    
    const req = await fetch(process.env.API_URL + '/api/getUser')
    const {repos, user} = await req.json()

    return {
        props: {
            repos,
            user
        }
    }
}

export default Index