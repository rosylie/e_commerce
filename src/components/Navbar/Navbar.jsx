// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#",
    },
    
    {
        id: 5,
        name: "Electronics",
        link: "/#",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
]

const Navbar = () => {
    return (
        <div className='relative z-40 duration-200 bg-white shadow-md dark:bg-fuchsia-950 dark:text-white'>
            {/* upper navbar */}
            <div className='py-2 bg-secondary/40'>
                <div className='container flex items-center justify-between'>
                    <div>
                        <a href="#" className='flex gap-2 text-2xl font-bold sm:text-3xl'>
                            <img src={Logo} alt="logo" className='w-10 uppercase'/>StyleHive
                        </a>
                    </div>
                    
                    {/* search bar*/}
                    <div className='flex items-center justify-between gap-4'>
                        <div className='relative hidden group sm:block'>
                            <input 
                            type="text" 
                            placeholder='search' 
                            className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
                            />
                            <IoMdSearch className='absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3'/>
                        </div>
        
                    {/* order button  */}
                        <button onClick={() => alert("not available yet")} className='flex items-center gap-3 px-4 py-1 text-white transition-all duration-200 rounded-full bg-gradient-to-r from-primary to-secondary group'>
                            <span className='hidden transition-all duration-200 group-hover:block'>Order</span>
                            <FaCartShopping className='text-xl text-white cursor-pointer drop-shadow-sm'/>
                        </button>
                    {/* Darkmode Switch  */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* lower navbar */}
            <div className='flex justify-center'>
                <ul className='items-center hidden gap-4 sm:flex '>
                    {
                        Menu.map((data) => (
                            <li key={data.id}>
                                <a 
                                href={data.link} 
                                className='inline-block px-4 duration-200 hover:text-primary'>{data.name}</a>
                            </li>
                        ))
                    }
                    
                    {/* Simple dropdown and links */}
                    <li className='relative cursor-pointer group'>
                        <a 
                        href="#" 
                        className='flex items-center gap-[2px] py-2'>
                            Trending Products
                            <span>
                                <FaCaretDown 
                                className='transition-all duration-200 group-hover:rotate-180'/>
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black'>
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className='inline-block w-full p-2 rounded-md hover:bg-primary/20'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar