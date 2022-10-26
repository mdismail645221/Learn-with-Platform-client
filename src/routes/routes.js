import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Main from '../layout/Main'
import Home from '../pages/Home/Home'
import { createBrowserRouter } from "react-router-dom";
import CoursesContainer from "../pages/CoursesContainer/CoursesContainer";
import CourseDetails from "../shared/CourseDetails/CourseDetails";
import Blogs from "../pages/Blogs/Blogs";
import FAQ from "../pages/FAQ/FAQ";



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
                loader:  ()=> fetch(`https://b610-lerning-platform-server-side-mdismail645221.vercel.app/category`)
            }, 
            {
                path: '/courseDeatails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`https://b610-lerning-platform-server-side-mdismail645221.vercel.app/category/${params.id}`)
            }, 
            {
                path: 'blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
          
        ]
    },

    
])