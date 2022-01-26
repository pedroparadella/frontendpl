import React from 'react';
import { BrowserRouter,Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Pokemon from '../pages/Pokemon';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/pokemon" component={Pokemon} />
        </Switch>
    </BrowserRouter>
);

export default Routes;