import {
  decrement,
  increment,
  incrementByValue,
} from './redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="max-w-7xl mx-auto h-screen flex justify-center items-center ">
      <div className="flex flex-col gap-10 border border-blue-700 p-10 rounded-md">
        <h1 className="text-3xl text-center">{count}</h1>
        <div className="flex gap-5">
          <button
            onClick={() => dispatch(incrementByValue({ value: 5 }))}
            className="bg-green-500 text-white px-5 py-3 rounded-lg text-xl"
          >
            Increment By value
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 text-white px-5 py-3 rounded-lg text-xl"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-5 py-3 rounded-lg text-xl"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
