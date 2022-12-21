import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesContainerLeft from '../../shared/CoursesContainerLeft/CoursesContainerLeft';
import CoursesContainerRight from '../../shared/CoursesContainerRight/CoursesContainerRight';

const CoursesContainer = () => {

    const [loading, setLoading] = useState(false)
    const courseNames = useLoaderData()


    const [courseDetails, setCourseDetails] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch(`https://b610-lerning-platform-server-side-mdismail645221.vercel.app/courseItmes`)
            .then(res => res.json())
            .then(data => {
                setCourseDetails(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])



    if(loading){
        return <>
            <div class="flex justify-center items-center h-screen">
                <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
                </div>
            </div>
        </>
    }


    return (
        <div className='w-4/5 mx-auto' style={{paddingTop: "150px", paddingBottom: "50px"}}>
            <h3 className='text-2xl md:text-5xl text-center pb-20 pt-10'>WELLCOME, Our Free Content Courses</h3>
            <div className='md:flex justify-between'>
                <div className='w-full mx-auto md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        courseDetails.map(details => <CoursesContainerLeft
                            key={details.id}
                            details={details}
                        ></CoursesContainerLeft>)
                    }
                </div>
                <div className='hidden md:block'>
                    {
                        courseDetails.map(cName => <CoursesContainerRight
                            key={cName.id}
                            cName={cName}
                        ></CoursesContainerRight>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CoursesContainer;