import { ReactNode, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import NotFound from './Pages/NotFound'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer/Footer'


type TRoute = {
  path: string,
  element: ReactNode;
}
// const HomePageLazy = lazy(()=>import('./Pages/HomePage'));
const routes : TRoute[] = [
  {
    path: "/",
    element: <HomePage/>  
  },
  {
    path: "*",
    element: <NotFound/>
  }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* <Suspense fallback={<>loader...</>}> */}
      <Navigation/>
        <main className='grid'>
        
          <Routes>
              {
                routes.map((item, index)=><Route path={item.path} element={item.element} key={`route-${index}`}/>)
              }
          </Routes>
      
        </main>
    {/* </Suspense> */}
    <Footer/>
    </BrowserRouter>
  </StrictMode>
)
