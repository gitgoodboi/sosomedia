import React from 'react';
import { AiOutlineUser } from "react-icons/ai"
import { HiDotsVertical } from "react-icons/hi"
import ironman1 from "./../../images/Ironman01.jpg"
 
function Timeline(){
    return(
        <section className='maintimeline absolute w-screen h-screen' >

        <div>
            <div className='flex' >
                {/* USER INFO*/}

                <div className='flex px-3 ' >
                    <AiOutlineUser size={20} />
                    <p className='px-2' >USERNAME1</p>
                </div>

                <div className="absolute right-0 usermenu px-3" >
                    {/* USER MENU */}
                    <HiDotsVertical size={16} />
                </div>
            </div>

            <div>
                {/* MAIN POST */}
                
                    {/* <img src={ironman1} alt='firstpost' className='object-cover' ></img> */}
                
            </div>
            <div>
                {/* LIKES */}
            </div>
            <div>
                {/* COMMENTS */}
            </div>
        </div>

        </section>
    )
}

export default Timeline;