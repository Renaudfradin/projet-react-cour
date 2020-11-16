import Card from '../Card/Card.js'
function Listitem(props) {
    const { produit } = props;
    return (
        <div>
            {produit.map(produit => <Card produit={produit} key={produit.id}></Card> )}
        </div>
    );
}
export default Listitem;