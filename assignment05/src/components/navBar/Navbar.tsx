import { FiAlignJustify } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

import { Link } from 'react-router-dom'

import logo from '../../assets/images/Link.png'
import { useState } from "react";


export default function Navbar() {
    const [open, setOpen] = useState(false);



    return (
        <div className='NavItems grid grid-cols-12 flex justify-between items-center  mx-auto container' >
            <div className="menu-bar pl-3 col-span-3" onClick={() => setOpen(!open)}>
                {
                    open ? <FaTimes className="text-[26px] cursor-pointer" /> :
                        <FiAlignJustify className="text-[26px] cursor-pointer" />
                }


            </div>
            <div className="logo col-span-3">
                <img src={logo} alt="logo" />
            </div>

            <div className={`nav nav-items ${open ? "responsive" : ""} col-span-4 flex justify-between`}>
                <Link to={"#"} className='font-semibold text-orange-600' >Home</Link>
                <Link to={"#"} >Technologies</Link>
                <Link to={"#"} >Projects</Link>
                <Link to={"#"} >About</Link>
                <Link to={"#"} >Contact</Link>
            </div>
            <div className="buttons flex justify-between  col-span-5 flex justify-end gap-4 ">
                <button className=' py-2  font-semibold  cursor-pointer text-white-600 w-40'>Sign In</button>
                <button className='py-2  font-semibold  cursor-pointer w-50 rounded-full bg-orange-800 text-white' >Sign Up</button>
            </div>

        </div>
    )
}
