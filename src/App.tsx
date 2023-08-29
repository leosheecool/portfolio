/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import AppRoutes from 'AppRoutes';

const App = () => {
	useEffect(() => {
		(async () => {
			const locomotiveScroll = (await import('locomotive-scroll')).default;
			const scroll = new locomotiveScroll();
		})();
	}, []);

	return <AppRoutes />;
};

export default App;
