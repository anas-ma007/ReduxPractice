import randomColor from "randomcolor"


const Body = () => {
  const color = "white" // Change the color from "white" to randomColor(), then apply the action to the body component's color button.
    return (
        <div className=' w-screen mx-auto flex items-center justify-center border-x-4 border-black bg-red-300 h-[70%]'>
            <div className='md:w-3/4 w-[80%] h-[60%] md:h-[55%] flex items-center justify-center bg-slate-400'>
                <div className='text-center'>
                    <p className='font-bold underline text-xl hidden md:block from-neutral-700'>Body Component </p>
                    <p className='font-bold underline text-base md:hidden   from-neutral-700'>Body Component (Mob Screen) </p>
                    <p style={{backgroundColor : color}} className='mt-4 font-semibold text-base md:text-xl border-2 border-black py-2 mb-2'>Body - Count is 0</p>
                    <button className="bg-slate-600 hover:bg-slate-800 text-base md:text-xl px-6 md:px-19 py-1 md:py-1.5 m-2 md:m-3 rounded-lg font-semibold text-white border-2 border-red-400 hover:scale-110"> Increase </button>
                    <button className="bg-slate-600 hover:bg-slate-800 text-base md:text-xl px-6 md:px-19 py-1 md:py-1.5 m-2 md:m-3 rounded-lg font-semibold text-white border-2 border-red-400 hover:scale-110"> Decrease </button>
                    <div>
                        <button className=" bg-rose-200 border-2 border-red-400 hover:scale-110  text-base md:text-xl px-6 md:px-19 py-1 md:py-1.5 mt-1 md:mt-1  rounded-2xl font-semibold text-black"> Change Color </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body