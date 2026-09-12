import React from 'react'
import { FaStar } from "react-icons/fa";




export default function TechnologyCard({ data }) {
    return (
        <div className='technologies-card grid grid-cols-4 gap-[20px] '>
            {
                data.map((items) => {
                    return (<div className='Card p-4 shadow-xs shadow-black  h-full'>
                        <div className="card-header flex justify-between my-3">
                            <div className="icon">
                                <img src={items.icon} alt={items.name} className='w-[60px]' />
                            </div>
                            <div className="text">
                                <p className='bg-gray-400 p-1 rounded'>{items.badge}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h4 className='font-bold text-xl my-2'>{items.name}</h4>
                            <p className='my-5 text-gray-500'>{items.description}</p>
                        </div>
                        <div className="card-footer ">
                            <div className='flex items-center justify-between my-3'>
                                <h6 className='bg-gray-200 rounded p-[5px]'>{items.category}</h6>
                                <p className=''>{items.difficulty}</p>
                                <span className='flex gap-[5px] items-center'><span className='text-orange-400'><FaStar /></span>{items.rating}</span>
                            </div>
                        </div>
                        <button className='bg-black w-full p-2 my-2 text-white capitilized rounded'>Add To stack</button>
                    </div>
                    )
                })
            }
        </div>
    )
}
