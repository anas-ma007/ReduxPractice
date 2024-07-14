import randomColor from "randomcolor"


const Header = () => {
    const color = "black" // Change the color from "black" to randomColor(), then apply the action to the body component's color button.
    return (
        <div className='flex justify-between items-center bg-slate-300 h-[15%] border-4 border-black'>
            <a href={"/"} className=' font-bold text-3xl hidden md:block ml-3 '>
               Logo
            </a>
            <a href={"/"} className=' font-bold text-xl xs:block md:hidden ml-2'>
                Logo(Mobile)
            </a>
            <p style={{color : color}} className={`text-base md:text-xl font-bold mr-3  border-2 border-black p-2`} >Header - Count is 0</p>
        </div>
    )
}

export default Header