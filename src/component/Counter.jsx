import { useDispatch, useSelector } from "react-redux";
import { dercrementCounter, incrementCounter, reset } from "../state-management/actions/counter";
import { DECREMENT, INCREMENT, RESET } from "../state-management/constants/counterConstant";

const Counter = () => {
    
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    console.log(count)

    const handleClick = (value) => {
        if(value === INCREMENT){
            dispatch(incrementCounter());
        }else if ( value === DECREMENT){
            dispatch(dercrementCounter())
        }else if(value === RESET){
            dispatch(reset())
        }
    }
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <p>practice redux with counter app</p>
                <h1>counter: {count}</h1>
                <button onClick={() =>handleClick(INCREMENT)}>increase</button>
                <button onClick={() =>handleClick(DECREMENT)}>decrease</button>
                <button onClick={() =>handleClick(RESET)}>reset</button>
            </div>
        </div>
    );
};

export default Counter;