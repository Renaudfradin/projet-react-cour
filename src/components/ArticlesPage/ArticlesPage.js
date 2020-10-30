import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createarticle } from '../../service/articles/articles';

function ArticlesPage(props) {
    const [article, setArticle] = useState({
        title: '',
        content:'',
        published:''
    });
    const history = useHistory();

    function handlesubmit(event){
        event.preventDefault();
        createarticle(article)
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
                    not Published:
                    <input type="radio" name="published" value="" checked={article.published === 'false'} onChange={handleChange}/>
                </label>
                <label>
                    Published:
                    <input type="radio" name="published" value="published" checked={article.published === true} onChange={handleChange}/>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default ArticlesPage;