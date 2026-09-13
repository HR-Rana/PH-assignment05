
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';
import type { TechnologyTypes } from '../../types/technologyTypes';
import type { Dispatch, SetStateAction } from "react";

interface TechnologyCardProps {
    selectedStack: TechnologyTypes[];
    setSelectedStack: Dispatch<SetStateAction<TechnologyTypes[]>>;

    data: TechnologyTypes;

    addedToStack: boolean;
    setAddedToStack: Dispatch<SetStateAction<boolean>>;
}


export default function TechnologyCard({
    selectedStack,
    setSelectedStack,
    data,
    setAddedToStack,

}: TechnologyCardProps) {


    const isAdded = selectedStack.some(
        (item: TechnologyTypes) => item.id === data.id
    );

    const selectedTechnologie = () => {
        setAddedToStack(true);
        setSelectedStack([...selectedStack, data])

        toast.success(`${data.name} is Added successfully`)

    }

    return (
        <div className='technologies-card'>
            <div className='Card p-4 shadow-xs shadow-black data-stretch'>
                <div className="card-header flex justify-between my-3">
                    <div className="icon">
                        <img src={data.icon} alt={data.name} className='w-[60px]' />
                    </div>
                    <div className="text">
                        <p className='bg-gray-400 p-1 rounded'>{data.badge}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className='font-bold text-xl my-2'>{data.name}</h4>
                    <p className='my-5 text-gray-500'>{data.description}</p>
                </div>
                <div className="card-footer ">
                    <div className='flex data-center justify-between text-[12px] font-semibold my-3'>
                        <h6 className='bg-gray-200 rounded p-[5px]'>{data.category}</h6>
                        <p className=''>{data.difficulty}</p>
                        <span className='flex gap-[5px] data-center'><span className='text-orange-400'><FaStar /></span>{data.rating}</span>
                    </div>
                </div>
                <button

                    onClick={() => selectedTechnologie()}
                    disabled={isAdded}
                    className='bg-black  w-full p-2 my-2 text-white capitilized cursor-pointer rounded'>
                    {
                        isAdded === true ? "Added" : "Add to Stack"
                    }
                </button>
            </div>
        </div>
    )
}
