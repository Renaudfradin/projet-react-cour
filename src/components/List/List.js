import Article from '../Article/Article.js'
function List(props) {
    const { articles, categories } = props;
    return (
        <div>
            {articles.map(art => <Article arts={art} categories={categories} key={art.id}></Article> )}
        </div>
    );
}
export default List;
