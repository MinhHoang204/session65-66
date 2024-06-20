import { useDispatch, useSelector } from 'react-redux'

export default function Count() {
    const countState:any = useSelector(state=>{
        return state;
    })
    console.log(111111, countState);
    
    const dispatch = useDispatch();
    // console.log(111111,countState);
    const increase=()=>{
        dispatch({
            type: "INCREASE"
        })
    }
    const decrease=()=>{
        dispatch({
            type: "DECREASE"
        })
    }
  return (
    <div>Count
        <p>giá trị biến count: {countState.countReducer}</p>
        <button onClick={increase}>tang</button>
        <button onClick={decrease}>giam</button>
    </div>
  )
}
