import * as Fa from 'react-icons/fa6'

function Input({handleClick, handleChange, value}) {
    return ( 
        <div className="flex justify-center items-center gap-4">
            <input type="text" value={value} onChange={handleChange} className="w-96 h-14 rounded-3xl bg-white shadow-2xl p-6" />
            <Fa.FaPlus size={50} onClick={handleClick} className='bg-slate-500 p-3 cursor-pointer  rounded-full text-white' />
        </div>
     );
}

export default Input;