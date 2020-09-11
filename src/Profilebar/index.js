import React from "react";
import "./style.css";
import "../tailwind.css";
import DjAnkit from "../Images/Djankit.jpg";

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineCompass,
} from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";

function Profilebar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <div
          className="fixed bottom-0 w-screen flex justify-center border-solid border-t-2
        lg:top-0 h-16 border-solid border-b-2 items-center"
        >
          {/* <nav class='w-screen' > */}

          <h1 className="hello hidden lg:block py-5 px-10 font-micolestherregular ">
            SOSOMEDIA
          </h1>
          <div className="hidden lg:flex items-center left-1/2 py-0 px-10 top-0 ">
            <AiOutlineSearch size={22} className="searchpad" />
            <input
              type={Text}
              placeholder="SEARCH"
              className="outline-none px-2 "
            ></input>
          </div>

          <ul
            class="w-screen flex justify-between px-1 py-1
            lg:justify-end w-auto"
          >
            <li
              className="usedicon"
              className="lg:px-8 hover:bg-gray-200 rounded-full "
            >
              <AiOutlineHome size={32} />
            </li>
            <li className="hidden lg:block px-8 hover:bg-gray-200 rounded-full">
              <AiOutlineCompass size={32} />
            </li>
            <li className="lg:hidden hover:bg-gray-200 rounded-full">
              <AiOutlineSearch size={32} />
            </li>
            <li className="lg:hidden hover:bg-gray-200 rounded-full">
              <MdAddCircleOutline size={32} />
            </li>
            <li className="lg:px-8 hover:bg-gray-200 rounded-full">
              <AiOutlineHeart size={32} />
            </li>
            <li className="lg:px-8 hover:bg-gray-200 rounded-full">
              <AiOutlineUser size={32} />
            </li>
          </ul>
          {/* </nav> */}
        </div>
      </div>
      <div className="item-center mx-64">
        <div style={{ paddingTop: "100px" }} className="flex ">
          <img
            className="w-20 h-20 rounded-full"
            src={DjAnkit}
            alt={"RamroDjMaybe"}
          ></img>
          <h1 className=" mx-4 text-black text-2xl ">Virtual_Rioter</h1>
          <button className="mx-4 border-2 border rounded py-2 px-4">
            Edit Profile
          </button>
          <i></i>
        </div>
        <div className="flex flex-row ">
          <div>3 post</div>
          <div className="mx-4">0 followers</div>
          <div>1 following</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profilebar;
