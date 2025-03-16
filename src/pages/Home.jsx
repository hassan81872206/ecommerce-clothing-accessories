import { About, Gallery, Landing, Services } from '../components'

function Home() {
  return (
    <div className='mt-[80px]'>
      <Landing/>
      <About />
      <Services />
      <Gallery/>
    </div>
  )
}

export default Home