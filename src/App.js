import { useEffect, useState } from 'react';
import './App.css';
import { AiOutlineLoading3Quarters ,AiOutlineDoubleRight } from 'react-icons/ai';

function App() {
  const [item,setItem] = useState([]);
  const [selectItem,setSelectItem] =useState([]);
  const [classAdd,setClassAdd] =useState();

  const getItem = async ()=>{
    const feching = await fetch('https://fakestoreapi.com/users');
    const resFeching = await feching.json();
    setItem(resFeching.filter((item)=>item.id<4));
    setSelectItem(...resFeching.filter((items)=>items.id===1))
  }
  useEffect(()=>{
    getItem();
  },[]);
  console.log(item);
  console.log(selectItem);
  const clickHandler = (items)=>{
    setSelectItem(items);
  }
  console.log(selectItem.id)
  return (

    <div className="App">
    
    {item.length >0 && selectItem ? 
      <div className='mx-2' >
        <div className="h-screen grid grid-cols-7 grid-flow-col gap-4">
          <div className='w-full flex flex-col justify-center align-middle col-span-2 row-span-full m-auto'>
          {item.map((items)=><button onClick={()=>clickHandler(items)} className={` ${selectItem.id === items.id ? 'bg-pink-900': ''} m-auto rounded p-2 text-white hover:border-red-50 shadow-md opacity-80 hover:bg-gray-600 duration-500 w-40 md:w-2/3 xl:w-3/5 my-1`} key={items.id}>{`${items.name.firstname} ${items.name.lastname}`}</button>)}
          </div>
          
          <div className='border-gray-900 col-span-5 row-span-full flex justify-center align-middle border-l-2 my-auto mx-5'>
            <div className='w-full border border-gray-500 rounded-md shadow-md overflow-hidden bg-gray-700 p-2'>
              <h1 className='text-left py-2 uppercase '>Font-End Developer</h1>
              <h1 className='text-left my-2 p-2 bg-gray-400 m-2 rounded w-32'>{selectItem?.name?.firstname} {selectItem?.name?.lastname}</h1>
              <h1 className='text-left p-2 opacity-50'>November/29/2021</h1>
              <div className="flex flex-cols justify-center align-middle">
                <AiOutlineDoubleRight className='text-8xl mr-2'/>
                <h1>Take advantage of text’s 98% open rate with SMS marketing campaigns. Conversational SMS marketing that gets a response. More Reviews. Attract More Customers. Local SEO & Insights. Brands: Google, Facebook, Edmunds, Yellow Pages, Houzz,, DealerRater, Cars.com, TripAdvisor, Avvo.</h1> 
              </div>
              <div className="flex flex-cols">
                <AiOutlineDoubleRight className='text-8xl mr-2'/>
                <h1>Take advantage of text’s 98% open rate with SMS marketing campaigns. Conversational SMS marketing that gets a response. More Reviews. Attract More Customers. Local SEO & Insights. Brands: Google, Facebook, Edmunds, Yellow Pages, Houzz,, DealerRater, Cars.com, TripAdvisor, Avvo.</h1> 
              </div><div className="flex flex-cols">
                <AiOutlineDoubleRight className='text-8xl mr-2'/>
                <h1>Take advantage of text’s 98% open rate with SMS marketing campaigns. Conversational SMS marketing that gets a response. More Reviews. Attract More Customers. Local SEO & Insights. Brands: Google, Facebook, Edmunds, Yellow Pages, Houzz,, DealerRater, Cars.com, TripAdvisor, Avvo.</h1> 
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="w-screen h-screen flex flex-col justify-center align-middle m-auto font-medium">
        <div className='m-auto'> <AiOutlineLoading3Quarters className="animate-spin m-auto font-medium text-6xl mb-5"/>Loading...</div>  
      </div>
    }
    </div>
  );
}

export default App;
