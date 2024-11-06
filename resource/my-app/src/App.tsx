import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MovieSongPage from './components/class-redux/movie-song-page';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center mt-16'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-4xl'>Vite + React</h1>
      <div className="card">
        <button className='bg-slate-400 px-3' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MovieSongPage/>
    </>
  )
}

export default App
