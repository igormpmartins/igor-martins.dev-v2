import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
    /* Outra forma, é comentar esse Fragment e colocar no globals.css */
    return (
        <React.Fragment>
            <style jsx global>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');
            `}
            </style>
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default MyApp