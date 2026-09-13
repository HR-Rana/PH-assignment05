
import img from '../../assets/images/Hero.png'

export default function Hero() {
    return (
        <div className='hero-section  flex justify-between justify-between  gap-10 py-[30px] grid grid-cols-12 '>
            <div className="left-content col-span-6 mx-auto lg:col-span-6 2xl:col-span-6 items-center flex  gap-6">
                <div className='flex flex-col gap-5'>
                    <h2 className='text-6xl font-bold'>Build Your Ideal
                        <span className='text-orange-600 font-bold'> Development Stack</span></h2>
                    <p className='my-7'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className='flex gap-5'>
                        <button className='bg-orange-600 px-2 py-2 c cursor-pointer rounded-sm text-white font-semibold'>Explore Technologies</button>
                        <button className='border-1 border-gray-700c cursor-pointer rounded-sm  p-3'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="right-content  flex text-right col-span-12 md:col-span-6 lg:col-span-6 2xl-col-span-6">
                <img className='hero-img w-full flex text-right ' src={img} alt="Hero image" />
            </div>
        </div>
    )
}
