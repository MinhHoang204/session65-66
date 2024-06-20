import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './bai2';
import { deleteUser } from './bai2';

export default function Bai2() {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.gender}</td>
            <td>{user.dateBirth}</td>
            <td>{user.address}</td>
            <td>
              <button>Sửa</button>
              <button onClick={() => handleDelete(user.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
