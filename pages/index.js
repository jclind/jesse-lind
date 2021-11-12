import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import JLMainLogo from '../components/images/JLMainLogo'
// import BackgroundIcons from '../components/images/BackgroundIcons'
import BackgroundIcons from '../components/BackgroundIcons'

const index = () => {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Head>
            <div className='page home-page'>
                <div className='container'>
                    <div className='content'>
                        <h1 className='fadeinup ad-0-6'>Hi, I&apos;m Jesse</h1>
                        <p className='fadeinup ad-0-8'>
                            I create <span className='highlight'>clean</span>{' '}
                            and <span className='highlight'>functional</span>{' '}
                            websites you can count on.
                        </p>
                        <Link href='/projects'>
                            <button className='action-btn fadeinup ad-1-2'>
                                My Projects
                            </button>
                        </Link>
                    </div>
                    <div className='logo'>
                        <JLMainLogo />
                    </div>
                    <BackgroundIcons />
                </div>
            </div>
        </>
    )
}

export default index
