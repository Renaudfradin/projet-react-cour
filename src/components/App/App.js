import List from '../List/List.js'
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
    return (
        <div>
            <List articles={articles}></List>
            
        </div>
    );
}
export default App;