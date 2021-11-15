import { useState, useEffect, useRef } from 'react'

import 'normalize.css'
import '../styles/globals.css'
import '../styles/components/navbar.css'
import '../styles/home/home.css'
import '../styles/about/about.css'
import '../styles/projects/projects.css'
import '../styles/components/project-item.css'
import '../styles/contact/contact.css'
import '../styles/util/animations.css'
import '../styles/404/404.css'
import '../styles/loading-page.css'

import JLMainLogo from '../components/images/JLMainLogo'
import Layout from '../components/Layout'

import { AnimatePresence, motion } from 'framer-motion'
import BarLoader from 'react-spinners/BarLoader'

function MyApp({ Component, pageProps, router }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const handleStart = () => {
            setLoading(true)
        }
        const handleComplete = () => {
            setTimeout(() => {
                setLoading(false)
            }, 1500)
        }
        router.events.on('hashChangeStart', () => {
            handleStart()
        })
        router.events.on('hashChangeComplete', () => {
            handleComplete()
        })
    }, [router])

    return (
        <>
            <Layout>
                <AnimatePresence>
                    <motion.div
                        key={router.route}
                        initial='pageInitial'
                        animate='pageAnimate'
                        exit='pageExit'
                        variants={{
                            pageInitial: {
                                opacity: 0,
                            },
                            pageAnimate: {
                                opacity: 1,
                            },
                            pageExit: {
                                opacity: 0,
                            },
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {!loading ? (
                            <Component
                                {...pageProps}
                                jlMainLogo={<JLMainLogo />}
                            />
                        ) : (
                            <div className='loader'>
                                <BarLoader color={'#ff7c7c'} size={20} />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    )
}

export default MyApp
