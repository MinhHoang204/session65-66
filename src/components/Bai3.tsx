import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from './bai3';
import { deleteProduct } from './bai3';

export default function Bai3() {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng (kg)</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
              <button>Sửa</button>
              <button onClick={() => handleDelete(product.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
