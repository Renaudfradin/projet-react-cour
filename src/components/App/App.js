import ArticlePage from '../ArticlePage/ArticlePage.js'
import ArticlesPage from '../ArticlesPage/ArticlesPage.js'
import { BrowserRouter, Route} from 'react-router-dom'
function App() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={ArticlePage}></Route>
            <Route exact path="/article" component={ArticlesPage}></Route>        
            <Route exact path="/article/:id" component={ArticlesPage}></Route>       
        </BrowserRouter>

        
    );
}

export default App;