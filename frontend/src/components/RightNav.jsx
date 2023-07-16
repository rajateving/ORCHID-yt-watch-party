import React from 'react';
import {FaRobot} from 'react-icons/fa'
import {GiPartyPopper} from 'react-icons/gi'
import {IoCloudUploadSharp} from 'react-icons/io5'
import {HiUserGroup} from 'react-icons/hi'
const RightNav = () => {
    return (
        <div className=" glass-effect py-10 text-lg text-white flex flex-col gap-3 font-semi-bold cursor-pointer px-10 h-[60vh]">
            <p className='text-xl ml-5 border-b-[1px] pb-1 mx-14'>Top Features</p>
           <div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><FaRobot className='mt-1'/><p>Highly secure algorithm</p></div>
           <div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><GiPartyPopper className='mt-1'/><p>Watch party</p></div>
           <div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><HiUserGroup className='mt-1'/><p>Invite friends</p></div>
           <div className="flex gap-5 py-2 w-52 hover:bg-slate-300/20 px-4"><IoCloudUploadSharp className='mt-1'/><p>Browse videos</p></div>

           <div className='text-white text-xs flex gap-5 py-4 px-4 '>Made with ❤️ by Uditi</div>
           {/* <div>Chatbot</div>
           <div>Watch party</div>
           <div>Community Uploads</div> */}
        </div>
    );
}

export default RightNav;
