import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Error from "./pages/Error";
import Offers from "./pages/Offers/Offers";
import { Suspense, lazy } from "react";
import App from "./App";
import Search from "./pages/search/Search";
const CartPage = lazy(()=>import("./pages/cart/Cart"))

export default router = createBrowserRouter([
    {
      path: "/",
      element:<App />,
      errorElement:<Error/>,
      children:[
        {
          path: "/",
          element:  <Home />,
        },
        {
          path: "/search",
          element:  <Search />,
        },
        {
          path: "/cart",
          element:  <Suspense fallback={<Error/>}><CartPage /></Suspense>,
        },
        {
          path:"offers",
          element:<Offers/>
        },{
          path:"/restaurants/*",
          element:<Restaurant/>
        }
      ]
    }
  ]);
