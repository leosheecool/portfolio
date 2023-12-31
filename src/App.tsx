/* eslint-disable @typescript-eslint/no-unused-vars */
import AppRoutes from 'AppRoutes';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ToastProvider } from 'hooks/useToast';

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  return (
    <ToastProvider>
      <AppRoutes />
    </ToastProvider>
  );
};

export default App;
