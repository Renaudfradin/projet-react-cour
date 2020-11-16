import ArticlePage from '../ArticlePage/ArticlePage.js'
import ArticlesPage from '../ArticlesPage/ArticlesPage.js'
import Header from '../Header/Header.js'
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'
import  createContext  from '../../contexts/categories.js'
import useCategory from '../../hooks/useCategory/useCategory.js'
function App() {
    const categories =useCategory();

    return(
        <createContext.Provider value={categories}>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={ArticlePage}></Route>
                    <Route exact path="/article" component={ArticlesPage}></Route>        
                    <Route exact path="/article/:id" component={ArticlesPage}></Route>       
                    <Route component={()=> '404'}></Route> 
                </Switch>
            </BrowserRouter>
        </createContext.Provider>
        
    );
}

export default App;