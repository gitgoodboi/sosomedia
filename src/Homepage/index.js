import React from 'react';
import './styles.css'
import Storyline from './../Components/Storyline';
import DjAnkit from "../../src/img/Djankit.jpg";
import partyman from '../img/partymanankit.jpg';
import artistman from '../img/artistmanankit.jpg';
import porchman from '../img/porchmanankit.jpg';
import danceman from '../img/dancemanankit.jpg'
import { AiOutlineUser, AiOutlineHeart, AiOutlineComment } from "react-icons/ai"
import { HiDotsVertical, HiChatAlt } from "react-icons/hi"
import { BsBookmark } from "react-icons/bs"

import { Link } from 'react-router-dom'


function Homepage(){
    return(
        <section>

            <Storyline></Storyline>

{/* ========================================================POSTS BEGIN=========================================== */}
        <section style={{ height: '5000px', paddingTop: '64px'}} className='justify-center flex-row w-full
        lg:w-500px' >


{/* ========================================================FIRST POST====================================================== */}

<div className='lg:w-1/2' >
{/* ======================================================POSTER 1 INFO================================================ */}
            <div style={{height: '50px'}} className='block flex justify-center' > 
                
            <div className='flex justify-between absolute left-0 lg:w-2/5' >

                <div className='flex justify-between' >
                    <Link to='/profile' >
                    <div className='flex' >
                    <img
                    style={{marginLeft: '4px'}}
                    className="w-10 h-10 rounded-full"
                    src={DjAnkit}
                    alt={"RamroDjMaybe"}
                    ></img>
                    <p style={{marginLeft: '4px', fontWeight: 'bold', paddingTop: '5px' }} >DJAnkit</p>
                    </div>
                    </Link>
                </div>

                <div className='hidden lg:block absolute right-0' >
                    <HiDotsVertical size={25} />
                </div>
            </div>
                
                <div className='absolute right-0 pt-3 lg:hidden' >
                    <HiDotsVertical size={25} />
                </div>

            </div>

{/* =======================================================POSTER 1 INFO ENDS========================================== */}

{/* =======================================================MAIN POST 1 BEGINS========================================= */}
            <div className='w-full md:w-5/6' >
                <div className="md:ml-40 lg:ml-6" >
                <img src={partyman} alt='partymanankit' ></img>
                </div>
                

{/* ================================================USER'S LIKES & COMMENTS BAR 1 SECTION=============================== */}

                <div style={{paddingTop: '40px'}} className='flex justify-center ' >

                    <div className='absolute flex left-0 lg:w-5/12' >
                    <AiOutlineHeart size={30} className='mx-1 md:mx-2 lg:mx-4' />
                    <AiOutlineComment size={30} className='md:mx-2 lg:mx-4' />

                    <div className='hidden lg:block absolute right-0' >
                        <BsBookmark size={30} />
                    </div>
                    </div>

                    <div className='absolute right-0' >
                    <BsBookmark style={{float: 'right'}} className='md:mx-2 lg:hidden' size={30}/>
                    </div>
                </div>

{/* ===========================================USER'S LIKES & COMMENTS BAR 1 ENDS=============================== */}
           
{/* ==============================================LIKES AND COMMENTS 1============================================== */}
            <div className='pt-10'>

                {/* LIKES COUNT */}
                <div>
                    <p className='font-bold' >747 Likes</p>
                </div>

{/* ==============================================MAIN COMMENT SECTION 1============================================ */}
                    
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
{/* ==================================================MAIN COMMENT SECTION 1 ENDS=============================== */}
               
                </div>
{/* ===============================================LIKES AND COMMENT SECTION 1 ENDS=============================== */}
                
            </div>

{/* ====================================================MAIN POST 1 ENDS======================================================= */}

</div>
{/* =======================================================FIRST POST ENDS========================================================= */}





<div className='pt-12 lg:w-1/2' >

        <div className='flex' >

        <div className='flex justify-between lg:w-5/6 ' >
        <Link to='/profile'>
        <div className='flex' >
            <img
                style={{marginLeft: '4px'}} 
                className='w-10 h-10 rounded-full'
                src={DjAnkit} 
                alt='djankit' ></img>
                <p style={{marginLeft: '4px', fontWeight: 'bold', paddingTop: '5px' }} >DJ ANKIT</p>
        </div>
        </Link>
        <div className='hidden lg:block' >
        <HiDotsVertical size={25} /> 
        </div>
        </div>
        


        <div className='absolute right-0 lg:hidden ' >
            <HiDotsVertical size={25} />
        </div>

        </div>

        <div>
            <div className='w-full md:w-5/6' >
                <div className="md:ml-40 lg:ml-6" >
                 <img src={artistman} alt='artistman' ></img>
                </div>
            </div>
        </div>
        <div className='flex' >


        <div className='flex' >
            <AiOutlineHeart size={30} className='mx-1 md:mx-2 lg:mx-4' />
            <AiOutlineComment size={30} className='md:mx-2 lg:mx-4' />

            <div className='hidden lg:block ml-64' >
            <BsBookmark size={30} />
            </div>
            
        </div>
        <div className='absolute right-0 lg:hidden'>
        <BsBookmark size={30} />
        </div>

        </div>    

        <div style={{paddingLeft: '5px'}} >
            <p style={{fontWeight: 'bold'}} >2,342 Likes</p>
        </div>

        <div style={{paddingTop: '5px' , paddingLeft: '5px' }} >
            <input type='checkbox' id='commentmoretwo' className='read-more-state-two' ></input>

            <ul className='read-more-wrap-two' >
                <li>
                <div className='flex' >
                    <p style={{fontWeight: 'bold'}} >pemba.10</p><p>Can you count the stars</p>
                </div>  
                </li>
                <li>
                <div className='read-more-target-two flex' >
                    <p style={{fontWeight: 'bold'}} >ninu_nimi</p><p>pimple chai extra ayecha</p>
                </div>  </li>
                <li>
                <div className='read-more-target-two flex' >
                    <p style={{fontWeight: 'bold'}} >notalawyer</p><p>i can hear this image</p>
                </div>  </li>
                <li>
                <div className='read-more-target-two flex' >
                    <p style={{fontWeight: 'bold'}} >daf.an</p><p>Creative</p>
                </div>  </li>
                <li>
                <div className='read-more-target-two flex' >
                    <p style={{fontWeight: 'bold'}} >zeantoniojr</p><p>You have to wear Calvin Klein clothes</p>
                </div>  </li>
            </ul>

            <label className='read-more-trigger-two' for='commentmoretwo' ></label>

        </div>
            

</div>



<div className='pt-12 lg:w-1/2' >

        <div className='flex' >

        <div className='flex justify-between lg:w-5/6 ' >
        <Link to='/profile'>
        <div className='flex' >
            <img
                style={{marginLeft: '4px'}} 
                className='w-10 h-10 rounded-full'
                src={DjAnkit} 
                alt='djankit' ></img>
                <p style={{marginLeft: '4px', fontWeight: 'bold', paddingTop: '5px' }} >DJ ANKIT</p>
        </div>
        </Link>
        <div className='hidden lg:block' >
        <HiDotsVertical size={25} /> 
        </div>
        </div>
        


        <div className='absolute right-0 lg:hidden ' >
            <HiDotsVertical size={25} />
        </div>

        </div>

        <div>
            <div className='w-full md:w-5/6' >
                <div className="md:ml-40 lg:ml-6" >
                 <img src={porchman} alt='artistman' ></img>
                </div>
            </div>
        </div>
        <div className='flex' >


        <div className='flex' >
            <AiOutlineHeart size={30} className='mx-1 md:mx-2 lg:mx-4' />
            <AiOutlineComment size={30} className='md:mx-2 lg:mx-4' />

            <div className='hidden lg:block ml-64' >
            <BsBookmark size={30} />
            </div>
            
        </div>
        <div className='absolute right-0 lg:hidden'>
        <BsBookmark size={30} />
        </div>

        </div>    

        <div style={{paddingLeft: '5px'}} >
            <p style={{fontWeight: 'bold'}} >2,342 Likes</p>
        </div>

        <div style={{paddingTop: '5px' , paddingLeft: '5px' }} >
            <input type='checkbox' id='commentmorethree' className='read-more-state-three' ></input>

            <ul className='read-more-wrap-three' >
                <li>
                <div className='flex' >
                    <p style={{fontWeight: 'bold'}} >pemba.10</p><p>Can you count the stars</p>
                </div>  
                </li>
                <li>
                <div className='read-more-target-three flex' >
                    <p style={{fontWeight: 'bold'}} >ninu_nimi</p><p>pimple chai extra ayecha</p>
                </div>  </li>
                <li>
                <div className='read-more-target-three flex' >
                    <p style={{fontWeight: 'bold'}} >notalawyer</p><p>i can hear this image</p>
                </div>  </li>
                <li>
                <div className='read-more-target-three flex' >
                    <p style={{fontWeight: 'bold'}} >daf.an</p><p>Creative</p>
                </div>  </li>
                <li>
                <div className='read-more-target-three flex' >
                    <p style={{fontWeight: 'bold'}} >zeantoniojr</p><p>You have to wear Calvin Klein clothes</p>
                </div>  </li>
            </ul>

            <label className='read-more-trigger-three' for='commentmorethree' ></label>

        </div>
            

</div>





<div className='pt-12 lg:w-1/2' >

        <div className='flex' >

        <div className='flex justify-between lg:w-5/6 ' >
        <Link to='/profile'>
        <div className='flex' >
            <img
                style={{marginLeft: '4px'}} 
                className='w-10 h-10 rounded-full'
                src={DjAnkit} 
                alt='djankit' ></img>
                <p style={{marginLeft: '4px', fontWeight: 'bold', paddingTop: '5px' }} >DJ ANKIT</p>
        </div>
        </Link>
        <div className='hidden lg:block' >
        <HiDotsVertical size={25} /> 
        </div>
        </div>
        


        <div className='absolute right-0 lg:hidden ' >
            <HiDotsVertical size={25} />
        </div>

        </div>

        <div>
            <div className='w-full md:w-5/6' >
                <div className="md:ml-40 lg:ml-6" >
                 <img src={danceman} alt='artistman' ></img>
                </div>
            </div>
        </div>
        <div className='flex' >


        <div className='flex' >
            <AiOutlineHeart size={30} className='mx-1 md:mx-2 lg:mx-4' />
            <AiOutlineComment size={30} className='md:mx-2 lg:mx-4' />

            <div className='hidden lg:block ml-64' >
            <BsBookmark size={30} />
            </div>
            
        </div>
        <div className='absolute right-0 lg:hidden'>
        <BsBookmark size={30} />
        </div>

        </div>    

        <div style={{paddingLeft: '5px'}} >
            <p style={{fontWeight: 'bold'}} >2,342 Likes</p>
        </div>

        <div style={{paddingTop: '5px' , paddingLeft: '5px' }} >
            <input type='checkbox' id='commentmorefour' className='read-more-state-four' ></input>

            <ul className='read-more-wrap-four' >
                <li>
                <div className='flex' >
                    <p style={{fontWeight: 'bold'}} >pemba.10</p><p>Can you count the stars</p>
                </div>  
                </li>
                <li>
                <div className='read-more-target-four flex' >
                    <p style={{fontWeight: 'bold'}} >ninu_nimi</p><p>pimple chai extra ayecha</p>
                </div>  </li>
                <li>
                <div className='read-more-target-four flex' >
                    <p style={{fontWeight: 'bold'}} >notalawyer</p><p>i can hear this image</p>
                </div>  </li>
                <li>
                <div className='read-more-target-four flex' >
                    <p style={{fontWeight: 'bold'}} >daf.an</p><p>Creative</p>
                </div>  </li>
                <li>
                <div className='read-more-target-four flex' >
                    <p style={{fontWeight: 'bold'}} >zeantoniojr</p><p>You have to wear Calvin Klein clothes</p>
                </div>  </li>
            </ul>

            <label className='read-more-trigger-four' for='commentmorefour' ></label>

        </div>
            

</div>

        </section>

{/* ========================================================POSTS ENDS========================================================== */}




        </section>

    )
}

export default Homepage;