import Body from './Component/Body';
import About from './Component/About';
import Header from './Component/Header';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Contact from './Component/Contact';
import Login from './Component/Login';
import FoodPage from './Component/FoodPage';
import Cart from './Component/Cart';


export function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },

      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/restaurants/:resId",
        element: <FoodPage />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);


