import { useState } from 'react';
import className from 'classnames';
import {Link} from 'react-router-dom';

import './Article.css'
function Article(props){
    const {arts,categories} = props;
    const {category: categoryID,id, title ,content,published} = arts;
    const [selected , setselected] = useState(false);
    const category = categories.find(cat => cat.id === categoryID);
    //const ids = props.match.params.id;
    function clickdiv(){
        console.log("clickkkkkk");
        setselected(!selected);
    }

    return(
        <div className={className("Article", {"Article__selected":selected})} onClick={clickdiv}>
            <div className="Article__componante">
                <p>{id}</p>
                <p>{title}</p>
                <p>{category ? category.title :categoryID}</p>
                <p>{content}</p>
                <p>{published ? 'published' : 'notpublished'}</p>
                <Link to={`/article/${id}`}>edit</Link>
            </div>
        </div>
    );
}
Article.defaultProps ={

}
export default Article;