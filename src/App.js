import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";
import Transactions from './pages/transaction/Transactions';
import Support from './pages/support/Support';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transactions",
      element: <Transactions />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: '*',
      element: <Navigate to="/" />
    },
  ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
