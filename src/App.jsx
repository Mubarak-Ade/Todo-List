import { useEffect, useRef, useState } from "react"
import Input from "./components/Input"
import List from "./components/List"
import Navbar from "./components/navbar";
import { useAnimate, motion, useInView, AnimatePresence, } from "framer-motion";

function App() {

	let storage = JSON.parse(localStorage.getItem('Tasks'))

	const [value, setValue] = useState("");
	const [list, setList] = useState(() => {
		const savedTasks = localStorage.getItem('Tasks')
		return savedTasks ? JSON.parse(savedTasks) : []
	});
	const [editIndex, setEditIndex] = useState(null)
	const [editTask, setEditTask] = useState('')
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		if (isInView) {
			animate(scope.current, { opacity: 1 }, { duration: 5 })
		}
	}, [isInView])

	useEffect(() => {
		localStorage.setItem('Tasks', JSON.stringify(list));
	}, [list]);

	const handleClick = () => {
		if (value.trim()) {
			// let newTask = { id: Date.now(), description: value, isCompleted: false };
			setList([...list, { description: value, isCompleted: false }]);
			setValue('')
		}
	}

	let handleCheck = (id) => {
		const update = list.map((task, index) => {
			if (index === id) {
				return { ...task, isCompleted: !task.isCompleted }
			}
			return task;
		});
		setList(update)
	}

	const handleDelete = (id) => {
		setIsDeleting(true)
		setTimeout(() => {
			setList(list.filter((list, index) => index !== id))
			setIsDeleting(false)
		}, 1000)
	}

	const handleUpdate = (id) => {
		setList(list.filter((list, index) => index === id))
		handleDelete(id)
	}

	const handleEdit = (id) => {
		const update = list.map((task, index) => {
			if (index === id) {
				return { ...task, description: editTask }
			}
			return task;
		});
		setList(update)
		setEditIndex(null)
		setEditTask('')
	}

	useEffect(() => {
		localStorage.setItem('Tasks', JSON.stringify(list))
	}, [list])



	return (
		<div className="space-y-10 bg-gradient-to-tr from-[#b79891] to-[#94716b] w-full min-h-screen">
			<Navbar />
			<div className="flex flex-col items-center justify-center w-full gap-5">
				<Input handleClick={handleClick} value={value} scope={scope} setValue={setValue} />
				<AnimatePresence>
					<ul className="w-4/5 overflow-y-scroll bg-zinc-600 rounded-2xl md:w-1/2 max-h-96">
						{list.map((item, index) =>
							<List handleDelete={handleDelete} handleUpdate={handleUpdate} item={item}
								setEditIndex={setEditIndex} setEditTask={setEditTask} key={index} id={index}
								handleEdit={handleEdit} editText={editTask} editIndex={editIndex} handleCheck={handleCheck} setList={setList} />
						)
						}
					</ul>
				</AnimatePresence>
			</div>
			<div className="flex items-start justify-center">
				<motion.img
				initial={{opacity: 0}}
				animate={isDeleting ? { 
					opacity: [0, 1, 0]} :
					{opacity: 0}
				}
				transition={{
					duration: 1,
				}}
				src="../src/assets/trash-open.png" className="absolute top-0 right-0 size-20 " alt="" />
				<motion.img 
				initial={{opacity: 0}}
				animate={isDeleting ? { 
					opacity: [1, 0, 1]} :
					{opacity: 0}
				}
				transition={{
					duration: 1,
				}}
				src="../src/assets/trash-close.png" className="absolute top-7 right-5 size-12" alt="" />
			</div>
		</div>
	)
}

export default App
