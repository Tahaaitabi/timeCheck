import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from "./pages/Homepage.jsx"
import About from "./pages/About.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
function App() {

  const route = createBrowserRouter([
    { path: "/",
      element: <Homepage />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  return (
    <>
      <div className="p-2">
      <RouterProvider router={route} />
      </div>
      
    </>
  )
}

export default App
