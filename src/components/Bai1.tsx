import React from 'react'
import { useSelector } from 'react-redux';
import {RootState} from "./bai1";
export default function Bai1() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <h1>Profile</h1>
      <p>ID: {user.id}</p>
      <p>User Name: {user.userName}</p>
      <p>Gender: {user.gender}</p>
      <p>Date of Birth: {user.dateBirth}</p>
      <p>Address: {user.address}</p>
    </div>
  )
}
