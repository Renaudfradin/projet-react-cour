import Article from '../Article/Article.js'
function List(props) {
    const { articles } = props;
    return (
        <div>
            {articles.map(art => <Article arts={art} key={art.id}></Article> )}
        </div>
    );
}
export default List;