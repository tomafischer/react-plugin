
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux';
import MovieSongPage from './components/class-redux/movie-song-page';

import SiteHeader from '@/components/navbar/site-header';
import { routes } from './models/routes';
import HomePage from './components/home-page';
import { ThemeProvider } from 'next-themes';
import ModelTestingPage from '@/components/model-testing/model-testing-page';
import ModelTestingConfigPage from './components/model-testing/model-testing-conf-page';

function App() {

  const currentRoute = useSelector((state: any) => state.nav);

  return (
    <>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SiteHeader />
      {currentRoute === routes.home && <HomePage />}
      {currentRoute === routes.testredux && <MovieSongPage />}
      {currentRoute === routes.modeltesting && <ModelTestingPage/>}
      {currentRoute === routes.modeltestingconf && <ModelTestingConfigPage/>}
      </ThemeProvider>
    </>
  )
}

export default App
