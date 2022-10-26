import React, { useRef } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import {useReactToPrint} from 'react-to-print'
import {toast} from 'react-hot-toast'

const CourseDetails = () => {

    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: ()=> componentsRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: ()=> toast.success('GOOD JOB')
    });


    const detailsCourse = useLoaderData();
    // console.log(detailsCourse)
    const { totalVideo, name, totalAssignment, rating, image, description, id } = detailsCourse;
    // console.log(id)

    return (
        <>
            <div className='my-12' ref={componentsRef} style={{ width: '100%', height: window.innerHeight }}>
                <div className="rounded-md shadow-md sm:w-96 md:w-1/2 md:mx-auto dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center space-x-2">
                            <h3 className='text-3xl'><span><strong className='mr-2'>Subject:</strong></span>{name}</h3>
                        </div>
                        <button onClick={handlePrint} title="Download card all info" type="button" className='btn btn-primary'>
                            DOWNLOAD 
                        </button>
                    </div>
                    <img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <p><strong className='mr-3'>total Assignment:</strong>{totalAssignment}</p>
                                <span className='text-[#570DF8] font-bold'>||</span>
                                <p><strong className='mr-3'>total Videos:</strong>{totalVideo}</p>
                            </div>
                            <button type="button" title="Bookmark post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-[#570DF8]">
                                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-wrap items-center pt-3 pb-1">
                            <div className="flex items-center space-x-2">
                                <p>{description}</p>
                            </div>
                        </div>
                        <button className=' bg-violet-600 px-5 py-2 my-2 rounded-lg'><Link to={`/premiumAccess/${id}`} className='text-2xl text-white'>GET PREMIUM ACCESS</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;