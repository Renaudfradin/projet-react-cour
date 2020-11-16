import './Card.css';

function Card(props) {
    const {product,updateQuantity} =props;
    const {name,price,quantity} = product;
    const total = price*quantity;
    //const [ counter, setCounter ] = useState(1);

    function addquatity(){
        updateQuantity(quantity + 1);
    }
    function removequatity() {
        if (quantity > 0) {
            updateQuantity(quantity - 1);
        } 
    }
    return(
        <div>
            <p>{price}</p>
            <p>{name}</p>
            <p>{total}</p>
            <button onClick={addquatity}>+</button>
            <button onClick={removequatity}>-</button>
        </div>
    );
}

export default Card;