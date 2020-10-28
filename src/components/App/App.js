import List from '../List/List.js'
import Listitem from '../Listitem/Listitem.js'
function App() {
    const articles = [
        {
            "id":1,
            "title":"1er article",
            "published":false
        },
        {
            "id":2,
            "title":"2er article",
            "published":true
        },
        {
            "id":3,
            "title":"3er article",
            "published":false
        },
        {
            "id":4,
            "title":"4er article",
            "published":false
        }
    ];
    const produit = [
        {   
            "id":1,
            "price":15,
            "name":"PC"
        },
        {
            "id":2,
            "price":10000,
            "name":"PC1"
        },
        {
            "id":3,
            "price":50,
            "name":"PC2"
        },
        {
            "id":4,
            "price":5,
            "name":"PC3"
        },
        {
            "id":5,
            "price":150,
            "name":"PC4"
        }
    ]
    return (
        <div>
            <List articles={articles}></List>
            <Listitem produit={produit}></Listitem>
        </div>
    );
}
export default App;