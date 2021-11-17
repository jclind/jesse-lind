import { useState, useEffect } from 'react'

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

import Layout from '../components/Layout'
import Loading from '../components/Loading'

import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('first load of website')
  }, [])

  return (
    <div className={loading ? 'app loading' : 'app'}>
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
      <Loading />
    </div>
  )
}

export default MyApp
