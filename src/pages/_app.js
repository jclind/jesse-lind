import { useState, useEffect, createContext } from 'react'

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
import '../styles/components/footer/footer.css'
import '../styles/components/blog-post.css'
import '../styles/thoughts/thoughts.css'

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
  }, [navLoading, logoLoading])

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
