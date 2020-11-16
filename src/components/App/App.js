import ArticlePage from '../ArticlePage/ArticlePage.js'
import ArticlesPage from '../ArticlesPage/ArticlesPage.js'
import Header from '../Header/Header.js'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import  createContext  from '../../contexts/categories.js'
import useCategory from '../../hooks/useCategory/useCategory.js'
import TicTacToe from '../TicTacToe/TicTacToe.js'
import Timer from '../Timer/Timer.js'
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
                    <Route exact path="/Timer" component={Timer}></Route>   
                    <Route exact path="/TicTacToe" component={TicTacToe}></Route>  
                    <Route component={()=> '404'}></Route> 
                </Switch>
            </BrowserRouter>
        </createContext.Provider>
        
    );
}

export default App;