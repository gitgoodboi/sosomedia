import React from "react";
import "./style.css";
import "../tailwind.css";
import DjAnkit from "../../src/img/Djankit.jpg";
import Adventure from "../img/adventure.jpg";
import Culture from "../img/culture.jpg";
import Holiday from "../img/holiday.jpg";

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
        <div className="ml-10">
          <div className="font-bold">Ankit Nakarmi</div>
          <div>I can type 200 lines of code in 20 minutes. Imagine what else i could do with these fingers.</div>
          <div className="text-blue-500">www.dontvisitnepalvisitankit.com</div>
        </div>
        <div className="flex flex-row justify-around
        border-2  pt-4 pb-4 mt-6 mb-6">
          <div>3 post</div>
          <div className="mx-4">0 followers</div>
          <div>1 following</div>
        </div>
        {/* ========================================================================================================== */}
        <div className=" storyBar w-full flex mx-10">
          <div >
            <img
            className="w-20 h-20 rounded-full"
            src={Adventure}
            alt={"Bikerankit"}
            ></img>
            <p>Adventure</p>
          </div>
          <div className="mx-4">
            <img
            className="w-20 h-20 rounded-full"
            src={Culture}
            alt={"Newariankit"}
            ></img>
            <p>Culture</p>
          </div>
          <div>
            <img
            className="w-20 h-20 rounded-full"
            src={Holiday}
            alt={"Partymanankit"}
            ></img>
            <p>Holiday</p>
          </div>
        </div>
        {/* =============================================================================================================== */}
        <div></div>
      </section>
    </React.Fragment>
  );
}

export default Profilebar;
