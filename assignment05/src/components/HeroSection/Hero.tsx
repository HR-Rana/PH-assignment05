import React from 'react'
import img from '../../assets/images/Hero Isometric 3D Graphic Column.png'

export default function Hero() {
    return (
        <div className='hero-section'>
            <div className="left-content">
                <h2>Build Your Ideal
                    <span>Development Stack</span></h2>
                <p>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <span>
                    <button>Explore Technologies</button>
                    <button>Learn More</button>
                </span>
            </div>
            <div className="right-content">
                <img src={img} alt="Hero image" />
            </div>
        </div>
    )
}
