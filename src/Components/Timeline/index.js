import React from 'react'
import './styles.css'
import { AiOutlineUser, AiOutlineHeart, AiOutlineComment } from "react-icons/ai"
import { HiDotsVertical, HiChatAlt } from "react-icons/hi"
import { BsBookmark } from "react-icons/bs"


function Timeline(){
    return(
        <section style={{paddingTop: '20px'}} className='border-solid border-t-2' >
            <AiOutlineUser />
        </section>
    )
}

export default Timeline;