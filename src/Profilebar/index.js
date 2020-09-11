import React from "react";
import "./style.css";
import "../tailwind.css";
import DjAnkit from "../../src/img/Djankit.jpg";

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
      <section style={{paddingTop: 62 + 16}}>
        <div className="flex justify-center item-center">
          <img
            className="w-20 h-20 rounded-full"
            src={DjAnkit}
            alt={"RamroDjMaybe"}
          ></img>
          <div className="ml-8">
            <h1 className="text-black text-2xl ">Virtual_Rioter</h1>
            <button className="border-2 border rounded py-2 px-4 mt-2">
              Edit Profile
            </button>
          </div>
        </div>
        <div>
          
        </div>
        <div className="flex flex-row ">
          <div>3 post</div>
          <div className="mx-4">0 followers</div>
          <div>1 following</div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Profilebar;
