import {useEffect,useState} from 'react';
function useArticle(){
    const [articles,setarticles]= useState([]);
    useEffect(()=> {
        fetch('http://localhost:3001/articles')
            .then(reponse => reponse.json())
            .then(data => setarticles(data));
    },[setarticles]);
    return articles;
}
export default useArticle;