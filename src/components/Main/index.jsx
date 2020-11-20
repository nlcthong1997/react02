import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from '../../features/Login';
import Products from '../../features/Products';
import NotFound from '../NotFound';
import './main.css'

// const Products = React.lazy(() => import('../../features/Products'));

const Main = () => {
  const { Content } = Layout;
  return (
    <Content style={{ padding: "0 50px", marginTop: "1rem" }}>
      <div className="site-layout-content">
        <Switch>
          <Redirect exact from="/" to="/auth"></Redirect>

          <Route path="/auth">
            <Login/>
          </Route>

          <Route path="/products">
            <Products/>
          </Route>

          <Route>
            <NotFound/>
          </Route>

        </Switch>
      </div>
    </Content>
  );
}

export default Main;