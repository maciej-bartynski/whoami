import { useMemo, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Storyline from './Storyline/Storyline'
import { AppContext } from './AppContext'
import Ornament from './Ornament/Ornament'
import BannerLandscape from './BannerRwd/BannerLandscape'
import BannerPortrait from './BannerRwd/BannerPortrait';
import langIcon from "/language-icon.svg";
import CVSection from "./CVSection";

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
      <BannerLandscape />
      <BannerPortrait />
      <Ornament />
      <CVSection />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <Storyline />
      <button
        onClick={() => setLang(lang === 'PL' ? 'ENG' : 'PL')}
        className="lang-button"
      >
        <img src={langIcon} />{lang === 'PL' ? 'ENG' : 'PL'}
      </button>
    </AppContext.Provider>
  )
}

export default App
