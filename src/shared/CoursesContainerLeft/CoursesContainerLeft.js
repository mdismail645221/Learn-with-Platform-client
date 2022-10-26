import React from 'react';
import { Link } from 'react-router-dom';

const CoursesContainerLeft = ({ details }) => {
    const {name, id, description, image, totalAssignment, totalVideo } = details;
    console.log(id)
    // console.log(details)
    return (
        <div className="rounded-md shadow-lg dark:bg-gray-900 dark:text-gray-100 mb-5 border border-spacing-1 border-violet-300 shadow-xl">
            <img src={details.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{details.name}</h2>
                    <p className="dark:text-gray-100">{description.length > 150 ? description.slice(0, 150) + '.......' : description }</p>
                </div>
                <Link to={`/courseDeatails/${id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#570DF8] text-white"><button type="button">Read more</button></Link>
            </div>
        </div>
    );
};

export default CoursesContainerLeft;