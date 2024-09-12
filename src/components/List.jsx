/* eslint-disable react/prop-types */
import * as Fa from 'react-icons/fa6'

function List({list, handleDelete, handleUpdate, handleCheck, line}) {
    return ( 
        <ul className="bg-zinc-600 h-96 overflow-y-scroll w-1/2 rounded-2xl">
            {
                list.map((item, index) => {
                const checkId = index
                const check = <Fa.FaCheck />
                    return <li className="text-xl text-white bg-amber-800 bg-opacity-25 px-4 py-3 rounded-3xl mx-20 my-10 flex justify-between text-center items-center" key={index}>
                        <div className={`flex gap-4 ${line}`}>
                            <label htmlFor={checkId}>
                                <input type="checkbox" onClick={() => handleCheck(index)}  className='peer hidden' name="checkbox" id={checkId} />
                                <span className={`w-5 inline-block h-5 relative after:top-[4px] after:left-[4px] after:w-2 after:h-2 
                                after:opacity-0 peer-checked:after:opacity-100 cursor-pointer after:bg-black after:absolute after:content-['']
                                after:text-black bg-white after:rounded rounded border-2 border-solid border-black`}></span>
                            </label>
                            {item}
                        </div>
                        <div className="flex gap-2">
                            <Fa.FaPen size={25} onClick={() => handleUpdate(index)} className='cursor-pointer rounded-full bg-green-700 p-2'  />
                            <Fa.FaX onClick={() => handleDelete(index)} size={25} className='cursor-pointer rounded-full bg-red-700 p-2' />
                        </div>
                    </li>
                })
            }
        </ul>
     );
}

export default List;