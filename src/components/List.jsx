/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import * as Fa from 'react-icons/fa6'

function List({ id, handleDelete, handleUpdate, handleCheck, item, handleEdit, editText, editIndex, setEditIndex, setEditTask}) {
    //  handleCheck()

    return ( 
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, ease: 'easeIn', type: 'spring'}}
        className="flex justify-between items-center text-wrap bg-amber-800 bg-opacity-25 m-4 px-4 py-3 rounded-3xl text-center text-white text-sm">
            <div className={`flex gap-4 items-center justify-center`}>
                <label htmlFor={id}>
                    <input type="checkbox" onClick={() => handleCheck(id)} className='hidden peer' name="checkbox" id={id} />
                    <span className={`w-5 inline-block h-5 relative after:top-[4px] after:left-[4px] after:w-2 after:h-2 
                    after:opacity-0 peer-checked:after:opacity-100 cursor-pointer after:bg-black after:absolute after:content-['']
                    after:text-black bg-white after:rounded rounded border-2 border-solid border-black`}></span>
                </label>
                {editIndex === id ? (
                    <input type="text" className='bg-white h-10 lg:w-80 w-32 rounded-3xl md:w-60 p-4 text-black' value={editText} onChange={(e) => setEditTask(e.target.value)} />
                ) :
                <p className={`${item.isCompleted ? 'line-through' : 'no-underline'} md:text-xl text-xs`}>{item.description}</p>
                }
            </div>
            <div className="flex gap-2">
                {editIndex === id ? (
                    <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    onClick={() => handleEdit(id)} style={{ marginLeft: '10px' }} className='bg-blue-800 p-2 rounded-2xl'>
                        Save
                    </motion.button>
                    ) : (
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}

                        onClick={() => {
                        setEditIndex(id); // Enter edit mode
                        setEditTask(item.name); // Pre-fill input with the current task name
                        }}
                        style={{ marginLeft: '10px' }}
                    >
                        <Fa.FaPen size={25} className='bg-green-700 p-2 rounded-full cursor-pointer'  />        
                    </motion.button>
                )}
                <motion.div
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    <Fa.FaX onClick={() => handleDelete(id)} size={25} className='bg-red-700 p-2 rounded-full cursor-pointer' />
                </motion.div>
                {/* <Fa.FaCheck onClick={() => handleCheck(id)} size={25} className='bg-blue-700 p-2 rounded-full cursor-pointer' /> */}
            </div>
        </motion.div>
     );
}

export default List;