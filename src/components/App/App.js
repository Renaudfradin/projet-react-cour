import {lazy, Suspense} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../Header/Header.js'
import createContext  from '../../contexts/categories.js'
import useCategory from '../../hooks/useCategory/useCategory.js'
/*
import ArticlePage from '../ArticlePage/ArticlePage.js'
import ArticlesPage from '../ArticlesPage/ArticlesPage.js'
import TicTacToe from '../TicTacToe/TicTacToe.js'
import Timer from '../Timer/Timer.js'
*/
const ArticlePage = lazy(() => import ('../ArticlePage/ArticlePage.js'))
const ArticlesPage = lazy(() => import ('../ArticlesPage/ArticlesPage.js'))
const TicTacToe = lazy(() => import ('../TicTacToe/TicTacToe.js'))
const Timer = lazy(() => import ('../Timer/Timer.js'))


function App() {
    const categories =useCategory();

    return(
        <createContext.Provider value={categories}>
            <BrowserRouter>
                <Header></Header>
                <Suspense fallback={Header}>
                <Switch>
                    <Route exact path="/" component={ArticlePage}></Route>
                    <Route exact path="/article" component={ArticlesPage}></Route>        
                    <Route exact path="/article/:id" component={ArticlesPage}></Route>   
                    <Route exact path="/Timer" component={Timer}></Route>   
                    <Route exact path="/TicTacToe" component={TicTacToe}></Route>  
                    <Route component={()=> '404'}></Route> 
                </Switch>
                </Suspense>
            </BrowserRouter>
        </createContext.Provider>
        
    );
}

export default App;