import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyled } from './styled'
import { Provider } from 'react-redux'
import { store } from 'store'
import Home from './views/home'
import Mission from './views/mission'

const Layout = lazy(() => import("views/layout"))
const Mint = lazy(() => import("views/mint"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyled></GlobalStyled>
      <Router >
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/vision" element={<Mission />}></Route>
            <Route path='' element={<Layout />}>
              <Route path='/mint' element={<Mint />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>
);

