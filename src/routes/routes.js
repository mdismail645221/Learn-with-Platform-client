const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home");



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                
            }
        ]
    }
])