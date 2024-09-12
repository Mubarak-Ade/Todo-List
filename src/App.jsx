import { useState } from "react"
import Input from "./components/Input"
import List from "./components/List"
import Navbar from "./components/navbar";

function App() {
  
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [line, setLine] = useState("no-underline");
  
  
  

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    const lists = [...list];
    lists.push(value)
    if (value !== "") {
      setList(lists)
    } else {
      setValue("")
    }
    console.log(lists);
    
  }

  const handleDelete = (id) => {
    setList(list.filter((list, index) => index !== id))
  }

  const handleUpdate = (id) => {
    setList(list.filter((list, index) => index === id))
    handleDelete(id)
  }

  const handleCheck = (e) => {
    setLine(e.checked )
    console.log("checked");
    
  }

  return (
    <div className="bg-gradient-to-tr from-[#b79891] to-[#94716b] space-y-10 w-full h-screen">
      <Navbar list={list} />
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <Input handleClick={handleClick} handleChange={handleChange} value={value} />
        <List list={list} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck} line={line} />
      </div>
    </div>
  )
}

export default App
