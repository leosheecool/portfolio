import { NavBar } from 'components';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/Home/Home'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div id={'smooth-wrapper'}>
        <div id={'smooth-content'}>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
