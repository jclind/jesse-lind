import { useState, useEffect, createContext } from 'react'

import 'normalize.css'
import '../styles/globals.scss'
import '../styles/components/navbar.scss'
import '../styles/home/home.scss'
import '../styles/about/about.scss'
import '../styles/projects/projects.scss'
import '../styles/components/project-item.scss'
import '../styles/contact/contact.scss'
import '../styles/util/animations.scss'
import '../styles/404/404.scss'
import '../styles/components/footer/footer.scss'
import '../styles/components/blog-post.scss'
import '../styles/thoughts/thoughts.scss'

import Layout from '../components/Layout'
import Loading from '../components/Loading'

import { AnimatePresence, motion } from 'framer-motion'

import { LoadingContext } from '../contexts/LoadingContext'

function MyApp({ Component, pageProps, router }) {
  // Always loading if refresh on page other than home page
  const [loading, setLoading] = useState(true)
  const [navLoading, setNavLoading] = useState(true)
  const [logoLoading, setLogoLoading] = useState(true)

  useEffect(() => {
    const currRouteName = router.pathname
    if (currRouteName !== '/' || (!navLoading && !logoLoading)) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [navLoading, logoLoading, router.pathname])

  return (
    <div className={loading ? 'app loading' : 'app'}>
      <LoadingContext.Provider
        value={{
          setNavLoading,
          setLogoLoading,
          loading,
        }}
      >
        <Layout>
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial='pageInitial'
              animate='pageAnimate'
              exit='pageExit'
              variants={{
                pageInitial: {
                  height: '100%',
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
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </LoadingContext.Provider>
      <Loading />
    </div>
  )
}

export default MyApp
