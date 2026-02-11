import { createContext, useContext } from "react";

const appContext = {
    lang: 'PL' as 'PL' | 'ENG',
    setLang: (() => { }) as ((param: 'PL' | 'ENG') => void),
}

type AppContextType = typeof appContext;

const AppContext = createContext(appContext);

const useAppContext = () => useContext<AppContextType>(AppContext);

export {
    useAppContext,
    AppContext
}
