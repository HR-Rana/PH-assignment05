
import { use } from 'react'
import TechnologyCard from './TechnologyCard'
import AddedTechnologiesList from './AddedTechnologiesList'

export default function Technologies({ DataPromise }) {

    const allData = use(DataPromise)
    console.log(allData)

    return (
        <div className='technology-section'>
            <div className="title"></div>
            <div className="techonology-data grid grid-cols-12">
                <div className="left-site col-span-9"> <TechnologyCard data={allData} /></div>
                <div className="left-site col-span-3">
                    <AddedTechnologiesList />
                </div>
            </div>
        </div>
    )
}
