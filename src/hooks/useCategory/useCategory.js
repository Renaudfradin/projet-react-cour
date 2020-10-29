import {useEffect,useState} from 'react';
function useCategory() {
    const [categories,setcategories]=useState([]);
    useEffect(()=> {
        fetch('http://localhost:3001/categories')
            .then(reponse => reponse.json())
            .then(data => setcategories(data))
    },[setcategories]);
    return categories;
}
export default useCategory;