'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdDragHandle, MdOutlineClear } from 'react-icons/md';
import { signIn,signOut, useSession } from 'next-auth/react';

export const Navbar = ({ title, isAddTopicPage }) => {
    //signIn and signOut button
    const { status } = useSession();

    // Initialize a state variable to control the visibility of the dropdown menu
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown menu
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="flex justify-between sm:px-8 px-3 items-center bg-transparent shadow-lg m-2 rounded-lg border-t-2 border-slate-200">
            <Link href={"/"} className="overflow-hidden w-fit hidden lg:block">
                <Image src="/KG_LOGO.png" alt="logo" width={120} height={120} overflow="hidden" />
            </Link>

            <Link href={"/"} className="overflow-hidden w-fit lg:hidden">
                <Image src="/KG_LOGO.png" alt="logo" width={90} height={80} overflow="hidden" />
            </Link>

            <div className="flex gap-8 mr-4">
                <Link href={"/about"} className="border-none px-3 py-2 rounded-lg bg-black text-white hidden lg:block">About</Link>
                <Link href={"/"} className="border-none px-3 py-2 rounded-lg bg-black text-white hidden lg:block">Contact</Link>

                {isAddTopicPage ? (
                    <Link href={"/"} className="border-none px-3 py-2 rounded-lg bg-black text-white hidden lg:block">Home</Link>
                ) : (
                    <Link href={"/addtopic"} className="border-none px-3 py-2 rounded-lg bg-black text-white hidden lg:block">Add</Link>
                )}
            </div>

            {/* Toggle button for the dropdown menu */}
            <button
                onClick={toggleDropdown}
                className={`lg:hidden transition-transform transform ${isDropdownOpen ? 'rotate-45' : 'rotate-0'}`}
                style={{
                    transitionDuration: '0.3s', // Set the duration of the transition
                    transitionTimingFunction: 'ease-in-out', // Set the easing function
                }}
            >
                {isDropdownOpen ? (
                    <MdOutlineClear className="w-12 h-8" />
                ) : (
                    <MdDragHandle className="w-12 h-8" />
                )}
            </button>


            {/* Dropdown menu */}
            {isDropdownOpen && (
                <div className="lg:hidden absolute top-16 right-0 bg-white border rounded-lg shadow-md z-10 mt-4 mr-4 flex flex-col gap-1 text-slate-600 overflow-hidden">
                    {status === 'authenticated' ? (
                        <Link href={"/addtopic"} className="block py-2 px-4 hover:bg-gray-100">Add Topic</Link>
                    ):(
                        <></>
                    )
                    }
                    
                    <Link href={"/"} className="block py-2 px-4 hover:bg-gray-100">Contact</Link>
                    <Link href={"/about"} className="block py-2 px-4 hover:bg-gray-100">About</Link>
                    { status === 'authenticated' ? (
                        <button className="block py-2 px-4 hover:bg-gray-100 text-left" onClick={()=>signOut('google')}>Sign Out</button>
                    ):(
                        <button className="block py-2 px-4 hover:bg-gray-100 text-left" onClick={()=>signIn('google')}>Sign In</button>
                    )}
                    
                </div>
            )}

            <style jsx>{`
                /* CSS transitions for button rotation animation */
                .rotate-45 {
                    transform: rotate(90deg);
                }

                .rotate-0 {
                    transform: rotate(0deg);
                }
            `}</style>
        </nav>
    );
};
