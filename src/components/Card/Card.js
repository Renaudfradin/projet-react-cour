import { useState } from 'react';
import './Card.css';

function Card(props) {
    const {produit} =props;
    const {price,name}=produit;

    const [ counter, setCounter ] = useState(1);

    function addquatity(){
        setCounter(counter + 1);
    }
    function removequatity() {
        if (counter > 0) {
            setCounter(counter - 1);
        } 
    }
    return(
        <div>
            <p>{price}</p>
            <p>{price * counter}</p>
            <p>{name}</p>
            <p>{counter}</p>
            <button onClick={addquatity}>+</button>
            <button onClick={removequatity}>-</button>
        </div>
    );
}

export default Card;