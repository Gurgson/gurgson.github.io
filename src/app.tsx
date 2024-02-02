import  {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'

import Footer from './Components/Footer/Footer';
import { routes } from './data/routes';
import { LoadingScreenContext } from './context/LoadingScreenContext';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import { useScrollLock } from './hooks/useScrollLock';





const App = () => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const scrollLock = useScrollLock();
    useEffect(()=>{
        isLoading?scrollLock.lockScroll():scrollLock.unlockScroll();
    },[isLoading,scrollLock])
    return (
        <>
            <BrowserRouter>
            <Navigation/>
            <LoadingScreenContext.Provider value={{isLoading, setLoading}}>
                <LoadingScreen/>
                <main className='grid'>
                    <Routes>
                        {
                        routes.map((item, index)=><Route path={item.path} element={item.element} key={`route-${index}`}/>)
                        }
                    </Routes>
                </main>
            </LoadingScreenContext.Provider>
            <Footer/>
            </BrowserRouter>
    </>
  )
}

export default App