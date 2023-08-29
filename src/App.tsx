/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import AppRoutes from 'AppRoutes';

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          smoothWheel: true,
        },
      });
      locomotiveScroll.start();
    })();
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
