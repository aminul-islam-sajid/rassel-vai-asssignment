import { lazy } from 'react';

const Home = lazy(() => import('../Pages/Home'));

const publicRouter = [
    { path: '/', Component: Home },
]

export default publicRouter;