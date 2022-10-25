import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import { createBrowserRouter } from "react-router-dom";
import CoursesContainer from "../pages/CoursesContainer/CoursesContainer";
import CourseDetails from "../shared/CourseDetails/CourseDetails";



export const router = createBrowserRouter([
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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'course',
                element: <CoursesContainer></CoursesContainer>,
                loader:  ()=> fetch(`http://localhost:5000/category`)
            }, 
            {
                path: '/courseDeatails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }

          
        ]
    },

    
])