import { ReactNode, StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import NotFound from './Pages/NotFound'


type TRoute = {
  path: string,
  element: ReactNode;
}
const HomePageLazy = lazy(()=>import('./Pages/HomePage'));
const routes : TRoute[] = [
  {
    path: "/",
    element: <HomePageLazy/>  
  },
  {
    path: "*",
    element: <NotFound/>
  }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback={<>loader...</>}>
      <Navigation/>
        <main className='grid'>
        
          <Routes>
              {
                routes.map((item, index)=><Route path={item.path} element={item.element} key={`route-${index}`}/>)
              }
          </Routes>
      
        </main>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
