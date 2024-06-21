import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Transactions from './pages/transaction/Transactions';
import Support from './pages/support/Support';
import ErrorBoundry from './components/ErrorBoundry';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <ErrorPage />, // Error page for the root path
    },
    {
      path: "/transactions",
      element: <Transactions />,
      errorElement: <ErrorPage />, // Error page for the root path
    },
    {
      path: "/support",
      element: <Support />,
      errorElement: <ErrorPage />, // Error page for the root path
    },
  ]);

function App() {
  return (
    <>
    <ErrorBoundry>
      <RouterProvider router={router} />
    </ErrorBoundry>
    </>
  );
}

export default App;
