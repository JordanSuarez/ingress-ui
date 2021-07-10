import {node, bool} from 'prop-types'
import {Link} from "react-router-dom";

import './Body.css'
import {MISSIONS} from "../../routing/routesResolver";

function Body({children, isLoading}) {

  return (
    <div className="body">
        <h1 className='body_title'>
            <Link to={MISSIONS}>Ingress game</Link>
        </h1>
        {!isLoading && children}
    </div>
  );
}

Body.propTypes = {
    children: node.isRequired,
    isLoading: bool.isRequired
}

export default Body;
