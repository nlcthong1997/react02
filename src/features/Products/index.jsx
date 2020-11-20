import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import NotFound from '../../components/NotFound';
import Main from './pages/Main';

const Products = () => {
    const { url } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={url}>
                <Main/>
            </Route>
            
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
}

export default Products;