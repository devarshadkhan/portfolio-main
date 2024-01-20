import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout, ErrorPage } from './pages';
import { routes } from './utils/constants';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: routes.map(route => ({ path: route.path, element: route.element })),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

