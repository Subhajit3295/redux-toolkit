"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increment, decrement } from "@/lib/features/counter/counterSlice";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <main>
      <h1>Current Count is: {count}</h1>
      <button onClick={() => dispatch(increment())} className="bg-blue-500 px-5 py-2">+</button>
      <button onClick={() => dispatch(decrement())} className="bg-red-500 px-5 py-2">-</button>
    </main>
  );
}
