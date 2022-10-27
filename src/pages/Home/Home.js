import React from 'react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';

const Home = () => {

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100" style={{padding: "80px 0px"}}>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none text-gray-700 sm:text-6xl">Wellcome! 
                        <span className="dark:text-violet-400"></span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 ">নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক । এখানে প্রতিদিন প্রায় আড়াই লাখ শিক্ষার্থীদের বিনামূল্যে শিক্ষা প্রদান করা হয়। ১৫ লাখ উজ্জ্বল মনের শিক্ষার্থীর সাথে তুমিও জয়েন করো Learn With Platfrom এ ।</p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link className="btn btn-primary text-white bg-blend-darken px-8" to="/course">Courses</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/MnrJGnK/math.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Home;