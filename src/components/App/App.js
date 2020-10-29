import {useEffect,useState} from 'react';
import useArticle from '../../hooks/useArticle/useArticle.js'
import useCategory from '../../hooks/useCategory/useCategory.js'
import List from '../List/List.js'
import Listitem from '../Listitem/Listitem.js'
import Title from '../Title/Title.js'
import Filter from '../Filter/Filter.js'
function App() {
    const [titre, setTitre]=useState("projet cour");
    const articles = useArticle();
    const categories = useCategory();

    useEffect(()=>{
        setTitre(titre,document.title=titre);
    },[titre])


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
    const [title, settitle]=useState('Article');
    function handlchange(event){
        console.log(event.target.value);
        settitle(event.target.value);
    }
    
    const filteredarticle = articles
        .filter(art => art.title.includes(title));
    return (
        <div>
            <Filter title={title} handlchange={handlchange}></Filter>
            <Title titre={titre}></Title>
            <List articles={filteredarticle} categories={categories}></List>
            <Listitem produit={produit}></Listitem>
        </div>
    );
}
export default App;