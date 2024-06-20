// khởi tạo state
import { Job } from "../../interface";
const initialJob:Job[]= [
    {
        id:1,
        name: "hoc redux",
        status: false,
    },
    {
        id:2,
        name: "code redux",
        status: false,
    },
    {
        id:3,
        name: "thuc hanh redux",
        status: false,
    },
];
// khởi tạo hàm reducer
const jobReducer=(state=initialJob, action:any)=>{
   switch (action.type) {
    case "ADD":
        // them vao    
        return [...state];
    case "DELETE":
        // lay id phan tu can xoa    
        return [...state];
    case "UPDATE":
        // lay id cua phan tu can update    
        return [...state]; 
    default:
        return state;
   }
}
export default jobReducer;