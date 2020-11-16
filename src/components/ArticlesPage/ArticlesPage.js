import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createarticle,getarticle,updatearticle,removearticle } from '../../service/articles/articles';
import useCategory  from '../../hooks/useCategory/useCategory.js'
function ArticlesPage(props) {
    const id = props.match.params.id;
    const Categories = useCategory();

    const [article, setArticle] = useState({
        title: '',
        content:'',
        published: '',
        category:''
    });
    const history = useHistory();

    useEffect(()=>{
        if (id) {
            getarticle(id).then(data=>setArticle(data));
        }
    },[id])

    function handlesubmit(event){
        event.preventDefault();
        if (id) {
            updatearticle(article)
                .then(()=> history.push('/'));
        }else{
            createarticle(article)
                .then(()=> history.push('/'));
        }
        
    }
    function removearticlessss(){
        removearticle(article)
            .then(()=> history.push('/'));
    }
    function handleChange(event) {
        setArticle({
          ...article,
          [event.target.name]: event.target.value
        });
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label>titre : 
                    <input 
                        name="title"
                        type="text"
                        value={article.title}
                        onChange={handleChange}
                    ></input>
                </label>
                <label>content : 
                    <input 
                        name="content"
                        type="text"
                        value={article.content}
                        onChange={handleChange}
                    ></input>
                </label>
                <label>
                    not Published:<input type="radio" name="published" value={false} checked={article.published === 'false'} onChange={handleChange}/>
                </label>
                
                <label>
                    Published:<input type="radio" name="published" value={true} checked={article.published === 'true'} onChange={handleChange}/>
                </label>
                
                <select name="category" value={article.category} onChange={handleChange}>
                    <option value=""></option>
                    {Categories.map(category => <option value={category.id} key={category.id}>{category.title}</option>)}
                </select>

                <input type="submit"></input>
            </form>
            <div>
                <button onClick={removearticlessss}>sup</button>
            </div>
            
        </div>
    )
}
export default ArticlesPage;