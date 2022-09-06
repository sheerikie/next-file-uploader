import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> React File Upload
    </h4><Component {...pageProps} /> </div>
}
export default MyApp
