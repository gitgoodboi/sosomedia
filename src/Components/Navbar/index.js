import React from 'react';
import './styles.css'
import './../../../src/tailwind.css'

import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart, AiOutlineUser, AiOutlineCompass } from "react-icons/ai";
import {MdAddCircleOutline} from "react-icons/md";

function Navbar(){
    return(
        <div className='navbar' >
        <div class='fixed inset-x-0 bottom-0 w-screen flex justify-center 
        lg:top-0 h-16 border-solid border-b-2'>
        {/* <nav class='w-screen' > */}

            <h1 class='hidden lg:block py-5 px-10' >SOSOMEDIA</h1>
            <input type={Text} class='hidden lg:block absolute left-1/2 py-4 px-10' placeholder="SEARCH" ></input>
        
            <ul class='w-screen flex justify-between px-4 py-2
            lg:justify-end' >
                      
                <li className='bottomnav' class='lg:px-8' >
                    <AiOutlineHome size={32} />
                </li>
                <li className='bottomnav' class='hidden lg:block lg:px-8' >
                    <AiOutlineCompass size={32} />
                </li>
                <li className='bottomnav' class='lg:hidden' >
                    <AiOutlineSearch size={32} />
                </li>
                <li className='bottomnav' class='lg:hidden' >
                    <MdAddCircleOutline size={32} />
                </li>
                <li className='bottomnav' class='lg:px-8' >
                    <AiOutlineHeart size={32} />
                </li>
                <li className='bottomnav' class='lg:px-8' >
                    <AiOutlineUser size={32} />
                </li>
            </ul>
        {/* </nav> */}
        </div>
        </div>
    )
}

export default Navbar;