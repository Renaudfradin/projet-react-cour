import {useEffect,useState} from 'react';
import List from '../List/List.js'
import Listitem from '../Listitem/Listitem.js'
import Title from '../Title/Title.js'
function App() {
    const [titre, setTitre]=useState("projet cour");
    const [articles,setarticles]= useState([]);
    const url = 'http://localhost:3001/articles';
    useEffect(()=> {
        fetch(url)
            .then(reponse => reponse.json())
            .then(data => setarticles(data));
    },[url,setarticles]);

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
    
    return (
        <div>
            <Title titre={titre}></Title>
            <List articles={articles}></List>
            <Listitem produit={produit}></Listitem>
        </div>
    );
}
export default App;