import React from 'react';
import { Link } from 'react-router-dom';

const CoursesContainerRight = ({cName}) => {
    console.log(cName)
    return (
        <div className=''>
            <h2><Link to={`/courseDeatails/${cName.id}`} className="text-black mb-5">{cName.name}</Link></h2>
        </div>
    );
};

export default CoursesContainerRight;