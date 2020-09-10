import React from 'react'
import { AiOutlineCamera } from "react-icons/ai"
import { HiChatAlt } from "react-icons/hi"

function NavbarMobile(){
    return(
        <section className="flex justify-between border-solid border-b-2 lg:hidden" >
            <div>
                <AiOutlineCamera size={32} className='m-2' />
            </div>
            <div>
                <h1 className='hello lg:hidden py-5 px-10 font-micolestherregular ' >SOSOMEDIA</h1>
            </div>
            <div>
                <HiChatAlt size={32} className='m-2' />
            </div>
        </section>
    )
}

export default NavbarMobile;