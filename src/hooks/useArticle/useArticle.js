import {useEffect,useState} from 'react';
import {getarticles} from '../../service/articles/articles.js'
function useArticle(){
    const [articles,setarticles]= useState([]);
    useEffect(()=> {
        getarticles()
            .then(data => setarticles(data));
    },[setarticles]);
    return articles;
}
export default useArticle;