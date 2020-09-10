import React from 'react'
import './styles.css'
import { AiOutlineUser, AiOutlineHeart, AiOutlineComment } from "react-icons/ai"
import { HiDotsVertical, HiChatAlt } from "react-icons/hi"
import { BsBookmark } from "react-icons/bs"


function Timeline(){
    return(
        <section className='maintimeline flex justify-center w-screen' >
            <div className='block flex justify-center' > 
                {/* USER INFO */}
                <div className='absolute left-0 ' >
                    <AiOutlineUser />
                </div>
                <div className='absolute font-bold' >
                    <p>USERNAME</p>
                </div>
                <div className='absolute right-0' >
                    <HiDotsVertical />
                </div>
            </div>
            <div>
                {/* MAIN POST */}
            </div>
            <div className="commentsection flex w-screen " >
                {/* COMMENT SECTION */}
                <div className='flex justify-between w-1/4 left-0' >
                <AiOutlineHeart />
                <AiOutlineComment />
                <HiChatAlt />
                </div>
                <div className='absolute right-0' >
                    <BsBookmark />
                </div>
            </div>
        </section>
    )
}

export default Timeline;