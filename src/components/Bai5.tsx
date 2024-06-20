import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch } from './bai5';
import { addRandomNumber } from './bai5';

export default function Bai5() {
  const numbers = useSelector((state: RootState) => state.randomNumbers.numbers);
  const dispatch: AppDispatch = useDispatch();

  const handleGenerate = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Tạo số ngẫu nhiên từ 1 đến 100
    dispatch(addRandomNumber(randomNumber));
  };
  return (
    <div>
      <button onClick={handleGenerate}>Generate Random Number</button>
      <div>
        {numbers.length > 0 ? (
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        ) : (
          <p>Danh sách số ngẫu nhiên trống.</p>
        )}
      </div>
    </div>
  )
}
