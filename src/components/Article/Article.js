import { useState } from 'react';
import className from 'classnames';

import './Article.css'
function Article(props){
    const {arts} = props;
    const {id, title, published} = arts;

    const [selected , setselected] = useState(false);
    console.log(selected);


    function clickdiv(){
        console.log("clickkkkkk");
        setselected(!selected);
    }

    return(
        <div className={className("Article", {"Article__selected":selected})} onClick={clickdiv}>
            <h1 className="Article__title">hello world</h1>
            <div className="Article__componante">
                <p>{id}</p>
                <p>{title}</p>
                <p>{published ? 'published' : 'notpublished'}</p>
            </div>
        </div>
    );
}
Article.defaultProps ={

}
export default Article;