
import { use, useState } from 'react'
import TechnologyCard from './TechnologyCard'
import AddedTechnologiesList from './AddedTechnologiesList'

export default function Technologies({ DataPromise }) {

    const [selectedStack, setSelectedStack] = useState([]);


    const handleRemovePlayer = (data) => {
        const RemovePlayer = selectedStack.filter((item) => item.name !== data.name);

        setSelectedStack(RemovePlayer)

    }

    const allData = use(DataPromise)


    return (
        <div className='technology-section'>
            <div className="title"></div>
            <div className="techonology-data grid gap-5 grid-cols-12">
                <div className="left-site col-span-9">
                    <div className="grid grid-cols-3 gap-4"> {
                        allData.map((data) => {
                            return (
                                <TechnologyCard data={data} selectedStack={selectedStack} setSelectedStack={setSelectedStack} key={data.id} />
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
