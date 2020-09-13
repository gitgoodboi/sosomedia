import React from 'react';
import './styles.css'
import Storyline from './../Components/Storyline';
import DjAnkit from "../../src/img/Djankit.jpg";
import partyman from '../img/partymanankit.jpg'
import { AiOutlineUser, AiOutlineHeart, AiOutlineComment } from "react-icons/ai"
import { HiDotsVertical, HiChatAlt } from "react-icons/hi"
import { BsBookmark } from "react-icons/bs"

import { Link } from 'react-router-dom'


function Homepage(){
    return(
        <section>
            <Storyline></Storyline>

        <section style={{ height: '5000px', paddingTop: '64px'}} className='justify-center flex w-full
        lg:w-500px' >

            <div style={{height: '50px'}} className='block flex justify-center' > 

                <Link to='/profile' >
                <div className='flex absolute left-0 ' >
                <img
                    style={{marginLeft: '4px'}}
                    className="w-10 h-10 rounded-full"
                    src={DjAnkit}
                    alt={"RamroDjMaybe"}
                    ></img>
                    <p style={{marginLeft: '4px', fontWeight: 'bold', paddingTop: '5px' }} >DJAnkit</p>
                </div>
                </Link>
               
                <div className='absolute right-0 pt-3' >
                    <HiDotsVertical />
                </div>
            </div>

            <div className='pt-12 w-full md:w-5/6' >
                <img src={partyman} alt='partymanankit' ></img>
                <div style={{paddingTop: '40px'}} className='flex justify-center ' >
                    <div className='absolute flex left-0' >
                    <AiOutlineHeart size={30} className='mx-1 md:mx-2 lg:mx-4' />
                    <AiOutlineComment size={30} className='md:mx-2 lg:mx-4' />
                    </div>
                    <div className='absolute right-0' >
                    <BsBookmark style={{float: 'right'}} className='md:mx-2 lg:mx-4' size={30}/>
                    </div>
                </div>
                <div className='pt-10'>

                <div>
                    <p className='font-bold' >747 Likes</p>
                </div>

                    
                <div>
                    <input type="checkbox" className="read-more-state" id='commentmore' ></input>
                <ul className='read-more-wrap' >
                        <li className='firstcomment' >
                        <div className='flex' >
                        <p className='font-bold' >brendankane</p><p>@Neyo's social media's game is on point. how is yours?</p>
                        </div>
                        </li>
                        <li className='read-more-target' >
                            <div className='flex' >
                            <p className='font-bold' >megantheresaaa</p><p>So how do they make the imperfect ones in the first place</p>
                            </div>
                        </li>
                        <li className='read-more-target' >
                        <div className='flex' >
                        <p className='font-bold' >joelsammy</p><p>I've seen this before... Saints row 2 ...</p>
                        </div>
                        </li>
                        <li className='read-more-target' >
                        <div className='flex' >
                        <p className='font-bold' >risalinn</p><p>is that Alcatraz??</p>
                        </div>
                        </li>
                    </ul>
                    <label className='read-more-trigger' for='commentmore'  ></label>
                </div>

                </div>
                

            </div>

        </section>

        </section>
    )
}

export default Homepage;