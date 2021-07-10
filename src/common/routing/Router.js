import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import {routes} from "./routes";
import {MISSIONS} from "./routesResolver";

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route) => (
                    <Route {...route} key={route.path}/>
                ))}
                <Redirect to={MISSIONS}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
