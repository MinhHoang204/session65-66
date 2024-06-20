// đi khởi tạo state
const initialCount: number=0;
// khởi tạo hàm xử lí
const countReducer=(state=initialCount, action:any)=>{
    switch (action.type) {
        case "INCREASE":
            return state+1
        case "DECREASE":
            return state-1
        default:
            return state    
    }
}
export default countReducer;