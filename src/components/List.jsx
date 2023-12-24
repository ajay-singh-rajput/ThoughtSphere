import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const List = (props) => {

    const {thoughts, setthoughts} = props;
    console.log(props)

    const deleteHandler = (ind)=>{
        const thought = [...thoughts];
        thought.splice(ind, 1);
        setthoughts([...thought]);
        localStorage.setItem('thoughts', JSON.stringify(user));
        toast.warn('Thought deleted successfully')
    }
  return (
    <>
    
    <ol className='list-disc'>
        <h1>Your Thoughts</h1>
        {thoughts.map((th, ind)=>{
            return <li key={ind} ><Link>

            <h2>{th.title} helll</h2>
            <p>{th.description} sdsd</p>
            </Link></li>
        }).reverse()}

    </ol>
    
    </>
  )
}

export default List