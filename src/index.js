import { RouterProvider } from "react-router-dom"
import router from "./router"
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router} />)
