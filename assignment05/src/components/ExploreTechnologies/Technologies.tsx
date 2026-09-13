
import { use, useState } from 'react'
import TechnologyCard from './TechnologyCard'
import AddedTechnologiesList from './AddedTechnologiesList'
import type { TechnologyTypes } from '../../types/technologyTypes';
import { toast } from 'react-toastify';


interface DataProps {
    DataPromise: Promise<TechnologyTypes[]>;
    // handleRemovePlayer: (data: TechnologyTypes) => void;
}


export default function Technologies({ DataPromise }: DataProps) {
    const [addedToStack, setAddedToStack] = useState<boolean>(false);
    const [selectedStack, setSelectedStack] = useState<TechnologyTypes[]>([]);


    const handleRemovePlayer = (data: TechnologyTypes): void => {
        const RemovePlayer = selectedStack.filter((item: TechnologyTypes) => item.id !== data.id);
        setSelectedStack(RemovePlayer);
        toast.error(`${data.name} is Remove`)

    }



    const allData: TechnologyTypes[] = use(DataPromise)


    return (
        <div className='technology-section '>
            <div className="title"></div>
            <div className="techonology-data flex-col sm:block  md:block lg:flex 2xl:grid grid gap-5 grid-cols-12">
                <div className="left-site col-span-9">
                    <div className="sm:grid-cols-2 md:grid-cols-2 grid  lg:grid-cols-3 2xl:grid-cols-3 gap-4"> {
                        allData?.map((data: TechnologyTypes) => {
                            return (
                                <TechnologyCard data={data} addedToStack={addedToStack} setAddedToStack={setAddedToStack} selectedStack={selectedStack} setSelectedStack={setSelectedStack} key={data.id} />
                            )
                        })

                    }
                    </div>

                </div>
                <div className="left-site col-span-3">
                    <AddedTechnologiesList selectedStack={selectedStack} setSelectedStack={setSelectedStack} handleRemovePlayer={handleRemovePlayer} />
                </div>
            </div>
        </div>
    )
}
