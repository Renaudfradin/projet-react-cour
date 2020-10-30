import {useEffect,useState} from 'react';
import useArticle from '../../hooks/useArticle/useArticle.js'
import useCategory from '../../hooks/useCategory/useCategory.js'
import List from '../List/List.js'
//import Listitem from '../Listitem/Listitem.js'
import Containerss from '../Containerss/Containerss.js'
import Cart from '../Cart/Cart.js'
import Title from '../Title/Title.js'
import Filter from '../Filter/Filter.js'
import { Link } from 'react-router-dom'
function ArticlePage() {
    const [titre, setTitre]=useState("projet cour");
    const articles  = useArticle();
    const categories  = useCategory();

    useEffect(()=>{
        setTitre(titre,document.title=titre);
    },[titre])

    const [filters, setFilters] = useState({
        title: '',
        category: '',
        published: ''
    });
    function handleFilterChange(event) {
        setFilters({
          ...filters,
          [event.target.name]: event.target.value
        });
    }
    const filteredArticles = articles
        .filter(art => art.title.includes(filters.title))
        .filter(art => filters.category === '' || art.category === Number(filters.category))
        .filter(art => filters.published === '' || (art.published === true && filters.published === 'published') || (art.published === false && filters.published === 'draft'));



    return (
        <div>
            <Link to="/article">nouveau article</Link>
            <Containerss> 
                <Filter categories={categories} category={filters.category} published={filters.published} title={filters.title} handleFilterChange={handleFilterChange}></Filter>
                <List articles={filteredArticles} categories={categories}></List>
            </Containerss>
            <Title titre={titre}></Title>
            <Cart></Cart>
        </div>
    );
}
export default ArticlePage;
