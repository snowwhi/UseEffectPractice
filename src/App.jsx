
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [user,setUserdata]=useState([])
  const [index,setIndex]=useState(1)
const getData = async () => {
  const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=6`);
  const jsonData = await response.json();
     setUserdata(jsonData);
};
 const handleprev=()=>{
  if(index>1){
    setIndex((prev)=>(prev-1))
  }
 }
 const handleNext=()=>{
  setIndex((prev)=>(prev+1))
  
 }
 useEffect(()=>{
getData()

 },[index])
 
  return (
   <>
   <div className='bg-white h-screen w-full relative '>
    <h1 className='font-bold text-black text-3xl text-center pt-10 '>Image Gallery</h1>
    <div className='flex flex-wrap justify-around items-center px-10 py-5 gap-y-5'>

   {user.map(function (elem, idx) {
     return (
       <div key={idx}>
      <div className='h-64 w-92 object-cover overflow-hidden   shadow-lg  shadow-gray-300'>
       <a href={elem.download_url} target='_blank'> <img  className=' h-full w-full 'src={elem.download_url }/> </a>
      </div>
      <div className='flex justify-between items-center mt-2'>
      <a href={elem.url} target='_blank'><h1 className='  hover:text-gray-500' >{elem.author}</h1></a>
       <a href={elem.download_url} target='_blank'><h1 className=' hover:text-gray-500' > id#{elem.id}</h1></a>
      </div>
    </div>
  );
})}
   </div>
   <div className='flex justify-center gap-2'>
   <button onClick={handleprev} className='bg-gray-300 p-3 rounded hover:scale-95 hover:bg-gray-500' >Prev</button>
   <h1 className='pt-2'>Page{index}</h1>
   <button onClick={handleNext} className='bg-gray-300 p-3 rounded hover:scale-95 hover:bg-gray-500'>Next</button>
   </div>
</div>
   </>
  )
}

export default App
