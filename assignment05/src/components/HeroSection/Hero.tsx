import React from 'react'
import img from '../../assets/images/Hero Isometric 3D Graphic Column.png'

export default function Hero() {
    return (
        <div className='hero-section justify-between  grid grid-cols-12'>
            <div className="left-content col-span-6 items-center flex   gap-6">
                <div>
                    <h2 className='text-6xl font-bold'>Build Your Ideal
                        <span className='text-orange-600 font-bold'> Development Stack</span></h2>
                    <p>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div>
                        <button>Explore Technologies</button>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="right-content col-span-5 flex mx-auto ">
                <img className='text-center' src={img} alt="Hero image" />
            </div>
        </div>
    )
}
