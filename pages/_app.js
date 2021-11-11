import 'normalize.css'
import '../styles/globals.css'
import '../styles/components/navbar.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/projects.css'
import '../styles/components/project-item.css'
import '../styles/contact.css'
import '../styles/components/animations.css'
import Layout from '../components/Layout'

import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
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
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
