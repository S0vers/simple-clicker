import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  function reset() {
    setCount(0)
  }
  return (
    <div className='text-center grid h-screen place-items-center bg-cyan-200'>
      <div className='content-center'>
        <p className='text-4xl font-semibold text-gray-600'>Total Clicks</p>
        <p className='text-7xl font-extrabold text-rose-600'>{count}</p>
        <div className='py-5 grid lg:grid-cols-3 grid-cols-1 gap-4'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='button' onClick={increment}>Increment</button>
          <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' type='button' onClick={reset}>Reset</button>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type='button' onClick={decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
