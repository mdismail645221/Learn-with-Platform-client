import React from 'react';
import { Link } from 'react-router-dom';

const CoursesContainerRight = ({cName}) => {
    return (
        <div className='course-rightSide-Container'>
            <h2 className=''><Link to={`/courseDeatails/${cName.id}`} className="text-violet-500 font-bold hover:text-violet-900  mb-5">{cName.name}</Link></h2>
        </div>
    );
};

export default CoursesContainerRight;