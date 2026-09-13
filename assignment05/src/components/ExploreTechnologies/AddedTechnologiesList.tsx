import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';
import type { TechnologyTypes } from '../../types/technologyTypes';

export default function AddedTechnologiesList({ selectedStack, setSelectedStack, handleRemovePlayer }) {





    const handleRemoveAllStacks = (data: TechnologyTypes) => {
        toast.error(`All data are remove done`)
        setSelectedStack([]);

    }





    return (
        <div className='selected-technologies shadow-xs shadow-black  py-5 px-3'>
            <div className="title">
                <h3 className='font-bold text-xl'>Your Stacks</h3>
                <p className='text-gray-500 font-semibold mt-2'>{
                    selectedStack.length > 0 ? `${selectedStack.length} Technology Selected` : "No Technologies Selected yet."
                }</p>
            </div>
            <div className="stack-body mt-7 w-full   mx-auto py-3   rounded-sm">
                {
                    selectedStack.length < 1 ? <p className='text-gray-400 border py-7 text-center'>Your Stack is Empty</p> : selectedStack.map((data: TechnologyTypes) => {
                        return (
                            <div className='data-card rounded-md border-1 my-2 p-2 flex justify-between items-center border-black' key={data.id}>
                                <div className="left-content flex gap-5 w-40">
                                    <img src={data.icon} alt={data.name} className='w-[30px]' />
                                    <div>
                                        <h6 className='text-[14px] font-semibold'>{data.name}</h6>
                                        <p className='text-[11px]'>{data.category}</p>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <span className='text-[22px] cursor-pointer'
                                        onClick={() => handleRemovePlayer(data)}
                                    >
                                        <RxCross2 />
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                selectedStack.length > 1 ? <div className="remove-all w-full py-3 px-3">
                    <button
                        onClick={() => handleRemoveAllStacks()}
                        className='bg-red-700 text-white w-full rounded py-3 cursor-pointer'>Remove All</button>
                </div> : " "
            }
        </div>
    )
}
