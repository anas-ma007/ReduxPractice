
const Header = () => {
    return (
        <div className='flex justify-between items-center bg-slate-300 h-[15%] border-4 border-black'>
            <a href={"/"} className=' font-bold text-3xl hidden md:block ml-3 '>
               Logo
            </a>
            <a href={"/"} className=' font-bold text-xl xs:block md:hidden ml-2'>
                Logo(Mobile)
            </a>
            <p className='text-base md:text-xl font-bold mr-3'>Count 0</p>
        </div>
    )
}

export default Header