import { NavBar } from 'components';
import { useToast } from 'hooks/useToast';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import cn from 'classnames';
import utilsStyles from 'styles/utils.module.scss';

const HomePage = lazy(() => import('pages/Home/Home'));
const GTCPage = lazy(() => import('pages/GTC/GTC'));

const AppRoutes = () => {
  const toast = useToast();

  return (
    <BrowserRouter>
      <NavBar />
      <p
        className={cn(utilsStyles.toast, {
          [utilsStyles.toastDisplayed]: toast?.isDisplayed,
        })}
      >
        {toast?.text}
      </p>
      <div id={'smooth-wrapper'}>
        <div id={'smooth-content'}>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/GTC/" element={<GTCPage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
