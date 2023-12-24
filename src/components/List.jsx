import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const List = (props) => {

    const {thoughts, setthoughts} = props;

    const deleteHandler = (ind)=>{
        const thought = [...thoughts];
        thought.splice(ind, 1);
        setthoughts([...thought]);
        localStorage.setItem('thoughts', JSON.stringify(thought));
        toast.warn('Thought deleted successfully')
    }
  return (
    <>
    
    <ol className='flex whitespace-wrap flex-wrap '>
        <h1>Your Thoughts</h1>
        {thoughts.map((th, ind)=>{
            return <li key={ind} className='inline-block' >
            <div className="container mx-4 my-4">
  
  <div className="w-64 border bg-slate-100">
    <div className="p-4"><Link  className='flex flex-col items-start'>
      <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{th.title}</h5>
      <p>{th.description}</p></Link>
      <Link to={`/list/edit/${th.title}`} className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Edit</Link>
      <div onClick={()=>{deleteHandler(ind)}} className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 inline-block mt-4 rounded">Delete</div>
    </div>
  </div>
</div>

            </li>
        }).reverse()}

    </ol>
    
    </>
  )
}

export default List