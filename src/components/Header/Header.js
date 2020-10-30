import src from '../../logo.svg'
import {Link} from 'react-router-dom';
 
function Header(params) {
    return(
        <div>
            <h1>header</h1>
            <Link to="/"><img src={src} alt="logoheader" width="100"></img></Link>          
        </div>
    )
}
export default Header;