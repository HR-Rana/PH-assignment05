
import { Link } from 'react-router-dom'

import logo from '../../assets/images/Link.png'


export default function Navbar() {


    return (
        <div className='NavItems' >
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="nav">
                <Link to={"#"} >Home</Link>
                <Link to={"#"} >Technologies</Link>
                <Link to={"#"} >Projects</Link>
                <Link to={"#"} >About</Link>
                <Link to={"#"} >Contact</Link>
            </div>
            <div className="buttons">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>

        </div>
    )
}
