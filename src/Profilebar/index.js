import React from "react";
import "./style.css";
import "../tailwind.css";
import DjAnkit from "../../src/img/Djankit.jpg";
import Adventure from "../img/adventure.jpg";
import Culture from "../img/culture.jpg";
import Holiday from "../img/holiday.jpg";
import Partymanankit from "../img/partyman.jpg";
import Painterman from "../img/painter boi.jpg";
import Coolboi from "../img/coolboi.jpg";
import Moviestar from "../img/moviestar.jpg";


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
        <div className=" storyBar w-full flex border-b-2 pb-4 ">
          <div className="">
            <img
            className="w-16 h-16 rounded-full ml-10"
            src={Adventure}
            alt={"Bikerankit"}
            ></img>
            <p className="ml-10">Adventure</p>
          </div>
          <div className="mx-4">
            <img
            className="w-16 h-16 rounded-full"
            src={Culture}
            alt={"Newariankit"}
            ></img>
            <p>Culture</p>
          </div>
          <div>
            <img
            className="w-16 h-16 rounded-full"
            src={Holiday}
            alt={"Partymanankit"}
            ></img>
            <p>Holiday</p>
          </div>
        </div>
        {/* =============================================================================================================== */}
        <div className=" flex flex-row pb-4 pt-4">
          <div className="">
            <img className="" src={Partymanankit}
            alt={"photo1"}
            ></img>
          </div>
          <div className="mx-4">
             <img className="" src={Painterman}
            alt={"photo2"}
            ></img>
          </div>
          <div className="">
             <img className="" src={Coolboi}
            alt={"photo3"}
            ></img>
          </div>
        </div>
        <div className="pt-4">
          <div className="flex flex-row w-56">
             <img className="" src={Moviestar}
            alt={"photo2"}
            ></img>
          </div>
        </div>
      </section>
      <footer className="footerYeah ml-20 mr-20">
        <div className="flex flex-row justify-around mt-10 text-blue-600">
          <p>ABOUT</p>
          <p className="mx-2">HELP</p>
          <p>PRESS</p>
          <p className="mx-2">API</p>
          <p>JOBS</p>
          <p className="mx-2">PRIVACY</p>
          <p>TERMS</p>
        </div>
        <div className="flex justify-around mt-4 text-blue-600 ">
          <p>LOCATION</p>
          <p className="mx-2">TOPACCOUNTS</p>
          <p>HASHTAGS</p>
          <p className="mx-2">LANGUAGE</p>
        </div>
        <div className="text-red-500 mt-4">
          Powered and presents by Anish and Melvin. Fuck instagram we got Sosomedia. 2020 SoSomedia.</div>
      </footer>
    </React.Fragment>
  );
}

export default Profilebar;
