import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Greeter = () => {

    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const greeting = useSelector(state => state.greeting);

    const greetHandler = ()=>{
        dispatch({type:'greeting', name: name});
        setName('');
    }

    let page = (
        <div>
            <div>{greeting}</div>
            <div>
                Name:
                <input type='text' name='name' value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <button onClick={greetHandler}>Show Greeting</button>
            </div>
        </div>
    );

    return page;

}

export default Greeter;