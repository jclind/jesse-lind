import 'normalize.css'
import '../styles/globals.css'
import '../styles/components/navbar.css'
import '../styles/home.css'
import '../styles/about.css'
import '../styles/projects.css'
import '../styles/components/project-item.css'
import '../styles/contact.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
