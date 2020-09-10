import React from 'react'
import { AiOutlineCamera, AiOutlineMessage } from "react-icons/ai"

function NavbarMobile()
{
    return(

    <section className="fixed w-screen bg-white bg-opacity-100 z-50 flex justify-between border-solid border-b-2 
    lg:hidden" >
    <div className='px-2 py-4' >
        <AiOutlineCamera size={32} />
    </div>
    <div>
        <h1 className='hello lg:hidden py-5 px-10 font-micolestherregular ' >SOSOMEDIA</h1>
    </div>
    <div className='px-2 py-4' >
        <AiOutlineMessage size={32} />
    </div>
    </section>
    
    )
}

export default NavbarMobile;