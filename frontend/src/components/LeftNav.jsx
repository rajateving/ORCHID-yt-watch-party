import React, { useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

// import LeftNavMenuItem from "./LeftNavMenuItem";
// import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
    // const { selectedCategory, setSelectedCategory, mobileMenu } =
    //     useContext(Context);

    const navigate = useNavigate();

    // const clickHandler = (name, type) => {
    //     switch (type) {
    //         case "category":
    //             return setSelectedCategory(name);
    //         case "home":
    //             return setSelectedCategory(name);
    //         case "menu":
    //             return false;
    //         default:
    //             break;
    //     }
    // };

    return (
        <div className=" glass-effect py-10 text-lg text-white flex flex-col gap-3 font-semi-bold cursor-pointer px-2 h-[60vh]">
             {/* <p className='text-xl ml-5 text-white border-b-[1px] pb-1 mx-14'>Categories</p> */}
           <div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><AiFillHome className="mt-1"/><p>Home</p></div>
           <Link to="/searchResult/music"><div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><CgMusicNote className="mt-1"/><p>Music</p></div></Link>
           <Link to="/searchResult/films"><div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><FiFilm className="mt-1"/><p>Films</p></div></Link>
           <Link to="/searchResult/live"><div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><MdLiveTv className="mt-1"/><p>Live</p></div></Link>
           <Link to="/searchResult/sports"><div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><GiDiamondTrophy className="mt-1"/><p>Sports</p></div></Link>
           <Link to="/searchResult/news"><div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><ImNewspaper className="mt-1"/><p>News</p></div></Link>
           <Link to="/searchResult/learning"><div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><RiLightbulbLine className="mt-1"/><p>Learning</p></div></Link>
          
           {/* <div>Chatbot</div>
           <div>Watch party</div>
           <div>Community Uploads</div> */}
        </div>
    );
};

export default LeftNav;