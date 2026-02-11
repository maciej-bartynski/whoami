import { useMemo, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Banner/Banner'
import Storyline from './Storyline/Storyline'
import { AppContext } from './AppContext'
import Ornament from './Ornament/Ornament'

function App() {
  const [lang, setLang] = useState<'PL' | 'ENG'>('PL');

  const ctx = useMemo(() => {
    return {
      lang,
      setLang
    }
  }, [lang])

  return (
    <AppContext.Provider value={ctx}>
      <Banner />
      <Ornament />
      <Storyline />
    </AppContext.Provider>
  )
}

export default App
