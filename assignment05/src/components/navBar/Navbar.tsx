
import { Link } from 'react-router-dom'

import logo from '../../assets/images/Link.png'


export default function Navbar() {


    return (
        <div className='NavItems grid grid-cols-12 flex justify-between items-center  mx-auto container' >
            <div className="logo col-span-3">
                <img src={logo} alt="logo" />
            </div>

            <div className="nav col-span-4 flex justify-between">
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
