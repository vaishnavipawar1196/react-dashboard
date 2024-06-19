import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
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
  ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
