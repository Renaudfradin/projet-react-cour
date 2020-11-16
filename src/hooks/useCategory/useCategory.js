import {useEffect,useState} from 'react';
import {getcategories} from '../../service/categories/categories.js'
function useCategory() {
    const [categories,setcategories]=useState([]);
    useEffect(()=> {
        getcategories()
            .then(data => setcategories(data))
    },[setcategories]);
    return categories;
}
export default useCategory;