import { motion, useAnimate } from 'framer-motion';
import * as Fa from 'react-icons/fa6'

function Input({handleClick,value, setValue, scope}) {
    return ( 
        <motion.div className="flex items-center justify-center gap-4">
            <motion.input 
            whileHover={{boxShadow: '0 1px 10px 0 white'}}
            whileTap={{scale: 0.9}}
            type="text" value={value} onChange={(e) => setValue(e.target.value)} className="p-6 bg-white shadow-2xl shadow- rounded-3xl md:w-96 w-80 h-14" />
            <motion.button 
            whileHover={{scale: 1.1}}
            whileTap={{
                scale: 0.8
            }}
            transition={{duration: .2, ease: 'backInOut', type: 'keyframes'}}
            onClick={handleClick} 
            className='p-2 text-white bg-blue-800 rounded-full cursor-pointer '>
                <Fa.FaPlus ref={scope} size={30}/>
            </motion.button>
        </motion.div>
     );
}

export default Input;