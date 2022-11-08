import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if(router.asPath =='/dashboard' ||
  router.asPath =='/dashboard2'
  ){
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
  return (<>
    <Component {...pageProps} />
  </>)
  
}

export default MyApp
