import styled from 'daisyui/dist/styled';
import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import Images from '../../assets/images/favicon.png';
import { AuthContext } from '../../contexts/AuthProvider';
import Tippy from '@tippy.js/react';
// import 'Tippy.js/dist/tippy-bundle.iife'
import './Header.css'


const Header = () => {

    const { user, lotOut, toggleTheme, theme } = useContext(AuthContext);
    // console.log(user)


    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='px-4 py-5  w-full md:px-24 lg:px-8 header-conater navbar-container' style={{ position: "fixed", top: "0", left: "0" }}>
            <div className='relative flex items-center justify-between'>
                <NavLink
                    to='/'
                    aria-label='Smart Home'
                    title='Smart Home'
                    className={`inline-flex items-center`}
                >
                    <img className='w-14 md:w-14 rounded-full' src={Images} alt="main-logo" />

                    <span className='ml-2 text-lg md:text-xl font-bold tracking-wide text-drak uppercase'>
                        Learn With Platfrom
                    </span>
                </NavLink>
                <ul className='flex items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/course'
                            aria-label='course'
                            title='course'
                            className={`font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-black-accent-400 ${({ isActive }) => isActive ? 'active' : undefined}`}
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/faq'
                            aria-label='faq'
                            title='faq'
                            className='font-medium tracking-wide text-white first:transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            aria-label='blog'
                            title='blog'
                            className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                            Blog
                        </NavLink>
                    </li>


                    {
                        user ?

                            <>
                                <button onClick={lotOut} className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-deep-purple-accent-400'>Log out</button>
                                <Tippy content={<p className='text-white bg-slate-600 px-8 py-2 mt-5'>{user.displayName}</p>}>
                                    <img src={user.photoURL} alt="userPhoto" className="cursor-pointer self-center flex-shrink-0 w-12 h-12 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                                </Tippy>
                            </>


                            :
                            <li>
                                <NavLink
                                    to='/login'
                                    aria-label='About Us'
                                    title='Login Section'
                                    className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-deep-drak-accent-400'
                                >
                                    Login
                                </NavLink>
                            </li>
                    }
                    <div>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>
                </ul>


                {/* functionality drop down toggle image -----> */}
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline  bg-purple-200 hover:bg-purple-50 focus:bg-black-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-red-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>

                    {/* Toggle dropdowm Navber Button------>  */}
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full header-container navbar-container'>
                            <div className='p-5  border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <NavLink
                                            to='/home'
                                            aria-label='Company'
                                            title='Company'
                                            className='inline-flex items-center'
                                        >
                                            <img className='w-20 rounded-full hidden md:block' src={Images} alt="main-logo" />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-white text-center w-full uppercase'>
                                                Learn With Platfrom
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink
                                                to='/course'
                                                aria-label='course'
                                                title='Course'
                                                className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-deep-drak-accent-400'
                                            >
                                                <p> Courses </p>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/faq'
                                                aria-label='faq'
                                                title='FAQ'
                                                className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-deep-drak-accent-400'
                                            >
                                                <p>FAQ</p>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/blog'
                                                aria-label='About Us'
                                                title='BLOG'
                                                className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-deep-drak-accent-400'
                                            >
                                                Blog
                                            </NavLink>
                                        </li>


                                        {
                                            user ?

                                                <>
                                                    <button onClick={lotOut} className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-deep-purple-accent-400'>Log out</button>
                                                    <Tippy content={<p className='text-white bg-slate-600 px-8 py-2 mt-5'>{user.displayName}</p>}>
                                                        <img src={user.photoURL} alt="userPhoto" className="cursor-pointer self-center flex-shrink-0 w-12 h-12 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                                                    </Tippy>
                                                </>


                                                :
                                                <li>
                                                    <NavLink
                                                        to='/login'
                                                        aria-label='About Us'
                                                        title='Login Section'
                                                        className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-deep-drak-accent-400'
                                                    >
                                                        Login
                                                    </NavLink>
                                                </li>
                                        }
                                        <div>
                                            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                                        </div>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;