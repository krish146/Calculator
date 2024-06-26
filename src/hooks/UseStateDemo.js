import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import {Content} from './../Content.js'

const UseStateDemo = () => {
    const [count, setCount] = useState(0);
    
    function incrementCounter() {
        setCount(count + 1);
    }

    function decrementCounter() {
        setCount(count - 1);
    }

    return ( 
        <div>
            <Button onClick={incrementCounter}>+</Button>
            <span>
                {count}
            </span>
            <Button onClick={decrementCounter}>-</Button>
        </div>
    );
}
 
export default UseStateDemo;
