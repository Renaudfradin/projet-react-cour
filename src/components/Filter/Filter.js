import {useState} from 'react';
function Filter(props) {
    const { title,handlchange } = props
    return(
        <div>
            <input type="text" value={title} onChange={handlchange}></input>
        </div>
    )
}
export default Filter;