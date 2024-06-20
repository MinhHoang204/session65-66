import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './bai4';
import { increment, decrement } from './bai4';
export default function Bai4() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  )
}
