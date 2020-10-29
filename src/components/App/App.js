import {useEffect,useState} from 'react';
import useArticle from '../../hooks/useArticle/useArticle.js'
import useCategory from '../../hooks/useCategory/useCategory.js'
import List from '../List/List.js'
//import Listitem from '../Listitem/Listitem.js'
import Title from '../Title/Title.js'
import Filter from '../Filter/Filter.js'
function App() {
    const [titre, setTitre]=useState("projet cour");
    const articles  = useArticle();
    const categories  = useCategory();

    useEffect(()=>{
        setTitre(titre,document.title=titre);
    },[titre])

/*
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
*/
    /*
    const [title, settitle]=useState('Article');
    function handlchange(event){
        console.log(event.target.value);
        settitle(event.target.value);
    }

    const [categorys, setcategorys]=useState('');
    function handlchangecat(event){
        setcategorys(event.target.value);
    }
    */
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
            <Filter categories={categories} category={filters.category} published={filters.published} title={filters.title} handleFilterChange={handleFilterChange}>
            </Filter>
            <Title titre={titre}></Title>
            <List articles={filteredArticles} categories={categories}></List>
        </div>
    );
}
export default App;
/*<Listitem produit={produit}></Listitem>*/ 