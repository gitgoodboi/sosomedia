import React from 'react';
import './styles.css'
import './../../../src/tailwind.css'
import { Link } from "react-router-dom"

import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart, AiOutlineUser, AiOutlineCompass } from "react-icons/ai";
import {MdAddCircleOutline} from "react-icons/md";

function Navbar(){

    return(

// ===================================================MAIN NAVBAR SECTION STARTS==================================
        <div className='navbar' >
        <div style={{height: '64px', backgroundColor: "white", opacity: "1"}} className='fixed z-50 bottom-0 w-screen flex justify-center border-solid border-t-2
        lg:top-0 h-16 border-solid border-b-2 items-center'>

{/* ================================================NAVBAR LARGE ITEMS============================================ */}
            <h1 className='hello hidden lg:block py-5 px-10 font-micolestherregular ' >SOSOMEDIA</h1>

            <div className='hidden lg:flex items-center left-1/2 py-0 px-10 top-0 '>
                <AiOutlineSearch size={22} className='searchpad' />
                <input type={Text}  placeholder="SEARCH" className='outline-none px-2 '></input>
            </div>
{/* =================================================END NAVBAR LARGE ITEMS==================================== */}
            

{/* ====================================================NAVBAR ICONS MADE USING LIST===============================             */}
            <ul class='w-screen flex justify-between px-1 py-1
            lg:justify-end w-auto'>

                <Link to='/sosomedia' >
                <li className='usedicon' className='lg:px-8 hover:bg-gray-200 rounded-full '>
                    <AiOutlineHome size={32} />
                </li>                 
                </Link>

                <li className='hidden lg:block px-8 hover:bg-gray-200 rounded-full'>
                    <AiOutlineCompass size={32} />
                </li>

                <li className='lg:hidden hover:bg-gray-200 rounded-full'>
                    <AiOutlineSearch size={32} />
                </li>

                <li className='lg:hidden hover:bg-gray-200 rounded-full'>
                    <MdAddCircleOutline size={32} />
                </li>

                <li className='lg:px-8 hover:bg-gray-200 rounded-full'>
                    <AiOutlineHeart size={32} />
                </li>

                <Link to='/profile' >
                <li className='lg:px-8 hover:bg-gray-200 rounded-full' >
                    <AiOutlineUser size={32} />
                </li>
                </Link>

            </ul>
{/* ==========================================NAVBAR ICONS END================================================= */}
        </div>
        </div>
// ===================================================NAVBAR CODE ENDS============================================
    )
}

export default Navbar;