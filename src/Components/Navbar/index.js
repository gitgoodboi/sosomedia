import React from 'react';
import './styles.css'
import './../../../src/tailwind.css'

import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import {MdAddCircleOutline} from "react-icons/md";

function Navbar(){
    return(
        <div className='navbar' >
        <div class='fixed inset-x-0 bottom-0 w-screen flex justify-center '>
        <nav class='w-screen' >
            <ul class='w-screen flex justify-between px-4 py-2' >
                <li className='bottomnav'>
                    <AiOutlineHome size={32} />
                </li>
                <li className='bottomnav'>
                    <AiOutlineSearch size={32} />
                </li>
                <li className='bottomnav'>
                    <MdAddCircleOutline size={32} />
                </li>
                <li className='bottomnav'>
                    <AiOutlineHeart size={32} />
                </li>
                <li className='bottomnav'>
                    <AiOutlineUser size={32} />
                </li>
            </ul>
        </nav>
        </div>
        </div>
    )
}

export default Navbar;