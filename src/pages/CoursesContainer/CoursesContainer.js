import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesContainerLeft from '../../shared/CoursesContainerLeft/CoursesContainerLeft';
import CoursesContainerRight from '../../shared/CoursesContainerRight/CoursesContainerRight';

const CoursesContainer = () => {

    const courseNames = useLoaderData()


    const [courseDetails, setCourseDetails] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/courseItmes/`)
            .then(res => res.json())
            .then(data => setCourseDetails(data))
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <div className='w-4/5 mx-auto'>
            <h3 className='text-5xl text-center'>Courses</h3>
            <div className='flex justify-between'>
                <div className='w-3/4 grid md:grid-cols-2'>
                    {
                        courseDetails.map(details => <CoursesContainerLeft
                            key={details.id}
                            details={details}
                        ></CoursesContainerLeft>)
                    }
                </div>
                <div>
                    {
                        courseNames.map(cName => <CoursesContainerRight
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