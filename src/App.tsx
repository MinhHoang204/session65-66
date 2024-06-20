import React from 'react'
import Count from './components/Count'
import Job from './components/Job'
import Bai1 from './components/bai1'
import Bai2 from './components/bai2'
import Bai3 from './components/bai3'
import Bai4 from './components/bai4'
import Bai5 from './components/bai5'
import Bai6 from './components/bai6'
import Bai7 from './components/bai7'
import Login from './components/bai9/Login'
import Register from './components/bai9/Register'
export default function App() {
  return (
    <div>App
      {/* 
        Redux: là 1 thư viện bên thứ 3 giúp cho react có thể quản lí dữ liệu tập trung
        giúp tạo 1 cái kho chứa dữ liệu tập trung các component muốn tương tác với 
        dữ liệu thì tương tác trực tiếp không cần phải truyền dữ liệu các component
        redux là 1 thư viện, reactjs cũng là thư viện 
        redux có thể kết hợp với nhiều thư viện khác, có thể kết hợp với js thuần chứ 
        không phải redux là của react sinh ra
        1. cài đặt được kho chứa dữ liệu bằng redux
          - xem các bước cái đặt như thế nào
          - nhớ thứ tự luồng chạy của nó
          B1: cài đặt 2 thư viện 
            + react-redux
            + redux
            sau khi cài xong vào packeage.json xem có chưa?
          B2: đi thiết lập store
          - Bên trong store chứa nhiều reducer
          - reducer là gì?
             + reducer bản chất là những cái hàm , function thôi
             + nhiệm vụ của reducer là tính toán, xử lí trả về state mới
          B3: tạo store
            + import createStore from "redux"
            + import hàm reducer vào     
        2. tương tác dữ liệu với kho chứa đấy.
          1. lấy ra state dung thì dùng useSlector
          2. bắn action, hành động thì dùng useDispatch

      */}
      <Count></Count>
      <Job></Job>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
      <Login></Login>
      <Register></Register>
    </div>
  )
}
