import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './bai6';
import { changeCompany } from './bai6';
export default function Bai6() {
  const company = useSelector((state: RootState) => state.company.name);
  const dispatch: AppDispatch = useDispatch();

  const handleChangeState = () => {
    dispatch(changeCompany("RikkeiSoft"));
  };
  return (
    <div>
      <h1>Company: {company}</h1>
      <button onClick={handleChangeState}>Change state</button>
    </div>
  )
}
