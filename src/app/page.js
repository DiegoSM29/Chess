// "use client";

import HomePage from "@/components/homePage";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "./redux/slices/counterSlice";

export default function Home() {

  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div>      
      {/* <button onClick={() => dispatch(increment())} className="bg-gray-200" aria-label="Increment value"> + </button>
      <span className="text-red-500 w-12 h-12 bg-green-400 ml-2"> {count} </span>
      <button onClick={() => dispatch(decrement())} className="bg-red-200 ml-2"> - </button>
      <button onClick={() => dispatch(incrementByAmount([1,2,3,4]))} className="bg-red-200 ml-2"> gaaaa </button> */}
      <HomePage />            
      {/* <span className="text-red-500 w-12 h-12 bg-green-400 "> count </span>   averiguar por que pasa esto*/} 
    </div>
  );
}
