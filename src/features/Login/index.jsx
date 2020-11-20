import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Slider from './components/Slider';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { abc } from '../../service/Auth'

const Login = () => {
  const { url } = useRouteMatch();
  console.log(abc());
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} md={24} lg={16}>
        <Slider/>
      </Col>
      <Col xs={24} md={24} lg={8}>
        <Switch>
          <Redirect exact from={url} to={`${url}/login`}></Redirect>

          <Route path={`${url}/login`}>
            <SignIn/>
          </Route>

          <Route path={`${url}/register`}>
            <SignUp/>
          </Route>
          
          <Route>
            <div>dsdsad</div>
          </Route>
        </Switch>
      </Col>
    </Row>
  );
}

export default Login;