import logo from '../../assets/images/Link.png'

export default function Footer() {
    return (
        <div className='py-[50px] container mx-auto'>
            <div className='footer-section grid gap-5 mb-8 flex justify-end grid-cols-12'>
                <div className="left-content col-span-3 ">
                    <span>
                        <img src={logo} alt="logo" />
                    </span>
                    <p className='my-5'>Curated tools, technologies, and resources for developers building
                        modern software.</p>

                    <ul className='flex gap-[10px] font-semibold'>
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
                <div className="middle-content col-span-3 text-center">
                    <h4 className='text-[20px] font-semibold'>Products</h4>
                    <ul className='mt-5'>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="middle-right col-span-3 text-center">
                    <h4 className='text-[20px] font-semibold'>Company</h4>
                    <ul className='mt-5'>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="right-content col-span-3 text-center">
                    <h4 className='text-[20px] font-semibold'>Legal</h4>
                    <ul className='mt-5'>
                        <li>Privacy Policy</li>
                        <li>Terms of Services</li>
                    </ul>
                </div>
            </div>
            <hr className='text-gray-200' />
            <div className="text py-10 flex justify-between">
                <div className="left">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                </div>
                <div className="right flex gap-5 decoration-none">
                    <li>Privacy</li>
                    <li>Terms</li>
                </div>
            </div>
        </div>
    )
}
