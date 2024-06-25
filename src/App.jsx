import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState({ desc: "", isCompleted: false });
  const [showCompleted, setshowCompleted] = useState(false);

  

  const handleAdd = (e) => {
    if (todo.desc !== "") {
      todo.id = uuidv4();
      settodos([...todos, todo]);
      settodo({ ...todo, desc: "", id: "" });
    }
  }

  const handleEdit = (x) => {
    if (todo.desc === "") {
      const index = todos.findIndex(item => item.id === x);
      settodo(todos[index]);
      handleDelete(x);
    }
    else {
      alert("Please add the note in the input box");
    }

  }

  const handleDelete = (x) => {
    const index = todos.findIndex(item => item.id === x);
    todos.splice(index, 1);
    settodos([...todos]);
  }

  const handleCheck = (x) => {
    const index = todos.findIndex(item => item.id === x);
    todos[index].isCompleted = !(todos[index].isCompleted);
    settodos([...todos]);
  }

  const handleList = () => {
    setshowCompleted(!(showCompleted));
  }

  return (
    <div>
      <div className='bg-violet-200 w-9/12 min-h-[80vh] m-auto p-10 rounded-3xl shadow-xl mb-16 max-md:w-11/12 max-[450px]:p-5'>
        <div className='text-center text-3xl font-bold text-violet-900 mb-14 max-md:text-2xl'>✔ <span className='underline'>To-Do List</span></div>
        <div className='text-violet-900 text-2xl font-bold mb-5 max-md:text-xl'>Add a To-Do</div>
        <div className='flex mb-10 justify-between'>
          <input type="text" name='task' id='hello' className='w-10/12 p-3 rounded-lg max-md:h-10 max-md:text-sm' value={todo.desc} onChange={e => { settodo({ ...todo, desc: e.target.value }) }} />
          <button onClick={handleAdd} className='bg-violet-800 text-white p-2 rounded-lg ml-14 box-border w-20 hover:bg-violet-700 max-md:ml-3 max-md:h-10 max-md:flex max-md:items-center max-md:justify-center max-md:text-sm'>Add</button>
        </div>
        <div className='text-violet-900 text-2xl font-bold mb-5 max-md:text-xl'>Your To-Dos</div>
        <div>
          <div className='text-violet-900 text-xl font-bold mb-5 max-md:text-lg'>Show Compeleted Tasks <span className='ml-'><input type="checkbox" onChange={handleList} /></span>
          </div>
          {todos.map(item => {
            if (showCompleted) {
              return <div className='bg-violet-100 p-5 rounded-xl flex mb-3 items-center max-md:p-4' key={uuidv4()}>
                <input type="checkbox" className='mr-3' checked={item.isCompleted} onChange={() => handleCheck(item.id)} />
                <span className={`w-full p-2 max-md:whitespace-nowrap max-md:overflow-x-auto max-md:text-sm ${item.isCompleted? 'line-through' : ''}`}>{item.desc}</span>
                <button onClick={() => handleEdit(item.id)} className={`bg-violet-800 text-white p-2 rounded-lg ml-14 box-border w-20 hover:bg-violet-700 h-10 ${item.isCompleted?'hidden':'flex'} max-md:ml-3 max-md:h-10 max-md:items-center justify-center max-md:text-sm`}>Edit</button>
                <button onClick={() => handleDelete(item.id)} className={`bg-violet-800 text-white p-2 rounded-lg ml-3 box-border w-20 hover:bg-violet-700 h-10 max-md:h-10 max-md:flex max-md:items-center max-md:justify-center max-md:text-sm max-sm:ml-1`}>Delete</button>
              </div>
            } else {
              if (item.isCompleted === false) {
                return <div className='bg-violet-100 p-5 rounded-xl flex mb-3 items-center max-md:p-4' key={uuidv4()}>
                  <input type="checkbox" className='mr-3' onChange={() => handleCheck(item.id)} />
                  <span className='w-full p-2 max-md:whitespace-nowrap max-md:overflow-x-auto max-md:text-sm'>{item.desc}</span>
                  <button onClick={() => handleEdit(item.id)} className='bg-violet-800 text-white p-2 rounded-lg ml-14 box-border w-20 hover:bg-violet-700 h-10 max-md:ml-3 max-md:h-10 max-md:flex max-md:items-center max-md:justify-center max-md:text-sm'>Edit</button>
                  <button onClick={() => handleDelete(item.id)} className='bg-violet-800 text-white p-2 rounded-lg ml-3 box-border w-20 hover:bg-violet-700 h-10 max-md:h-10 max-md:flex max-md:items-center max-md:justify-center max-md:text-sm max-sm:ml-1'>Delete</button>
                </div>
              }
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default App
